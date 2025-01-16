import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";


const Register = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email,  setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const navigate = useNavigate();

const RegisterUser = async (e) => {
  e.preventDefault();


// Check if passwords match before sending to the backend
if (password !== confirmPassword) {
  alert("Passwords do not match");
  return;
}
try {
  const response = await axios.post("http://localhost:8000/api/user/", {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });
  console.log(response);
  alert("Registered Successfully!!");
  navigate("/login");
} catch (error) {
  if (error.response) {
    alert(error.response.data.message); //Shows the error message from the backend
} else {
  alert("Failed to register");
}
  }
};


  return (
    <div>
        <form onSubmit={RegisterUser} className="space-y-4">
           <label for="firstName">FirstName</label>
           <input type="text" onChange={(e) => setFirstName(e.target.value)} required ></input>

           <label for="lastName">LastName</label>
           <input type="text" onChange={(e) => setLastName(e.target.value)} required ></input>

           <label for="email">Email</label>
           <input type="email" onChange={(e) => setEmail(e.target.value)} required ></input>

           <label for="password">Password</label>
           <input type="password" onChange={(e) => setPassword(e.target.value)} required ></input>

           <label for="password">Confirm Password</label>
           <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} required ></input>

           <button>Register</button>
           <p> Have an account? {" "}
            <Link to="/login">Login</Link>
            </p>
        </form>
    </div>
  )
}

export default Register