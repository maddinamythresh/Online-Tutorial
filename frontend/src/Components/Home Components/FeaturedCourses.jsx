import { useState } from 'react';

export default function FeaturedCourses() {
  const [showAll, setShowAll] = useState(false);

  const courses = [
    { title: 'React for Beginners', description: 'Learn React.js from scratch and build dynamic web applications.', buttonText: 'View Course' },
    { title: 'Advanced JavaScript', description: 'Master advanced JavaScript concepts and improve your coding skills.', buttonText: 'View Course' },
    { title: 'Data Science Bootcamp', description: 'Get hands-on experience with data analysis and machine learning techniques.', buttonText: 'View Course' },
    { title: 'Full Stack Web Development', description: 'Become a full-stack developer with this complete web development course.', buttonText: 'View Course' },
    { title: 'Machine Learning with Python', description: 'Learn machine learning algorithms and apply them with Python programming.', buttonText: 'View Course' },
    { title: 'UI/UX Design Fundamentals', description: 'Understand the principles of UI/UX design and create user-friendly interfaces.', buttonText: 'View Course' },
    { title: 'Angular Mastery', description: 'Master Angular from beginner to advanced and create scalable web apps.', buttonText: 'View Course' },
    { title: 'Introduction to Node.js', description: 'Get hands-on experience building backend applications using Node.js.', buttonText: 'View Course' },
    { title: 'Web Development with Django', description: 'Learn how to build web applications using the Django framework.', buttonText: 'View Course' },
    { title: 'DevOps for Beginners', description: 'Learn the basics of DevOps practices and tools for continuous integration.', buttonText: 'View Course' },
    { title: 'Cloud Computing with AWS', description: 'Gain practical knowledge of cloud infrastructure and services with AWS.', buttonText: 'View Course' },
    { title: 'Advanced Python Programming', description: 'Take your Python skills to the next level with advanced concepts and techniques.', buttonText: 'View Course' },
  ];

  const visibleCourses = showAll ? courses : courses.slice(0, 5);

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8 mx-4 lg:mx-12">
        <h2 className="text-3xl font-semibold">Featured Courses</h2>
        <p className="text-lg text-gray-600">Discover our top-rated courses</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 lg:mx-12">
        {visibleCourses.map((course, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-500 mb-4">{course.description}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">{course.buttonText}</button>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 mx-4 lg:mx-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
    </section>
  );
}
