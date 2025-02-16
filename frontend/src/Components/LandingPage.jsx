
import Header from './Home Components/Header';
import Banner from './Home Components/Banner';
import FeaturedCourses from './Home Components/FeaturedCourses';  
import CallToAction from './Home Components/CallToAction';
import Footer from './Home Components/Footer';
import Testimonials from './Home Components/Testimonials';
function LandingPage() {
  return (
    <div>
      <Header/>
      <Banner />
      <FeaturedCourses />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default LandingPage;
