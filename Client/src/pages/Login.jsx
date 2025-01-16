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
    <div>
        <form onSubmit={LoginUser} className="space-y-4">
           <label for="email">Email</label>
           <input type="email" onChange={(e) => setEmail(e.target.value)} required></input>

           <label for="password">Password</label>
           <input type="password" onChange={(e) => setPassword(e.target.value)} required></input>

           <button>Login</button>
           <p> Have an account? {" "}
            <Link to="/">Register</Link>
            </p>
        </form>
    </div>
  )
}

export default Login