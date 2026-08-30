
import {Route, Routes} from "react-router-dom"
import {Home} from "./pages/Home"
import About from "./pages/About"
import Students from "./pages/Students"
import Toppers from "./pages/Toppers"
import Edit from "./pages/Edit"
import Details from "./pages/Details"

import Error from "./pages/Error"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import EditStudent from "./pages/EditStudent"



function App() {
  

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/students" element={<Students />}/>
      <Route path="/toppers" element={<Toppers />}/>
      <Route path="/edit" element={<Edit />}/>
      <Route path="/student/id/:id" element={<Details />} />
      <Route path="/edit/id/:id" element={<EditStudent />} />



      <Route path="*" element={<Error/>}/>
      
    </Routes>
    <Footer />
    </>
  )
}

export default App
