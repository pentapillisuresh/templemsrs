import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Check } from "lucide-react";

// ✅ Hero banner image
const aboutBanner = "./images/board.png";

const boardMembers = [
  {
    name: "Sri Rajesh Kumar",
    position: "Chairman",
    qualification: "M.A., Ph.D. in Sanskrit",
    experience: "25+ years in spiritual leadership",
    responsibilities: [
      "Overall strategic direction and governance",
      "Temple administration oversight",
      "Community relations and partnerships",
    ],
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Smt. Lakshmi Devi",
    position: "Vice Chairperson",
    qualification: "M.A. in Philosophy, B.Ed.",
    experience: "20+ years in education and social service",
    responsibilities: [
      "Educational programs coordination",
      "Women empowerment initiatives",
      "Cultural activities management",
    ],
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Dr. Suresh Sharma",
    position: "Secretary",
    qualification: "MBBS, MD, Ayurveda Specialist",
    experience: "18+ years in healthcare and wellness",
    responsibilities: [
      "Medical camps and healthcare initiatives",
      "Documentation and record keeping",
      "Health and wellness programs",
    ],
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    name: "Sri Venkat Rao",
    position: "Treasurer",
    qualification: "CA, MBA Finance",
    experience: "22+ years in financial management",
    responsibilities: [
      "Financial planning and management",
      "Audit and compliance oversight",
      "Donation management and transparency",
    ],
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    name: "Sri Mohan Das",
    position: "Joint Secretary",
    qualification: "M.A. in Social Work",
    experience: "15+ years in community development",
    responsibilities: [
      "Community outreach programs",
      "Volunteer coordination",
      "Social welfare initiatives",
    ],
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Smt. Priya Nair",
    position: "Executive Member",
    qualification: "M.Sc. in Environmental Science",
    experience: "12+ years in environmental conservation",
    responsibilities: [
      "Environmental conservation projects",
      "Goshala management",
      "Sustainable development initiatives",
    ],
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
];

const BoardManagement: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* ✅ Hero Section */}
      <section className="relative h-[400px] w-full bg-[#2C3E50] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBanner})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Board of Trustees & Management
          </h1>
          <p className="text-lg md:text-xl font-roboto max-w-2xl">
            Guiding our temple with wisdom, transparency, and community service
          </p>
        </div>
      </section>

      {/* ✅ Board Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50] mb-4">
              Board of Trustees & Management
            </h2>
            <p className="text-lg font-roboto text-[#2C3E50] max-w-3xl mx-auto">
              Meet our dedicated leadership team committed to spiritual growth
              and community service
            </p>
          </div>

          {/* ✅ Animated Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {boardMembers.map((member, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* ✅ Image Section with Hover Animation */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-60 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* ✅ Text Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif text-[#2C3E50] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#2C3E50] font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-sm font-roboto text-[#2C3E50] mb-1">
                    <strong>Qualification:</strong> {member.qualification}
                  </p>
                  <p className="text-sm font-roboto text-[#2C3E50] mb-3">
                    <strong>Experience:</strong> {member.experience}
                  </p>
                  <p className="text-sm font-semibold font-roboto text-[#2C3E50] mb-2">
                    Key Responsibilities:
                  </p>
                  <ul className="space-y-2">
                    {member.responsibilities.map((r, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-[#2C3E50] font-roboto text-sm"
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-[#2C3E50] text-white rounded-full flex items-center justify-center mr-2">
                          <Check className="w-4 h-4" />
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Responsibilities Section */}
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-[#2C3E50] to-[#2C3E50]/80 rounded-2xl p-10 text-white"
          >
            <h3 className="text-2xl font-bold font-serif text-center mb-6">
              Responsibilities of Trustees
            </h3>
            <p className="text-center font-roboto opacity-90 mb-10">
              Our trustees are committed to upholding the highest standards of
              governance and service
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg font-serif mb-3">
                  Administrative Responsibilities
                </h4>
                <ul className="space-y-2">
                  {[
                    "Strategic planning and policy formulation",
                    "Financial oversight and budget approval",
                    "Program evaluation and quality assurance",
                    "Legal compliance and regulatory adherence",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="flex-shrink-0 w-6 h-6 bg-white text-[#2C3E50] rounded-full flex items-center justify-center mr-2">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="font-roboto">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg font-serif mb-3">
                  Community Responsibilities
                </h4>
                <ul className="space-y-2">
                  {[
                    "Community engagement and outreach",
                    "Stakeholder communication and transparency",
                    "Cultural preservation and promotion",
                    "Social welfare and charitable activities",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="flex-shrink-0 w-6 h-6 bg-white text-[#2C3E50] rounded-full flex items-center justify-center mr-2">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="font-roboto">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoardManagement;
