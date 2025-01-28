import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"




const App = () => {
  return (
    <div>
      <Navbar />

        <Routes>
            <Route path= '/' element={<Register/>} />
            <Route path= '/login' element={<Login/>} />
            <Route path= '/home' element={<Home/>} />

        </Routes>
    </div>
  )
}

export default App

