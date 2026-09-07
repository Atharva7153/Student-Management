
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import About from "./pages/About"
import Students from "./pages/Students"
import Toppers from "./pages/Toppers"
import Edit from "./pages/Edit"
import Details from "./pages/Details"

import Error from "./pages/Error"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import EditStudent from "./pages/EditStudent"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import ProtectedRoute from "../src/components/ProtectedRoute"
import AdminRoute from "./components/AdminRoute"



function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


        <Route element={<ProtectedRoute />}>

          <Route path="/toppers" element={<Toppers />} />
          <Route path="/student/id/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />

        </Route>

        <Route element={<AdminRoute />}>

          <Route path="/edit" element={<Edit />} />
          <Route path="/edit/id/:id" element={<EditStudent />} />

        </Route>



        <Route path="*" element={<Error />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
