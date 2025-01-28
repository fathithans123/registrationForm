import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [email,  setEmail] = useState("")
  const [password, setPassword] = useState("");
  const navigate =useNavigate();

  const LoginUser = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:8000/api/user/login", {
      email: email,
      password: password,
    });
    console.log(response);
    alert("Login Succesfull");

    navigate("/home");
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message); // Show the error message from the backend
    } else {
      alert("Failed to login");
    }
  }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
       <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Login
        </h2>
        <form onSubmit={LoginUser} className="space-y-4">
          <div>
           <label className="block text-sm font-medium text-gray-700 mb-1"> 
            Email: 
            </label>
           <input 
           type="email" 
           placeholder="Your Email" 
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
           onChange={(e) => setEmail(e.target.value)} 
           required
           />
           </div>

          <div>
          <label className="block text-sm font-medium text-gray-700 mb-1"> 
            Password: 
            </label>
           <input 
           type="password" 
           placeholder="Your Password" 
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
           onChange={(e) => setPassword(e.target.value)} 
           required
           />
           </div>

           <button 
           type="submit"
           className="w-full bg-green-500 text-white py-2 px-4 rounded-md green:bg-blue-600 transition">
           Login
           </button>
        </form>
    </div>
    </div>
  )
}

export default Login