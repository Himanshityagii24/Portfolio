import React from 'react';
import ContactImage from '../assets/tech/beauty.png'; // Replace with the correct path to your image
import InstagramIcon from '../assets/tech/instagram.svg'; // Replace with the correct path to your Instagram image
import LinkedInIcon from '../assets/tech/LinkedIn.png'; // Replace with the correct path to your LinkedIn image
import PhoneIcon from '../assets/tech/phone-call.png'; // Replace with the correct path to your phone image
import MailIcon from '../assets/tech/gmail.png'; // Replace with the correct path to your mail image
import AddressIcon from '../assets/tech/location-pin.png'; // Replace with the correct path to your address image
import QrIcon from '../assets/tech/QR.jpg';

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-10 px-6 bg-[#020617]">
      {/* First Section - Contact Details */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-12 w-full">
        {/* Left side - Name and Image */}
        <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
          <img src={ContactImage} alt="Contact" className="w-40 h-40 object-contain rounded-full border border-[#129eaf]" />
          <h2 className="text-[#129eaf] text-2xl font-bold">Himanshi Tyagi</h2> {/* Replace with your name */}
        </div>

        {/* Right side - Contact Icons */}
        <div className="flex flex-col gap-6 text-2xl items-center w-full md:w-2/3">
          <div className="flex gap-4 items-center">
            <img src={PhoneIcon} alt="Phone" className="w-6 h-6" />
            <span className="text-[#129eaf]">+91 7657868862</span> {/* Replace with your phone number */}
          </div>
          <div className="flex gap-4 items-center">
            <img src={MailIcon} alt="Email" className="w-6 h-6" />
            <span className="text-[#129eaf]">tyagihimanshi2024@gmail.com</span> {/* Replace with your email */}
          </div>
          <div className="flex gap-4 items-center">
            <img src={AddressIcon} alt="Address" className="w-6 h-6" />
            <span className="text-[#129eaf]">Flat no. 17c, Crystal Homes, Zirakpur, Punjab</span> {/* Replace with your address */}
          </div>
        </div>
      </section>

      {/* Second Section - Cards for LinkedIn and Instagram */}
      <section className="flex flex-col md:flex-row gap-10 w-full justify-center items-center">
        {/* LinkedIn Card */}
        <div className="flex flex-col items-center justify-center p-4 bg-[#131e3a] rounded-lg shadow-lg w-80 md:w-64">
          <img src={LinkedInIcon} alt="LinkedIn" className="w-40 h-40 object-contain mb-4" />
          <span className="text-[#129eaf] text-xl">LinkedIn</span>
        </div>

        {/* Instagram Card */}
        <div className="flex flex-col items-center justify-center p-4 bg-[#131e3a] rounded-lg shadow-lg w-80 md:w-64">
          <img src={QrIcon} alt="Instagram" className="w-40 h-40 object-contain mb-4" />
          <span className="text-[#129eaf] text-xl"> Scan!</span>
        </div>
      </section>
    </div>
  );
};

export default Contact;
