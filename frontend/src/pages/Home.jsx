import { useState } from "react"
import "../App.css"
import {useNavigate} from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"


export const Home = () => {

    const navigate = useNavigate()
    const [totalStudent, setTotalStudent] = useState()
    const [totalTopper, setTotalToppers] = useState()
    const backend_uri = import.meta.env.VITE_BACKEND_URI
    console.log(backend_uri)
    
    useEffect(()=>{

        const getTotal = async ()=>{
            const response = await axios.get(`${backend_uri}/total-students`)
            setTotalStudent(response.data.total)

        }

        getTotal()

    }, [])

    useEffect(()=>{
        const getTotalToppers = async()=>{

            const response = await axios.get(`${backend_uri}/total-toppers`)
            setTotalToppers(response.data.total)

        }
        getTotalToppers()
    }, [])

    

    const ClickBtn = ()=>{
        navigate("/students")
    }
    return (
        <>
            <div className="main">
                <h1 className='bolde'>STUDENT MANAGEMENT <span className='under'> SYSTEM </span></h1>
                <p>I make this project so i can revise/comeback to MERN STACK</p>
                <br /><br />
                <p>This is the 3rd Time i am making this, This Time Only by hand Not even uisng AI to make ui</p>
                <br /><br />
                
                <p>There are total {totalStudent} Students </p>
                <p>There are total {totalTopper} Toppers </p>

                <button className="Btn" onClick={ClickBtn}>Start</button>
            </div>
        </>
    )
}
