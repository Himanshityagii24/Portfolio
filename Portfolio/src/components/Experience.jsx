import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import programmerIcon from '../assets/programmer.png';

const Experience = () => {
  const [selectedInternship, setSelectedInternship] = useState(1);
  const [direction, setDirection] = useState(0);

  const internships = [
    {
      title: "WebAI Solutions, Senior Backend Developer",
      period: "November 2024–Present",
      description: `At WebAI Solutions, I lead a team of developers in designing and building robust applications, ensuring timely delivery and high-quality outputs. I played a pivotal role in developing the peer-to-peer chat and notification features for the main app, boosting user engagement by 35%. Additionally, I designed and implemented the backend for the admin portal of the Forexx trading application, streamlining administrative operations. My contributions to the Rapha Gym project involved building key backend functionalities, enhancing data management efficiency by 25%.`
    },
    {
      title: "Oddmind Innovations, FullStack Developer",
      period: "August 2024–October 2024",
      description: `During my internship at Oddmind Innovations, I engineered an event page for the Debsoc online application, increasing user participation through intuitive design and functionality. I also created an admin management page that allows users to be assigned to event rooms, which reduced event setup time by 50%. In addition, I designed a responsive and dynamic landing page that improved user navigation and increased session duration by 20%.`
    },
    {
      title: "ZippiAi, Software Developer",
      period: "June 2024–July 2024",
      description: `At ZippiAi, I developed a robust admin portal for the main application, incorporating user tracking and Stripe payment integration, which reduced transaction errors by 15%. I also enhanced the functionality of the application by integrating OCR and Google Maps APIs, resulting in a 25% increase in user retention. Furthermore, I designed a Chrome extension that extended the main application's accessibility, improving its usability for users.`
    },
    {
      title: "D&Wtech, FullStack Developer",
      period: "November 2023–January 2024",
      description: `During my time at D&Wtech, I built a secure registration application with authentication, reducing unauthorized access by 40%. I integrated Razorpay for seamless payment transactions, achieving a 95% success rate in processing. Additionally, I led the development of the GyanApp Electron application, where I implemented PDF generation features that enhanced user productivity by 30%.`
    },
    {
      title: "PU Portal, FullStack Developer",
      period: "January 2023–Present",
      description: `At PU Portal, I developed a secure email distribution system that delivered unique passwords to 200+ users, enhancing login security. I was also responsible for developing and deploying the application with secure authentication, which reduced the Ph.D. admission process time by 60%. This project had a significant impact on improving the overall efficiency of the admission process at Panjab University.`
    }
  ];

  const handleInternshipChange = (newIndex) => {
    setDirection(newIndex > selectedInternship ? 1 : -1);
    setSelectedInternship(newIndex);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-6 bg-[#020617]">
      {/* Left Side - Icon */}
      <div className="flex items-center justify-center w-full lg:w-1/2 h-full mb-8 lg:mb-0">
        <motion.img
          src={programmerIcon}
          alt="Programmer Icon"
          className="object-contain w-3/4 h-3/4 lg:w-3/4 lg:h-3/4"
          animate={{ rotateY: 360 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
        />
      </div>

      {/* Right Side - Text */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 h-full p-8 rounded-lg bg-[#042f35] border border-[#129eaf40] shadow-lg">
        {/* Dot Navigation */}
        <div className="flex gap-3 mb-8 justify-center">
          {internships.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => handleInternshipChange(index + 1)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300
                ${selectedInternship === index + 1 ? 'bg-[#129eaf]' : 'bg-[#129eaf40]'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="overflow-hidden w-full relative min-h-[400px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={selectedInternship}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="w-full absolute"
            >
              <h2 className="text-[#129eaf] text-xl lg:text-2xl font-bold mb-2">
                {internships[selectedInternship - 1].title}
              </h2>
              <h3 className="text-[#129eaf] text-md lg:text-lg mb-4 opacity-80">
                {internships[selectedInternship - 1].period}
              </h3>
              <p className="text-[#129eaf] text-md lg:text-lg leading-relaxed">
                {internships[selectedInternship - 1].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
