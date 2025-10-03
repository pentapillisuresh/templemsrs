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
      <div className="group bg-white/90 backdrop-blur shadow-md hover:shadow-2xl rounded-2xl p-8 w-80 text-center cursor-pointer transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        {/* Image with rotate animation on hover */}
        <div className="flex justify-center items-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-110"
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-semibold mb-3 tracking-wide font-serif"
          style={{ color: "#34495E", lineHeight: "1.4" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="leading-relaxed font-roboto text-gray-700"
          style={{ fontSize: "0.9375rem", lineHeight: "1.65" }}
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

  return (
    <div
      className="relative py-20 px-6 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(52,73,94,0.85), rgba(0,0,0,0.85)), url('https://img.freepik.com/premium-photo/famous-temples-khajuraho_163782-1258.jpg?w=1060')",
        backgroundAttachment: "fixed", // parallax effect
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

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center relative z-10">
        {/* Left Column */}
        <ServiceCard
          title="Temple Services"
          description="Daily prayers, special ceremonies, and spiritual guidance"
          image="./images/icon1.png"
          animation="fade-right"
        />
        <ServiceCard
          title="Social Service"
          description="Community welfare programs and charitable initiatives"
          image="./images/icon2.png"
          animation="fade-up"
        />
        <ServiceCard
          title="Educational Support"
          description="Vedic education, Sanskrit learning, and knowledge sharing"
          image="./images/icon3.png"
          animation="fade-left"
        />

        {/* Left Column */}
        <ServiceCard
          title="Medical Assistance"
          description="Health camps, medical support, and wellness programs"
          image="./images/icon4.png"
          animation="fade-right"
        />
        <ServiceCard
          title="Food Distribution"
          description="Free meals and nutrition programs for the needy"
          image="./images/icon5.png"
          animation="fade-up"
        />
        <ServiceCard
          title="Yoga Classes"
          description="Physical and mental wellness through yoga practice"
          image="./images/icon6.png"
          animation="fade-left"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
