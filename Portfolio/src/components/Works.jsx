import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WorkTab = ({ title, content, isVisible, delay }) => {
  return (
    <motion.div
      initial={{ y: -1000, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -1000, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: delay,
      }}
      className="w-full md:w-[30%] p-6 rounded-lg bg-[#042f35] border 
                 border-[#129eaf40] shadow-lg hover:bg-[#064650] 
                 transition-all duration-300 min-h-[400px] flex flex-col"
    >
      <h3 className="text-[#129eaf] text-2xl font-bold mb-4">{title}</h3>
      <div className="text-[#129eaf] opacity-90 flex-grow space-y-4">
        {content}
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '-100px'
      }
    );

    const element = document.getElementById('works-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const works = [
    {
      title: "Chrome Extension",
      content: (
        <div>
          <p>
            Developed a Chrome extension using the MERN stack, integrating OCR (Tesseract.js) for text extraction and GPT-powered tools for translation and essay/email composition.
          </p>
          <p>
            Delivered customizable outputs based on format, tone, length, and language, achieving a 95% success rate in usability tests.
          </p>
          <p className="mt-4 text-sm opacity-80">
            Technologies: MERN Stack, Tesseract.js, GPT API, Chrome Extensions API
          </p>
        </div>
      )
    },
    {
      title: "3D Portfolio",
      content: (
        <div>
          <p>
            Built an interactive 3D portfolio using the Three.js library, showcasing personal and professional experiences.
          </p>
          <p>
            Designed immersive visualizations to highlight skills and projects, demonstrating creativity and technical expertise.
          </p>
          <p className="mt-4 text-sm opacity-80">
            Technologies: Three.js, React, WebGL, JavaScript
          </p>
        </div>
      )
    },
    {
      title: "Subscription Application",
      content: (
        <div>
          <p>
            Developed a subscription-based platform using the MERN stack, offering content access based on user subscriptions.
          </p>
          <p>
            Implemented dynamic content filtering, enhancing user experience and securing restricted content.
          </p>
          <p className="mt-4 text-sm opacity-80">
            Technologies: MongoDB, Express.js, React, Node.js, JWT
          </p>
        </div>
      )
    }
  ];

  return (
    <section 
      id="works-section"
      className="min-h-screen bg-[#020617] w-full flex items-center justify-center"
    >
      <div className="max-w-7xl w-full px-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-[#129eaf] text-center mb-16"
        >
          Works
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {works.map((work, index) => (
            <WorkTab 
              key={work.title}
              title={work.title}
              content={work.content}
              isVisible={isVisible}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;