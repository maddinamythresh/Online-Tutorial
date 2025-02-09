import bannerImage from '../../assets/banner.webp'

export default function Banner() {
    return (
      <section 
        className="relative w-full h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-bold">Upgrade Your Skills with Udemy</h1>
          <p className="mt-4 text-lg text-gray-200">
            Learn from industry experts at your own pace.
          </p>
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition">
            Explore Courses
          </button>
        </div>
      </section>
    );
  }
  