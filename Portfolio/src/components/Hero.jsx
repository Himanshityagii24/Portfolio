import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#129eaf]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient ' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello!<span className='text-[#129eaf]'>Himanshi this side</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Mern/Next.js Web developer <br className='sm:block hidden' />
            
          </p>
        </div>
      </div>

      <ComputersCanvas />

      
    </section>
  );
};

export default Hero;
