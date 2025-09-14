import React from "react";
import Hero from "../sections/Hero";
import AboutDoctor from "../sections/AboutDoctor";
import Services from "../sections/Services";
import HealthSection from "../sections/HealthSection";
import DoctorBlog from "../sections/DoctorBlog";
import Feedback from "../sections/Feedback";
import Qualification from "../sections/Qualification";
import OnlineConsultation from "../sections/OnlineConsultaion";
import Footer from "../sections/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutDoctor />
      <Services />
      <HealthSection />
      <DoctorBlog />
      <Feedback />
      <Qualification />
      <OnlineConsultation />
      <Footer/>
    </div>
  );
};

export default Home;
