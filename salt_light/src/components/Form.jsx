import React, { useState } from "react";
import { util, listingData } from "../data/data.js"
import { useNavigate } from "react-router";
import { useAuth } from "./AuthContext.jsx";

const UserForm = () => {
    const navigate = useNavigate()
    const {IsLoggedIn,signup,logout,IsOpen,toggleMenu} = useAuth()


    const [formData, setFormData] = useState({
      name: "",
      email: "",
      role: "Member",
      password: "",
      confirmPassword: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
        //TODO 
            //LOOP THORUGH USERS AND CHECK IF USER ALREADY EXITS
            //MAKE PASSWORD HARDER VALIDATION

      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const userExists = listingData.users.some(el=> el.name === formData.name)

      if(userExists) {
        alert("Username already picked. Try something else.")
        return;
      }
  
      // Use the factory function to create and store the user
      const newUser = util.createUser(
        formData.name,
        formData.email,
        formData.role,
        formData.password
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        role: "Member",
        password: "",
        confirmPassword: "",
      });

      const userData = formData.name
    
      signup(userData)
      navigate(`/profile/${formData.name}`)
    }

    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Create New User</h2>

          {/* Name */}
         <div className="mb-4">
           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
             Name
           </label>
           <input
             type="text"
               id="name"
             name="name"
            value={formData.name}
             onChange={handleChange}
             required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
           />
        </div>

          {/* Email */}
         <div className="mb-4">
           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
           </label>
           <input
             type="email"
               id="email"
             name="email"
            value={formData.email}
             onChange={handleChange}
             required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
           />
        </div>

          {/* Role */}
         <div className="mb-4">
           <label htmlFor="role" className="block text-sm font-medium text-gray-700">
             Role
           </label>
          <select
               id="role"
             name="role"
            value={formData.role}
             onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Admin">Admin</option>
              <option value="Member">Member</option>
           </select>
        </div>

          {/* Password */}
         <div className="mb-4">
           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
             Password
           </label>
           <input
             type="password"
               id="password"
             name="password"
            value={formData.password}
             onChange={handleChange}
             required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
           />
        </div>

          {/* Confirm Password */}
         <div className="mb-4">
           <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
           </label>
           <input
             type="password"
               id="confirmPassword"
             name="confirmPassword"
            value={formData.confirmPassword}
             onChange={handleChange}
             required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
           />
        </div>

          {/* Submit Button */}
    
        <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"            >
            Create User
        </button>
       
    </form>
    )
};

export {UserForm}