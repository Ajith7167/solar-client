import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile Updated: ${name}`);
  };

  return (
    <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center">User Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          name="name" 
          placeholder="Full Name" 
          value={name} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded-md"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;