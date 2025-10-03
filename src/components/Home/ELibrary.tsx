import React from "react";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Blood Banks",
      description: "Life-saving blood donation drives",
      image: "./images/project1.jpg",
    },
    {
      title: "Goshala",
      description: "Cow protection and care facility",
      image: "./images/project2.jpg",
    },
    {
      title: "E-Library",
      description: "Digital access to sacred texts and knowledge",
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="font-bold font-serif text-gray-900 mb-4"
            style={{ fontSize: "2.25rem", lineHeight: "2.5rem" }}
          >
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Impactful initiatives making a difference in our community
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  className="font-serif font-semibold text-gray-800 mb-3"
                  style={{ fontSize: "1.5rem", lineHeight: "2rem" }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
