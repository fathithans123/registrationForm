import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"


const App = () => {
  return (
    <div>
        <Routes>
            <Route path= '/' element={<Register/>} />
            <Route path= '/login' element={<Login/>} />
            <Route path= '/home' element={<Home/>} />
        </Routes>
    </div>
  )
}

export default App
