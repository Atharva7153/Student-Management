import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import "./App.css"


function App() {
  

  return (
    <>

    <Navbar />
    <div className="main">
      <h1 className='bolde'>STUDENT MANAGEMENT <span className='under'> SYSTEM </span></h1>
      <p>I make this project so i can revise/comeback to MERN STACK</p>
      <br /><br />  
      <p>This is the 3rd Time i am making this, This Time Only by hand Not even uisng AI to make ui</p>
      <br /><br />
      <p>by :- Atharva Sharma</p>
    </div>
    
    

    <Footer />
    </>
  )
}

export default App
