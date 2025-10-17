import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Heart, Star, Award } from "lucide-react";

// ✅ Count-up number animation component
// Duration is set to 1.5 seconds for a snappier animation
const CountUpNumber = ({ from, to, duration = 1.5, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);

  useEffect(() => {
    let start = from;
    const end = parseInt(to.replace(/\D/g, "")); // remove non-numeric chars

    // Calculate increment based on duration and a target of 60 frames per second
    const targetFrames = duration * 60;
    const increment = (end - from) / targetFrames;

    let frame = 0;
    const updateCount = () => {
      frame++;
      start += increment;

      if (frame < targetFrames) {
        setCount(Math.floor(start));
        requestAnimationFrame(updateCount);
      } else {
        // Ensure the count stops precisely at the final 'to' value
        setCount(end);
      }
    };

    // Start the animation loop
    const animationId = requestAnimationFrame(updateCount);

    // Cleanup function to cancel the animation on unmount or dependency change
    return () => cancelAnimationFrame(animationId);
  }, [from, to, duration]);

  // The suffix logic needs to be applied after the animation
  let displayValue = count.toLocaleString();
  if (suffix === "+" && displayValue !== count.toLocaleString()) {
    // Logic to re-add '+' if the original 'to' had it, and animation is complete/near-complete
    // For simplicity and matching the existing logic, we just append the suffix.
    // The original component design only adds the suffix based on the prop, 
    // which is passed based on `stat.number.endsWith("+")`.
  }

  return (
    <div className="text-4xl font-serif font-bold text-[#2C3E50] mb-1">
      {displayValue}
      {suffix}
    </div>
  );
};

const Team: React.FC = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Arjun Patel",
      role: "Lead Coordinator",
      age: 28,
      experience: "5 years",
      specialty: "Community Outreach",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Passionate about connecting communities and organizing impactful events.",
    },
    {
      name: "Priya Sharma",
      role: "Education Program Manager",
      age: 26,
      experience: "4 years",
      specialty: "Sanskrit & Vedic Studies",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Dedicated to preserving ancient wisdom through modern teaching methods.",
    },
    {
      name: "Rahul Krishna",
      role: "Youth Activities Director",
      age: 25,
      experience: "3 years",
      specialty: "Cultural Programs",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Energetic leader organizing cultural events and youth engagement programs.",
    },
    {
      name: "Meera Iyer",
      role: "Social Service Coordinator",
      age: 29,
      experience: "6 years",
      specialty: "Healthcare Initiatives",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Leading healthcare camps and medical assistance programs for the needy.",
    },
    {
      name: "Vikram Reddy",
      role: "Technology & Media Head",
      age: 27,
      experience: "4 years",
      specialty: "Digital Outreach",
      image:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Modernizing temple operations and enhancing digital presence.",
    },
    {
      name: "Ananya Kumar",
      role: "Volunteer Coordinator",
      age: 24,
      experience: "2 years",
      specialty: "Training & Development",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Recruiting and training volunteers to maximize their contribution potential.",
    },
  ];

  const teamStats = [
    { icon: Users, number: "50+", label: "Active Members" },
    { icon: Heart, number: "10000+", label: "Hours Served" },
    { icon: Star, number: "25+", label: "Projects Led" },
    { icon: Award, number: "5", label: "Awards Won" },
  ];

  return (
    <>
      {/* 🔹 Banner Section */}
      <div className="relative w-full h-[400px]">
        <img
          src="./images/ourteam.jpg"
          alt="Projects Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2C3E50]/70 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold">
            Our Team
          </h1>
        </div>
      </div>

      {/* 🔹 Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C3E50] mb-4">
              Dedicated & Dynamic Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-roboto">
              Meet the passionate young leaders driving our mission forward with
              energy, innovation, and dedication.
            </p>
          </div>

          {/* ✅ Team Statistics with Count Animation (Duration set to 1.5s) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {teamStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                {/* CountUpNumber uses default duration of 1.5s now */}
                <CountUpNumber
                  from={0}
                  to={stat.number}
                  // duration={1.5} // Using default set in component
                  suffix={stat.number.endsWith("+") ? "+" : ""}
                />
                <div className="text-gray-600 font-roboto">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#2C3E50]/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#2C3E50] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#3D4C6D] font-semibold mb-2 font-roboto">
                    {member.role}
                  </p>
                  <div className="flex justify-center space-x-3 text-sm text-gray-500 mb-2 font-roboto">
                    <span>Age: {member.age}</span>
                    <span>•</span>
                    <span>{member.experience}</span>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] text-white px-3 py-1 rounded-full text-xs font-roboto mb-3">
                    {member.specialty}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed text-center font-roboto">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          {/* Team Values */}
          <div className="bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] p-10 md:p-14 rounded-3xl text-white mb-16">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-3">
                Our Team Values
              </h3>
              <p className="text-lg opacity-90 font-roboto max-w-3xl mx-auto">
                These core principles guide our young team in every initiative
                and decision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Compassion",
                  desc: "Serving with love and empathy for all beings",
                },
                {
                  icon: Star,
                  title: "Excellence",
                  desc: "Striving for the highest standards in everything",
                },
                {
                  icon: Users,
                  title: "Unity",
                  desc: "Working together as one family for common goals",
                },
                {
                  icon: Award,
                  title: "Innovation",
                  desc: "Embracing modern methods for ancient wisdom",
                },
              ].map((value, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-serif font-bold mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm opacity-90 font-roboto">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Join Team CTA with Navigation */}
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-[#2C3E50] mb-4">
              Join Our Team
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-roboto">
              Are you passionate about serving the community? Join our dynamic
              young team and make a lasting impact!
            </p>
            <button
              onClick={() => navigate("/volunteer")}
              className="bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] text-white px-8 py-4 rounded-full font-roboto font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Apply to Join Team
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;