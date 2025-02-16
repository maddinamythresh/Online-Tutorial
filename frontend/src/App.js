import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignUp';  // Add the SignUp component
import Login from './Components/Login';
import ExploreCourses from './Components/ExploreCourses';
import LearnMore from './Components/LearnMore';
import CartPage from './Components/Cart';

function App() {
  return (
    <Router>
      <div>
        {/* Add routes for different pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/explore-courses" element={<ExploreCourses />} />
          <Route path="/courses/:id" element={<LearnMore/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </div>
    </Router>
    

  );
}

export default App;
