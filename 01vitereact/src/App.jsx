import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ResponsiveWrapper from './ResponsiveWrapper';

const App = () => {
  const projects = [
    { title: 'Training and Placement Cell', description: 'The Training and Placement (T&P) Cell website of a college is a dedicated platform designed to bridge the gap between students and prospective employers. It serves as a comprehensive resource for students to prepare for and secure job opportunities, while also providing companies with a streamlined process to recruit talent from the institution.' },
    { title: 'Udemy Clone', description: 'The Udemy clone is a robust and interactive e-learning platform designed to mimic the functionalities and user experience of Udemy. It enables users to sign up, browse a diverse range of courses, purchase and enroll in them, and track their learning progress. Additionally, it provides a platform for instructors to create, manage, and sell their courses.' },
    { title: 'Weather app', description: 'The Weather App is a user-friendly application that provides up-to-date weather information for users in various locations worldwide. It leverages real-time data to offer accurate forecasts and current conditions, helping users plan their activities and stay informed about weather changes.' },
  ];


  return (
    <Router>
      <Header />
      <Navbar />
      <ResponsiveWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ResponsiveWrapper>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
