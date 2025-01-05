import React from "react";
import { motion, useInView } from "framer-motion";
import WomenImage from "../assets/artist.png";
import deptImage from "../assets/college.png";
import expImage from "../assets/sketch.png";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const Card = ({ title, content, icon, iconAlt, isOdd }) => {
    const cardContent = (
      <>
        <motion.div
          className="w-40 h-40 flex items-center justify-center shrink-0"
          whileHover={{ rotate: 360, transition: { duration: 1 } }}
        >
          <img
            src={icon}
            alt={iconAlt}
            className="w-32 h-32 object-contain"
          />
        </motion.div>
        <div className="p-6 rounded-lg bg-[#042f35] border border-[#129eaf40] shadow-lg flex-grow">
          <h2 className="text-2xl font-bold mb-4 text-[#129eaf]">{title}</h2>
          <p className="text-lg text-[#129eaf] opacity-90 leading-relaxed">
            {content}
          </p>
        </div>
      </>
    );

    return (
      <motion.div
        className={`flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl mx-auto`}
        variants={itemVariant}
      >
        {isOdd ? cardContent : (
          <>
            <div className="p-6 rounded-lg bg-[#042f35] border border-[#129eaf40] shadow-lg flex-grow">
              <h2 className="text-2xl font-bold mb-4 text-[#129eaf]">{title}</h2>
              <p className="text-lg text-[#129eaf] opacity-90 leading-relaxed">
                {content}
              </p>
            </div>
            <motion.div 
              className="w-40 h-40 flex items-center justify-center shrink-0"
              whileHover={{ rotate: 360, transition: { duration: 1 } }}
            >
              <img
                src={icon}
                alt={iconAlt}
                className="w-32 h-32 object-contain"
              />
            </motion.div>
          </>
        )}
      </motion.div>
    );
  };

  const cards = [
    {
      title: "About Me",
      content: "I am a passionate software developer with a strong focus on website development and problem-solving. With extensive experience in building web applications, I strive to create innovative solutions to complex challenges. I have mastered Data Structures and Algorithms.",
      icon: WomenImage,
      iconAlt: "Woman Icon"
    },
    {
      title: "Education",
      content: "I am currently pursuing a Bachelor of Engineering (BE) in Information Technology at the University Institute of Engineering and Technology (UIET), Panjab University, from 2022 to 2026.",
      icon: deptImage,
      iconAlt: "Department Icon"
    },
    {
      title: "Experience",
      content: "I have completed a total of 4 internships focused on website development, gaining hands-on experience in creating and optimizing web applications. Additionally, I have solved over 350 DSA problems, sharpening my problem-solving skills and enhancing my ability to develop efficient solutions.",
      icon: expImage,
      iconAlt: "Skills Icon"
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="w-full min-h-screen flex flex-col justify-center gap-12 bg-[#020617] px-6 py-16"
      variants={containerVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {cards.map((card, index) => (
        <Card 
          key={index}
          title={card.title}
          content={card.content}
          icon={card.icon}
          iconAlt={card.iconAlt}
          isOdd={index % 2 !== 0}
        />
      ))}
    </motion.section>
  );
};

export default About;
