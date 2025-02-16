import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate for programmatic routing

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    // Create a new FormData object from the form element
    const formData = new FormData(e.target); // e.target refers to the form

    // Convert FormData to a plain object (optional)
    const formObject = Object.fromEntries(formData.entries());

    // Check if passwords match
    if (formObject.password !== formObject['confirm-password']) {
      setError('Passwords do not match');
      return;
    }

    // Clear previous error message
    setError('');

    // Example of sign-up data
    const userData = {
      email: formObject.email,
      password: formObject.password,
    };

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        // Handle server-side error
        const data = await response.json();
        setError(data.message || 'Sign-up failed');
        return;
      }

      // If sign-up is successful, log success and navigate to login page
      
      navigate('/login'); // Redirect to login page
    } catch (error) {
      setError('Something went wrong, please try again.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
        
        {/* Display error message */}
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}

        <form onSubmit={handleSignUp}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email" // Name attribute is used by FormData
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password" // Name attribute is used by FormData
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Confirm Password Input */}
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password" // Name attribute is used by FormData
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        {/* Link to Login */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
