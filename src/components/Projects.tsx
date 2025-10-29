import React, { useEffect, useState } from "react";
import ProjectGalleryModal from "./ProjectGalleryModal";
import { useNavigate } from 'react-router-dom';


const projects = [
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
  },
  {
    title: "Educational Resources",
    metric: "2000+ Students",
    description:
      "We support underprivileged children with free education, books, and learning materials. Includes scholarships, tutoring, and skill development courses.",
    image: "./images/project12.jpg",
    status: "Active",
    gallery: [
      "./images/project12.jpg",
      "./images/project12.jpg",
      "./images/project12.jpg",
    ],
  },
  {
    title: "Food Distribution",
    metric: "500+ Daily Meals",
    description:
      "Daily food distribution program providing nutritious meals to the homeless and underprivileged. We serve over 500 meals daily and organize special food drives.",
    image: "./images/project13.jpg",
    status: "Active",
    gallery: [
      "./images/project13.jpg",
      "./images/project13.jpg",
      "./images/project13.jpg",
    ],
  },
  {
    title: "Vedic Sanskrit Education",
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
    title: "Goshala",
    metric: "100+ Cows Protected",
    description:
      "Our Goshala provides shelter, food, and medical care for abandoned cows. Facility houses 100+ cows with proper veterinary care.",
    image: "./images/project15.jpg",
    status: "Active",
    gallery: [
      "./images/project15.jpg",
      "./images/project15.jpg",
      "./images/project15.jpg",
    ],
  },
  {
    title: "Help the People",
    metric: "1000+ Families",
    description:
      "Support program for families in need: financial assistance, job placement, and emergency relief during disasters.",
    image: "./images/project16.jpg",
    status: "Active",
    gallery: [
      "./images/project16.jpg",
      "./images/project16.jpg",
      "./images/project16.jpg",
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
      "./images/project17.jpg",
      "./images/project17.jpg",
    ],
  },
  {
    title: "Yoga Classes",
    metric: "800+ Participants",
    description:
      "Free yoga and meditation classes for all age groups. Daily sessions focus on physical health and mental well-being.",
    image: "./images/project18.jpg",
    status: "Active",
    gallery: [
      "./images/project18.jpg",
      "./images/project18.jpg",
      "./images/project18.jpg",
    ],
  },
  {
    title: "Book Bank",
    metric: "5000+ Books Distributed",
    description:
      "Free library with spiritual texts, educational, and general literature. Books distributed to students and book lovers.",
    image: "./images/project19.jpg",
    status: "Active",
    gallery: [
      "./images/project19.jpg",
      "./images/project19.jpg",
      "./images/project19.jpg",
    ],
  },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  const handleLearnMore = (title: string, gallery: string[]) => {
    setSelectedProject({ title, images: gallery });
  };

  return (
    <>
      <div className="relative w-full h-[400px]">
        <img
          src="./images/projectsbanner.jpeg"
          alt="Projects Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2C3E50]/70 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold">
            Our Projects
          </h1>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C3E50] mb-4">
              Transforming Lives Through Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-roboto">
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
                    <button onClick={() => navigate('/donate')} className="border-2 border-[#2C3E50] text-[#2C3E50] font-semibold px-4 py-2 rounded-lg hover:bg-[#2C3E50] hover:text-white transition font-roboto">
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

          <div className="mt-16 bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] rounded-2xl p-10 text-center text-white">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Join Our Mission
            </h3>
            <p className="max-w-2xl mx-auto text-lg mb-8 font-roboto opacity-90">
              Your support helps us expand these projects and reach more people
              in need. Every contribution makes a meaningful difference.
            </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
