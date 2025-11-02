import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useAnimation, useInView } from "framer-motion";

// ✅ Helper function to format numbers with K, M suffixes (no decimals)
const formatNumber = (num) => {
  if (num >= 1000000) {
    return Math.floor(num / 1000000) + 'M';
  } else if (num >= 1000) {
    return Math.floor(num / 1000) + 'K';
  }
  return num.toString();
};

// ✅ Count-up number component with K formatting
const CountUpNumber = ({ from, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = React.useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      const increment = (end - start) / (duration * 60); // 60fps
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          start = end;
        }
        setCount(Math.floor(start));
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

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
      title: "Become a Volunteer - Serve with Devotion",
      image: "./images/volunteer.png",
      button: "Join as Volunteer",
      route: "/volunteer",
    },
    {
      title: "Vedic Astrology Consultations",
      image: "./images/astrology.jpg",
      button: "Book an appointment ",
      route: "/appointment",
    },
    {
      title: "Book Rituals & Pooja Services",
      image: "./images/service2.jpg",
      button: "Book Pooja",
      route: "/appointment",
    },
  ];

  const stats = [
    { number: 50, suffix: "+", label: "Years Legacy" },
    { number: 200, suffix: "K+", label: "Kundalis Served" },
    { number: 100, suffix: "K+", label: "Consultations Given" },

    {
      number: 50,
      suffix: "+",
      label: "Years of Divine Astrology through Guru Parampara",
    },
  ];

  // Logic to separate the specific section for custom design
  const volunteerSection = sections[0];
  const astrologyConsultationSection = sections[1]; // Index 1: Vedic Astrology Consultations
  const poojaRitualsSection = sections[2];

  return (
    <section className="w-full bg-gray-900 overflow-hidden">
      {/* SECTION HEADING */}
      <div className="text-center py-12 px-4">
        <h2
          className="text-3xl md:text-4xl font-serif text-white mb-4"
          data-aos="fade-up"
        >
          Astrology Services & Book Rituals & Volunteer
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

      {/* 🚀 REDESIGNED VEDIC COUNTER SECTION */}
      <div
        // Design Change: Added a border, changed background to a subtle radial gradient, increased padding
        className="bg-gray-800/70 border border-[#2C3E50] py-16 px-4 md:px-12 rounded-2xl shadow-2xl mx-auto max-w-7xl mb-16 relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* Subtle background glow/overlay for a premium feel */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-color-gray-900)_0%,_var(--tw-color-transparent)_75%)] opacity-70"></div>
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }} // Adjusted transition
              viewport={{ once: true }}
              // Design Change: Added padding and a subtle card background for each stat
              className="flex flex-col items-center p-4 bg-[#1A252F]/80 rounded-lg transform hover:scale-[1.02] transition-transform duration-300"
            >
              <CountUpNumber from={0} to={item.number} suffix={item.suffix} />
              <p className="text-gray-200 mt-2 text-sm md:text-base max-w-[200px] leading-snug font-medium uppercase tracking-wider">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MAIN GRID SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {/* LEFT SECTION - Now Astrology Consultations */}
        <div
          className="relative group h-[400px] lg:h-[800px] overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src={astrologyConsultationSection.image}
            alt={astrologyConsultationSection.title}
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10">
            <h3 className="text-2xl md:text-3xl font-serif text-white leading-snug mb-4 drop-shadow-lg transform group-hover:translate-y-[-5px] transition-transform duration-500">
              {astrologyConsultationSection.title}
            </h3>
            <button
              onClick={() => navigate(astrologyConsultationSection.route)}
              className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg"
            >
              {astrologyConsultationSection.button}
            </button>
          </div>
        </div>

        {/* RIGHT SECTION - Split into Volunteer + Pooja */}
        <div className="flex flex-col w-full">
          {/* Volunteer - moved to right top */}
             <div
            className="relative group h-[400px] overflow-hidden border-b-4 border-[#2C3E50]/50 w-full"
            data-aos="fade-left"
          >
            <img
              src={volunteerSection.image}
              alt={volunteerSection.title}
              className="w-full h-full object-cover scale-100 group-hover:scale-[1.15] transition-transform duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-2xl md:text-3xl font-serif text-white leading-snug mb-4 drop-shadow-lg transform group-hover:translate-y-[-5px] transition-transform duration-500">
                {volunteerSection.title}
              </h3>

              <button
                onClick={() => navigate(volunteerSection.route)}
                className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
              >
                {volunteerSection.button}
              </button>
            </div>
          </div>



          <div
            className="relative group h-[400px] overflow-hidden w-full"
            data-aos="fade-left"
            data-aos-delay={300}
          >
            <img
              src={poojaRitualsSection.image}
              alt={poojaRitualsSection.title}
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl md:text-3xl font-serif text-white leading-snug mb-4 drop-shadow-lg">
                {poojaRitualsSection.title}
              </h3>
              <button
                onClick={() => navigate(poojaRitualsSection.route)}
                className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg"
              >
                {poojaRitualsSection.button}
              </button>
            </div>
          </div>

         

          {/* Pooja - remains at bottom */}

        </div>
      </div>
    </section>
  );
};

export default VolunteerAstrology;