import { useEffect, useRef } from "react";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import Typed from "typed.js";

const Hero = () => {
  const isMobile = window.innerWidth <= 768;
  const typedElement = useRef(null); 

  useEffect(() => {
    const options = {
      strings: [
        "Hello! <span class='text-[#129eaf]'>I am Himanshi</span>" // Apply blue color here
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      contentType: 'html', 
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#129eaf]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient " />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span ref={typedElement} /> {/* Attach the typing effect */}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Software developer <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      <ComputersCanvas scale={isMobile ? 0.7 : 1} />
    </section>
  );
};

export default Hero;
