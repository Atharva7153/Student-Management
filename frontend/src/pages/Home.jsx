import "../App.css"
import {useNavigate} from "react-router-dom"


export const Home = () => {

    const navigate = useNavigate()

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
                <p>by :- Atharva Sharma</p>

                <button className="Btn" onClick={ClickBtn}>Start</button>
            </div>
        </>
    )
}
