import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [UserName,  setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("");

  const navigate =useNavigate();

  const FeedbackUser = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:8000/api/contact/feedback", {
      UserName: UserName,
      email: email,
      feedback: feedback,
    });
    console.log(response);
    alert("Feedback Submitted");

    navigate("/home");
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Feedback Required");
    }
  }
}

  return (
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
       <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Feedback Form
        </h2>
        <form onSubmit={FeedbackUser} className="space-y-4">
        <div>
           <label className="block text-sm font-medium mb-1"> UserName: </label>
           <input 
           type="text"
           placeholder="Your User Name" 
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
           onChange={(e) => setUserName(e.target.value)} 
           required 
           />
          </div>
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
            Feedback: 
            </label>
           <input 
           type="text" 
           placeholder="Your Feedback" 
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
           onChange={(e) => setFeedback(e.target.value)} 
           required
           />
           </div>

           <button 
           type="submit" onClick={FeedbackUser}
           className="w-full bg-green-500 text-white py-2 px-4 rounded-md green:bg-blue-600 transition">
           Thank You
           </button>
        </form>
    </div>
    </div>
  )
}

export default Home