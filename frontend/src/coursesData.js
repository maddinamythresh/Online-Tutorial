import advanced from './assets/advanced javascript.png'

const coursesData = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'Learn React from scratch and build modern web applications.',
    image: 'https://via.placeholder.com/150',
    link: '/course/1',
    previewImage: 'https://via.placeholder.com/600x400',
    previewVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',  // Sample YouTube video URL
    category: 'web development',
    price: 49.99,
    difficulty: 'beginner',
    reviews: [
      {
        userId: 1,
        rating: 5,
        comment: 'Great course for beginners! Really helped me understand React.'
      },
      {
        userId: 2,
        rating: 4,
        comment: 'Good course, but I wish there were more hands-on examples.'
      }
    ],
    comments: [
      {
        userId: 3,
        text: 'Can anyone explain more about the useState hook?'
      },
      {
        userId: 4,
        text: 'I had trouble with the final project. Any tips?'
      }
    ]
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Deep dive into JavaScript and its advanced concepts.',
    image: advanced, // Use the imported image here
    link: '/course/2',
    previewImage: advanced,
    previewVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'web development',
    price: 79.99,
    difficulty: 'intermediate',
    reviews: [
      {
        userId: 3,
        rating: 4,
        comment: 'Really advanced, but very rewarding if you stick with it.'
      },
      {
        userId: 4,
        rating: 5,
        comment: 'Perfect for leveling up your JavaScript skills.'
      }
    ],
    comments: [
      {
        userId: 5,
        text: 'What are the best resources to practice ES6 features?'
      },
      {
        userId: 6,
        text: 'Struggling with closures, any suggestions for more examples?'
      }
    ]
  },
  // Add other courses similarly
];

export default coursesData;
