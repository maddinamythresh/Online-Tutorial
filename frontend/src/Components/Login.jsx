import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Login
          </button>
        </form>

        {/* Link to Sign Up */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        {/* Forgot Password Link */}
        <p className="mt-2 text-center text-sm text-blue-600">
          <Link to="/forgot-password" className="hover:underline">
            Forgot your password?
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
