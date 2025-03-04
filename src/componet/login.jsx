import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Fetch user data from backend
      const response = await axios.get("https://solar-server-fm30.onrender.com");
      const users = response.data;
      
      // Find user with matching email
      const user = users.find((u) => u.email === email);
      //log here
      console.log("user data",user);
      if (user && user.password === password) {
        console.log("User data login:", user);
        navigate("/home");
        // Redirect user or store authentication token as needed
      } 
    } catch (err) {
      console.error(err);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center">
        Smart Solar Management System
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
