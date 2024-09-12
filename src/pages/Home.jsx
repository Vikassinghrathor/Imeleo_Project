import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SolutionSection from "../components/SolutionSection";
import ServiceSection from "../components/ServiceSection";
import BlogsSection from "../components/BlogsSection";
import AboutSection from "../components/AboutSection";
import FounderSection from "../components/FounderSection";
import WhyToChooseSection from "../components/WhyToChooseSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
        <SolutionSection/>
        <ServiceSection/>
        <BlogsSection/>
        <AboutSection/>
        <FounderSection/>
        <WhyToChooseSection/>
        <ContactSection/>
        <Footer/>
      </div>
    </>
  )
}

export default Home