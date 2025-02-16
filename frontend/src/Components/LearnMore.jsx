import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../coursesData';
import ReviewSection from './ReviewSection'; // Import ReviewSection
import Header from './Home Components/Header';
import Footer from './Home Components/Footer';

function LearnMore() {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation
  const course = coursesData.find(course => course.id === parseInt(id));
  
  const [isPlaying, setIsPlaying] = useState(false); // State to control video playback
  
  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-semibold text-red-500">Course Not Found</h2>
        <p className="text-gray-600">The course you are looking for does not exist.</p>
      </div>
    );
  }

  const handleEnroll = () => {
    // Example: Redirect to an enrollment page
    alert(`Enrolled in ${course.title}`);
    // You can replace this with:
    // navigate('/enrollment');
  };

  const handleBuyNow = () => {
    // Example: Redirect to a buy now or payment page
    alert(`Purchased ${course.title}`);
    // You can replace this with:
    // navigate('/payment');
  };

  const handlePlayPreview = () => {
    setIsPlaying(true); // Set isPlaying to true when the button is clicked
  };

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto py-10 px-6">
        {/* Flex container for Course Details and Preview Image */}
        <div className="flex justify-between items-start mb-6">
          {/* Left: Course Details */}
          <div className="flex-1 mr-6">
            <h1 className="text-5xl font-bold text-gray-800">{course.title}</h1>
            <p className="text-gray-600 text-lg mt-4">{course.description}</p>
            <div className='flex justify-between items-center'>
  {/* Course Details */}
  <div className='flex-1 mr-6'>
    <div className="mt-6">
      <h3 className="text-2xl font-semibold text-gray-800">Course Details</h3>
      <p className="text-gray-700 text-lg"><strong>Category:</strong> {course.category}</p>
      <p className="text-gray-700 text-lg"><strong>Price:</strong> ${course.price}</p>
      <p className="text-gray-700 text-lg"><strong>Difficulty:</strong> {course.difficulty}</p>
    </div>
  </div>

  {/* Right: Course Preview Image or Video */}
  <div className="flex-shrink-0 w-48 h-32 relative z-10">
    {isPlaying ? (
      // Display video player when isPlaying is true
      <iframe
        className="w-full h-full rounded-lg"
        src={course.previewVideo} // Add the URL of the preview video here
        title="Course Preview"
        allowFullScreen
      />
    ) : (
      <div className="relative w-full h-full">
        <img 
          src={course.previewImage || '/path/to/placeholder-image.jpg'} 
          alt={course.title} 
          className="w-full h-full object-cover rounded-lg" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-20">
          <button
            onClick={handlePlayPreview}
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-lg z-20"
          >
            ▶ Preview
          </button>
        </div>
      </div>
    )}
  </div>
</div>


            {/* Weekly Topics Section */}
            {course.weeklyTopics && course.weeklyTopics.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800">Weekly Topics</h3>
                <ul className="list-disc list-inside mt-4">
                  {course.weeklyTopics.map((topic, index) => (
                    <li key={index} className="text-gray-700 text-lg">{topic}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Enroll or Buy Now Button */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handleEnroll}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
              >
                Add To Cart
              </button>
            </div>
          </div>

          
        </div>

        {/* Reviews Section */}
        {course.reviews && course.reviews.length > 0 ? (
          <ReviewSection reviews={course.reviews} />
        ) : (
          <div className="mt-6 text-gray-600">No reviews yet. Be the first to leave a review!</div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default LearnMore;
