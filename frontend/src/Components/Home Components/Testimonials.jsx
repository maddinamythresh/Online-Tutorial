import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "The React course was incredibly helpful! I now feel confident building web apps.",
      name: "John Doe",
      role: "Web Developer",
    },
    {
      text: "The Data Science Bootcamp provided me with the practical skills I needed to advance in my career.",
      name: "Jane Smith",
      role: "Data Scientist",
    },
    {
      text: "The Full Stack Web Development course helped me land my first job as a developer!",
      name: "Mark Johnson",
      role: "Full Stack Developer",
    },
    {
      text: "Thanks to the Machine Learning with Python course, I was able to build my own AI projects.",
      name: "Emily Davis",
      role: "AI Developer",
    },
    {
      text: "The UI/UX Design Fundamentals course taught me the best practices for designing user-friendly interfaces.",
      name: "Samuel Lee",
      role: "UI/UX Designer",
    },
    {
      text: "The JavaScript Essentials course helped me understand core concepts and boost my coding skills.",
      name: "Sophia Wang",
      role: "Software Engineer",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Calculate the displayed testimonials based on currentIndex
  const displayedTestimonials = [
    testimonials[currentIndex * 3], // First testimonial in the set
    testimonials[currentIndex * 3 + 1], // Second testimonial in the set
    testimonials[currentIndex * 3 + 2], // Third testimonial in the set
  ];

  // Calculate the total number of "pages" (groups of 3 testimonials)
  const totalPages = Math.ceil(testimonials.length / 3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">What Our Students Say</h2>
        <p className="text-lg text-gray-600">Discover how Udemy is changing lives</p>
      </div>

      {/* Testimonials Carousel */}
      <div className="flex justify-center gap-8 mb-4">
        {displayedTestimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
            <p className="text-lg italic">"{testimonial.text}"</p>
            <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>

      {/* Dots below */}
      <div className="flex justify-center gap-2 mt-4">
        {/* Generate dots based on the totalPages */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
