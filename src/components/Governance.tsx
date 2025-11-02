import React, { useEffect } from "react";
import {
  Shield,
  Scale,
  Eye,
  FileText,
  CheckCircle,
  Users,
  ShieldCheck,
  Check,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Governance: React.FC = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const governancePrinciples = [
    {
      title: "Transparency",
      description:
        "Open communication about decisions, finances, and operations.",
      icon: Eye,
    },
    {
      title: "Accountability",
      description:
        "Taking responsibility for actions and their consequences.",
      icon: Scale,
    },
    {
      title: "Integrity",
      description: "Acting with honesty and strong moral principles.",
      icon: ShieldCheck,
    },
    {
      title: "Inclusivity",
      description:
        "Welcoming and serving all devotees regardless of background.",
      icon: Users,
    },
  ];

  const responsibilities = [
    {
      icon: Shield,
      title: "Fiduciary Responsibility",
      description:
        "Managing temple assets and resources with utmost care and transparency.",
      details: [
        "Oversee financial management and budgeting",
        "Ensure proper allocation of donations",
        "Maintain accurate financial records",
        "Regular auditing and financial reviews",
      ],
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description:
        "Ensuring all temple activities comply with legal and regulatory requirements.",
      details: [
        "Compliance with religious trust laws",
        "Tax exemption maintenance",
        "Regulatory reporting requirements",
        "Legal documentation and contracts",
      ],
    },
    {
      icon: Eye,
      title: "Oversight & Monitoring",
      description:
        "Providing strategic oversight of all temple operations and programs.",
      details: [
        "Monitor daily temple operations",
        "Evaluate program effectiveness",
        "Risk assessment and management",
        "Performance review of staff and volunteers",
      ],
    },
    {
      icon: FileText,
      title: "Policy Development",
      description:
        "Creating and maintaining policies that guide temple operations.",
      details: [
        "Develop operational policies",
        "Create volunteer guidelines",
        "Establish safety protocols",
        "Maintain code of conduct",
      ],
    },
    {
      icon: CheckCircle,
      title: "Decision Making",
      description:
        "Making strategic decisions for the long-term benefit of the temple community.",
      details: [
        "Strategic planning and vision setting",
        "Major financial decisions",
        "Program approval and termination",
        "Leadership appointments",
      ],
    },
    {
      icon: Users,
      title: "Community Engagement",
      description:
        "Fostering strong relationships with devotees and the broader community.",
      details: [
        "Community feedback collection",
        "Stakeholder communication",
        "Public relations management",
        "Interfaith dialogue and cooperation",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 font-['Roboto']">
      {/* 🔹 Banner Section */}
      <div className="relative w-full h-[400px]">
        <img
          src="./images/templegov1.jpg"
          alt="Temple Governance Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 
              className="text-white text-4xl md:text-5xl font-serif font-bold mb-4 drop-shadow-lg"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Governance
            </h1>
            
            {/* Divider Line */}
            {/* <div 
              className="w-24 h-1 bg-white mx-auto mb-4 rounded-full"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div> */}
            
            <p 
              className="text-white text-lg md:text-xl  leading-relaxed drop-shadow-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Preserving tradition with transparency and devotion
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C3E50] mb-4">
            Guiding Principles & Responsibilities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our governance structure ensures transparency, accountability, and
            devotion in all temple operations.
          </p>
        </div>

        {/* 🔹 Governance Principles */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-[#2C3E50] mb-10 text-center">
            Our Governance Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governancePrinciples.map((principle, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#2C3E50] mb-3">
                  {principle.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Responsibilities Section */}
        <div className="bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] text-white p-10 rounded-3xl shadow-lg">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">
            Trustee Responsibilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {responsibilities.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition"
              >
                <div className="flex items-center mb-4">
                  <item.icon className="w-8 h-8 text-white mr-3" />
                  <h4 className="text-xl font-serif font-semibold">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-2 text-gray-100">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-center">
                      <span className="flex-shrink-0 w-6 h-6 bg-white text-[#2C3E50] rounded-full flex items-center justify-center mr-2">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;