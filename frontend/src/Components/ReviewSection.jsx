import React, { useState } from 'react';

// Function to display filled stars based on the rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStar = rating % 1 !== 0; // Check if there’s a half star (fractional part)
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Empty stars calculation

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <svg key={`full-${index}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-yellow-500" viewBox="0 0 20 20">
          <path d="M10 15l-5.276 3.422 1.004-5.88-4.332-4.244 5.922-.436L10 .687l2.682 5.175 5.922.436-4.332 4.244 1.004 5.88L10 15z" />
        </svg>
      ))}
      
      {/* Half Star */}
      {halfStar && (
        <svg key="half" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-yellow-500" viewBox="0 0 20 20">
          <path d="M10 15l-5.276 3.422 1.004-5.88-4.332-4.244 5.922-.436L10 .687l2.682 5.175 5.922.436-4.332 4.244 1.004 5.88L10 15z" />
        </svg>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <svg key={`empty-${index}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-300" viewBox="0 0 20 20">
          <path d="M10 15l-5.276 3.422 1.004-5.88-4.332-4.244 5.922-.436L10 .687l2.682 5.175 5.922.436-4.332 4.244 1.004 5.88L10 15z" />
        </svg>
      ))}
    </div>
  );
};

// Calculate the overall rating based on individual ratings
const calculateOverallRating = (reviews) => {
  if (reviews.length === 0) return 0;
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  return totalRating / reviews.length; // Don't round the rating
};

// Function to render rating bars for each star category
const renderRatingBar = (ratingCount, totalReviews) => {
  const percentage = (ratingCount / totalReviews) * 100; // Calculate the percentage of reviews for the rating

  return (
    <div className="relative w-full max-w-xs h-4 bg-gray-200 rounded-lg"> {/* Adjust width and height for neatness */}
      <div
        className="h-full bg-yellow-500 rounded-lg"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const ReviewSection = ({ reviews }) => {
  const [filterRating, setFilterRating] = useState(0);
  const [likes, setLikes] = useState({});  // State to store like counts for each review
  const [dislikes, setDislikes] = useState({}); // State to store dislike counts

  // Filter reviews based on selected rating
  const filteredReviews = reviews.filter(review => filterRating === 0 || review.rating === filterRating);

  // Count reviews for each star rating
  const ratingCounts = [1, 2, 3, 4, 5].map((star) => {
    return reviews.filter((review) => review.rating === star).length;
  });

  const totalReviews = reviews.length;

  // Function to handle like button click
  const handleLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = { ...prevLikes };
      newLikes[index] = (newLikes[index] || 0) + 1;  // Increment like count for this review
      return newLikes;
    });
  };

  // Function to handle dislike button click
  const handleDislike = (index) => {
    setDislikes((prevDislikes) => {
      const newDislikes = { ...prevDislikes };
      newDislikes[index] = (newDislikes[index] || 0) + 1;  // Increment dislike count for this review
      return newDislikes;
    });
  };

  return (
    <div className="mt-8">
      {/* Overall Rating */}
      <h3 className="text-2xl font-semibold text-gray-800">Reviews</h3>
      <div className="flex items-center mt-4">
        <span className="text-xl font-semibold text-gray-700">Overall Rating: </span>
        <div className="ml-2 text-2xl">
          {renderStars(calculateOverallRating(reviews))} {/* Display overall rating stars */}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mt-4">
        <label htmlFor="rating-filter" className="font-semibold text-gray-700">Filter by Rating: </label>
        <select
          id="rating-filter"
          className="ml-2 p-2 border border-gray-300 rounded"
          value={filterRating}
          onChange={(e) => setFilterRating(Number(e.target.value))}
        >
          <option value="0">All Ratings</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>

      {/* Rating Distribution Bar */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold text-gray-700">Rating Distribution</h4>
        {[1, 2, 3, 4, 5].map((star, index) => (
          <div key={index} className="mt-2">
            <div className="flex items-center gap-2">
              <div className="w-12 text-center font-medium">{star} Star</div>
              <div className="w-full max-w-xs">
                {renderRatingBar(ratingCounts[star - 1], totalReviews)} {/* Bar width is controlled by this div */}
              </div>
              <div className="ml-2 text-gray-700">{ratingCounts[star - 1]} reviews</div> {/* Review count with fixed margin */}
            </div>
          </div>
        ))}
      </div>

      <br />

      {/* Individual Reviews */}
      <div className="p-4 bg-gray-50 rounded-lg">
        {filteredReviews.length > 0 ? (
          <div className="mt-4 grid gap-4 p-4 rounded-lg">
            {filteredReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
              >
                {/* Display rating for individual review */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4">{renderStars(review.rating)}</div>
                  </div>

                  {/* Like & Dislike Buttons */}
                  <div className="flex items-center space-x-4">
                    {/* Like Button */}
                    <div className="relative group">
                      <button
                        className="text-gray-300 hover:text-green-500 text-xl"
                        onClick={() => handleLike(index)}
                      >
                        👍
                      </button>
                      <span className="absolute bottom-full mb-1 hidden group-hover:block text-xs text-white bg-black px-2 py-1 rounded-lg">
                        Helpful
                      </span>
                    </div>
                    <div className="text-gray-600">{likes[index] || 0}</div> {/* Display the number of likes */}

                    {/* Dislike Button */}
                    <div className="relative group">
                      <button
                        className="hover:text-red-500 text-xl"
                        onClick={() => handleDislike(index)}
                      >
                        👎
                      </button>
                      <span className="absolute bottom-full mb-1 hidden group-hover:block text-xs text-white bg-black px-2 py-1 rounded-lg">
                        Not Helpful
                      </span>
                    </div>
                    <div className="text-gray-600">{dislikes[index] || 0}</div> {/* Display the number of dislikes */}
                  </div>
                </div>

                {/* Review Comment */}
                <p className="text-gray-700 text-lg mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 mt-2">No reviews available for this rating.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
