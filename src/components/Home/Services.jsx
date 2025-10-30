import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ title, description, image, animation }) => {
  return (
    <div
      className="flex justify-center items-center"
      data-aos={animation}
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="group bg-white/90 backdrop-blur shadow-md hover:shadow-2xl rounded-2xl p-6 w-64 h-64 flex flex-col justify-start items-center cursor-pointer transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        {/* Image with rotate animation on hover */}
        <div className="flex justify-center items-center mb-3">
          <div className="w-16 h-16 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-110"
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold mb-2 tracking-wide font-serif text-center"
          style={{ color: "#34495E", lineHeight: "1.3" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="leading-relaxed font-roboto text-gray-700 text-sm text-center flex-grow"
          style={{ lineHeight: "1.5" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [

     {
      title: "Temple Activities",
      description: "Daily rituals, festivals, and spiritual ceremonies for devotees",
      image: "./images/circle1.png",
      animation: "fade-left"
    },
    {
      title: "Annaprasadham",
      description: "Sacred food distribution and free meals for devotees and needy communities",
      image: "./images/circle3.png",
      animation: "fade-right"
    },
    {
      title: "Education Support",
      description: "Scholarships, educational resources, and academic guidance for underprivileged students",
      image: "./images/icon3.png",
      animation: "fade-up"
    },
    {
      title: "Goshala Seva",
      description: "Cow protection, care, and preservation of indigenous cattle breeds",
      image: "./images/circle2.png",
      animation: "fade-left"
    },
    {
      title: "Indian Culture Development",
      description: "Promoting traditional arts, customs, and cultural heritage preservation",
      image: "./images/circle5.png",
      animation: "fade-right"
    },
    {
      title: "Infrastructure Progression",
      description: "Temple renovations and community infrastructure development projects",
      image: "./images/circle6.png",
      animation: "fade-up"
    },
    {
      title: "Medical Assistance",
      description: "Health camps, medical aid, and healthcare support for communities",
      image: "./images/icon4.png",
      animation: "fade-left"
    },
    {
      title: "Sanathana Sangeetham",
      description: "Traditional Indian classical music and spiritual musical programs",
      image: "./images/circle8.png",
      animation: "fade-right"
    },
    {
      title: "Social Welfare Drives",
      description: "Community outreach programs and humanitarian initiatives",
      image: "./images/icon2.png",
      animation: "fade-up"
    },
   
    {
      title: "Vedic Sanskrit",
      description: "Ancient language studies and Vedic scripture learning programs",
      image: "./images/circle10.png",
      animation: "fade-right"
    },
    {
      title: "Yoga Wellbeing",
      description: "Yoga classes, meditation sessions, and holistic wellness programs",
      image: "./images/icon6.png",
      animation: "fade-up"
    }
  ];

  return (
    <div
      className="relative py-20 px-6 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(52,73,94,0.85), rgba(0,0,0,0.85)), url('https://img.freepik.com/premium-photo/famous-temples-khajuraho_163782-1258.jpg?w=1060')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-14 relative z-10">
        <h2
          className="text-4xl font-bold text-center mb-3 tracking-tight font-serif text-white drop-shadow-lg"
          style={{ lineHeight: "1.2" }}
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full bg-white"></div>
      </div>

      {/* Services Grid - Updated for 4 columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center relative z-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            animation={service.animation}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;