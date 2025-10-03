import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Fonts: 
// Add in index.html if not added already
// <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">

const VolunteerAstrology = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sections = [
    {
      title: "Serve with Devotion – Become a Volunteer",
      image: "./images/service4.png",
      button: "Join as Volunteer",
      route: "/volunteer", // ✅ navigation route
    },
    {
      title: "Vedic Astrology Consultations",
      image: "./images/service1.jpg",
      button: "Book a Session",
      route: "/appointment", // ✅ navigation route
    },
    {
      title: "Book Rituals & Pooja Services",
      image: "./images/service2.jpg",
      button: "Book Pooja",
      route: "/appointment", // ✅ navigation route
    },
  ];

  return (
    <section className="w-full bg-gray-900">
      {/* SECTION HEADING */}
      <div className="text-center py-12">
        <h2
          className="text-3xl md:text-4xl font-serif text-white mb-4"
          data-aos="fade-up"
        >
          Volunteer & Astrology Services
        </h2>
        <div
          className="w-20 h-1 bg-[#2C3E50] mx-auto rounded-full"
          data-aos="zoom-in"
          data-aos-delay="200"
        ></div>
        <p
          className="text-gray-300 text-base mt-4 max-w-2xl mx-auto font-roboto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Participate in selfless service or seek divine guidance through our
          Vedic astrology and ritual booking services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SECTION (Volunteer) */}
        <div
          className="relative group h-[400px] lg:h-[800px] overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src={sections[0].image}
            alt={sections[0].title}
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-snug mb-5 max-w-xl drop-shadow-lg">
              {sections[0].title}
            </h3>
            <button
              onClick={() => navigate(sections[0].route)}
              className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              {sections[0].button}
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col">
          {/* TOP RIGHT (Astrology Consultation) */}
          <div
            className="relative group h-[400px] overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <img
              src={sections[1].image}
              alt={sections[1].title}
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-xl md:text-2xl font-serif text-white leading-snug mb-4 drop-shadow-lg">
                {sections[1].title}
              </h3>
              <button
                onClick={() => navigate(sections[1].route)}
                className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg"
              >
                {sections[1].button}
              </button>
            </div>
          </div>

          {/* BOTTOM RIGHT (Pooja Booking) */}
          <div
            className="relative group h-[400px] overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src={sections[2].image}
              alt={sections[2].title}
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-xl md:text-2xl font-serif text-white leading-snug mb-4 drop-shadow-lg">
                {sections[2].title}
              </h3>
              <button
                onClick={() => navigate(sections[2].route)}
                className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg"
              >
                {sections[2].button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerAstrology;
