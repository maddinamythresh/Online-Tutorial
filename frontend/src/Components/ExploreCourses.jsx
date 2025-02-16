import React, { useState } from 'react';
import coursesData from '../coursesData';
import { Link } from 'react-router-dom';
import Header from './Home Components/Header';
import Footer from './Home Components/Footer';

function ExploreCourses() {
  // Filters state
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [difficulty, setDifficulty] = useState('');

  // Filtered courses based on selected filters
  const filteredCourses = coursesData.filter(course => {
    return (
      (category ? course.category === category : true) &&
      (price ? course.price <= price : true) &&
      (difficulty ? course.difficulty === difficulty : true)
    );
  });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-100 to-blue-200 py-10 opacity-95 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 drop-shadow-md">
            Explore Courses
          </h1>

          {/* Filters */}
          <div className="flex justify-center space-x-4 mb-8">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-3 rounded-md bg-white shadow-md"
            >
              <option value="">Select Category</option>
              <option value="web development">Web Development</option>
              <option value="data science">Data Science</option>
              <option value="machine learning">Machine Learning</option>
              <option value="devops">DevOps</option>
            </select>

            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-3 rounded-md bg-white shadow-md"
            >
              <option value="">Select Price</option>
              <option value="50">Under $50</option>
              <option value="100">Under $100</option>
              <option value="200">Under $200</option>
            </select>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="border p-3 rounded-md bg-white shadow-md"
            >
              <option value="">Select Difficulty</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Course List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 flex flex-col h-full transform transition duration-300 hover:scale-105"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {course.description.length > 100
                    ? course.description.substring(0, 100) + '...'
                    : course.description}
                </p>
                <div className="mt-auto">
                  <button className="w-full py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <Link to={`/courses/${course.id}`} className="block w-full h-full">
                      Learn More
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExploreCourses;
