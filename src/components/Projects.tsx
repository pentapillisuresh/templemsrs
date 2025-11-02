import React, { useEffect, useState } from "react";
import ProjectGalleryModal from "./ProjectGalleryModal";
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Annaprasadham",
    metric: "1000+ Meals Served Daily",
    description:
      "Sacred food distribution program offering pure vegetarian meals to devotees and needy people. Daily prasadam service with devotion and love.",
    image: "./images/project13.jpg",
    status: "Active",
    gallery: [
      "./images/project13.jpg",
      "./images/project13.jpg",
      "./images/project13.jpg",
    ],
  },
  {
    title: "Education Support",
    metric: "2000+ Students Helped",
    description:
      "Comprehensive educational support including school fees, books, uniforms, and stationery for underprivileged children across various schools.",
    image: "./images/project12.jpg",
    status: "Active",
    gallery: [
      "./images/project12.jpg",
      "./images/project12.jpg",
      "./images/project12.jpg",
    ],
  },
  {
    title: "Goshala Seva",
    metric: "200+ Cows Cared",
    description:
      "Dedicated cow protection service with daily feeding, medical care, and shelter maintenance. Promoting Gau Seva as sacred duty.",
    image: "./images/project15.jpg",
    status: "Active",
    gallery: [
      "./images/project15.jpg",
      "./images/project15.jpg",
      "./images/project15.jpg",
    ],
  },
  {
    title: "Indian Culture Development",
    metric: "50+ Events Organized",
    description:
      "Promoting Indian cultural values through festivals, workshops, and cultural programs. Preserving and propagating ancient traditions.",
    image: "./images/project20.jpg",
    status: "Active",
    gallery: [
      "./images/project20.jpg",
      "./images/project20.jpg",
      "./images/project20.jpg",
    ],
  },
  {
    title: "Infrastructure Progression",
    metric: "10+ Projects Completed",
    description:
      "Developing and maintaining temple infrastructure, community centers, and service facilities to support our growing activities.",
    image: "./images/project21.jpg",
    status: "Active",
    gallery: [
      "./images/project21.jpg",
      "./images/project21.jpg",
      "./images/project21.jpg",
    ],
  },
  {
    title: "Medical Assistance",
    metric: "3000+ Patients Treated",
    description:
      "Monthly free medical camps with qualified doctors. Includes checkups, medicine distribution, and free treatments.",
    image: "./images/project17.jpg",
    status: "Active",
    gallery: [
      "./images/project17.jpg",
      "./images/mproject17.jpg",
      "./images/project17.jpg",
    ],
  },
  {
    title: "Sanathana Sangeetham",
    metric: "100+ Concerts Conducted",
    description:
      "Promoting classical music and spiritual bhajans through regular concerts, music classes, and cultural events for spiritual upliftment.",
    image: "./images/project23.jpg",
    status: "Active",
    gallery: [
      "./images/project23.jpg",
      "./images/project23.jpg",
      "./images/project23.jpg",
    ],
  },
  {
    title: "Social Welfare Drives",
    metric: "5000+ Beneficiaries",
    description:
      "Regular social welfare campaigns including clothing distribution, hygiene kits, and essential supplies to marginalized communities.",
    image: "./images/project24.jpg",
    status: "Active",
    gallery: [
      "./images/project24.jpg",
      "./images/project24.jpg",
      "./images/project24.jpg",
    ],
  },
  {
    title: "Temple Activities",
    metric: "Daily Services",
    description:
      "Regular temple rituals, pujas, festivals, and spiritual discourses. Maintaining sacred spaces for community worship and devotion.",
    image: "./images/project25.jpeg",
    status: "Active",
    gallery: [
      "./images/project25.jpeg",
      "./images/project25.jpeg",
      "./images/project25.jpeg",
    ],
  },
  {
    title: "Vedic Sanskrit",
    metric: "300+ Students",
    description:
      "Traditional Vedic education teaching Sanskrit, scriptures, and spiritual knowledge. Regular classes for all age groups.",
    image: "./images/project14.jpg",
    status: "Active",
    gallery: [
      "./images/project14.jpg",
      "./images/project14.jpg",
      "./images/project14.jpg",
    ],
  },
  {
    title: "Yoga Wellbeing",
    metric: "1000+ Participants",
    description:
      "Holistic wellness programs including yoga asanas, pranayama, meditation, and Ayurvedic lifestyle guidance for complete wellbeing.",
    image: "./images/project18.jpg",
    status: "Active",
    gallery: [
      "./images/project18.jpg",
      "./images/project18.jpg",
      "./images/project18.jpg",
    ],
  },
  {
    title: "Blood Banks",
    metric: "5000+ Lives Saved",
    description:
      "Our blood bank initiative organizes regular donation camps and maintains a database of donors. We have successfully collected over 5000 units of blood, helping save countless lives.",
    image: "./images/project11.jpg",
    status: "Active",
    gallery: [
      "./images/project11.jpg",
      "./images/project11.jpg",
      "./images/project11.jpg",
    ],
  }
];

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const handleLearnMore = (title: string, gallery: string[]) => {
    setSelectedProject({ title, images: gallery });
  };

  return (
    <>
      {/* Banner Section with AOS Animations */}
      <div className="relative w-full h-[400px]">
        <img
          src="./images/projectsbanner.jpeg"
          alt="Projects Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2C3E50]/70 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 
              className="text-4xl md:text-5xl font-serif text-white font-bold mb-4 drop-shadow-lg"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Our Projects
            </h1>
            
            {/* Divider Line */}
            {/* <div 
              className="w-24 h-1 bg-white mx-auto mb-4 rounded-full"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div> */}
            
            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Serving Communities with Compassion and Dedication
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-serif font-bold text-[#2C3E50] mb-4"
              data-aos="fade-up"
            >
              Transforming Lives Through Service
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto font-roboto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our initiatives are designed to uplift communities and nurture
              compassion. Every project reflects our mission to serve with
              dedication and love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2C3E50]/30"
                data-aos="fade-up"
                data-aos-delay={(i % 6) * 100}
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] text-white text-xs px-3 py-1 rounded-full shadow font-roboto">
                    {p.status}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-[#2C3E50] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#3D4C6D] font-medium mb-3 font-roboto">
                    {p.metric}
                  </p>
                  <p className="text-gray-700 mb-4 font-roboto">
                    {p.description}
                  </p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => navigate('/donate')} 
                      className="border-2 border-[#2C3E50] text-[#2C3E50] font-semibold px-4 py-2 rounded-lg hover:bg-[#2C3E50] hover:text-white transition font-roboto"
                    >
                      Support Project
                    </button>
                    <button
                      onClick={() => handleLearnMore(p.title, p.gallery)}
                      className="bg-[#2C3E50] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#3D4C6D] transition font-roboto"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div 
            className="mt-16 bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] rounded-2xl p-10 text-center text-white"
            data-aos="fade-up"
          >
            <h3 
              className="text-3xl font-serif font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Join Our Mission
            </h3>
            <p 
              className="max-w-2xl mx-auto text-lg mb-8 font-roboto opacity-90"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Your support helps us expand these projects and reach more people
              in need. Every contribution makes a meaningful difference.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button
                onClick={() => navigate("/donate")}
                className="bg-white text-[#2C3E50] font-semibold px-6 py-3 rounded-lg hover:shadow-lg font-roboto transition"
              >
                Make a Donation
              </button>

              <button
                onClick={() => navigate("/volunteer")}
                className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2C3E50] transition font-roboto"
              >
                Become Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProjectGalleryModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        projectTitle={selectedProject?.title || ""}
        images={selectedProject?.images || []}
      />
    </>
  );
};

export default Projects;