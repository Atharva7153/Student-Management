const fs = require('fs')


exports.getTotalStudents = (req, res) =>{

    const data = fs.readFileSync("data.json", "utf-8")
    const students = JSON.parse(data)

    res.json({
        total : students.length
    })

}

exports.getTotalToppers = (req, res) =>{

    const data = fs.readFileSync("toppers.json", "utf-8")
    const students = JSON.parse(data)

    res.json({
        total : students.length
    })

}

exports.getAllStudents = (req, res) =>{

    const data = fs.readFileSync("data.json", "utf-8")

    const students = JSON.parse(data)

    res.json(students)
}


exports.addStudents = (req, res) =>{

    const data = fs.readFileSync("data.json", "utf-8")

    const students = JSON.parse(data)

    const {name, age, branch} = req.body

    if (!name || !age || !branch) {
    return res.status(400).json({
        message: "Some fields are Missing"
    })
}

    const newStudent = {
        id : students.length + 1,
        name : name,
        age : age,
        course : branch
    }

    students.push(newStudent)

    fs.writeFileSync(
        "data.json",
        JSON.stringify(students, null, 2)
    )

    res.status(201).json(newStudent)
}

exports.getStudentByID = (req, res) =>{

    const data = fs.readFileSync("data.json", "utf-8");
    const students = JSON.parse(data);

    const id = Number(req.params.id);

    const student = students.find(
        (student) => student.id === id
    )

    if(!student){
        return res.status(404).json({
            message : "Student not found"
        })
    }

    res.json(student)

}

exports.updateStudentByID = (req, res) =>{

    const data = fs.readFileSync("data.json", "utf-8");
    const students = JSON.parse(data);

    const id = Number(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;
    student.course = req.body.course;

    fs.writeFileSync(
        "data.json",
        JSON.stringify(students, null, 2)
    );

    res.json(student);

}

exports.deleteStudentByID = (req, res) =>{

    const data = fs.readFileSync("data.json", "utf-8")
    const students = JSON.parse(data)

    const TopperData = fs.readFileSync("toppers.json", "utf-8")
    const toppers = JSON.parse(TopperData)


    const id = Number(req.params.id)

    const newTopper = toppers.filter(
        topper => topper.id !== id
    )

    const newStudent = students.filter(
        student => student.id !== id
    )

    fs.writeFileSync(
        "data.json",
        JSON.stringify(newStudent, null , 2)
    )

    fs.writeFileSync(
        "toppers.json",
        JSON.stringify(newTopper, null, 2)
    )


    res.json({
        message : "Student Deleted Successfully"
    })
    

}

exports.deleteTopperByID = (req, res) =>{


    const TopperData = fs.readFileSync("toppers.json", "utf-8")
    const toppers = JSON.parse(TopperData)


    const id = Number(req.params.id)

    const newTopper = toppers.filter(
        topper => topper.id !== id
    )


    fs.writeFileSync(
        "toppers.json",
        JSON.stringify(newTopper, null, 2)
    )


    res.json({
        message : "Student Removed from Toppers"
    })
    

}

exports.addTopper = (req, res) =>{

    const data = fs.readFileSync("toppers.json", "utf-8")

    const students = JSON.parse(data)
    const name = req.body.name

    const existingStudent = students.some(
        student => student.name == name
    )

    if(existingStudent){
        return res.json({
            message : "Student already exist in Toppers list"
        })
    }

    const newStudent = {
        id : students.length + 1,
        name : req.body.name,
        age : req.body.age,
        course : req.body.course
    }

    

    students.push(newStudent)

    fs.writeFileSync(
        "toppers.json",
        JSON.stringify(students, null, 2)
    )

    res.status(201).json({message : "Topper Added Succesfully"})
    
}

exports.getAllToppers = (req, res) =>{

    const data = fs.readFileSync("toppers.json", "utf-8")

    const students = JSON.parse(data)

    res.json(students)  
    
}

exports.getStudentByCourse = (req, res) =>{

    const data = fs.readFileSync("data.json", "utf-8")
    const course = req.params.course

    const students = JSON.parse(data)

    const Students = students.filter(
        student => student.course == course
    )

    res.json(Students)
    
}



