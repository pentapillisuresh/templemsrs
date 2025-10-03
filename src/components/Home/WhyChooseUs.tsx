import React, { useEffect } from 'react';
import { Shield, Award, Clock, Users, Heart, BookOpen } from 'lucide-react';
import AOS from 'aos';

const WhyChooseUs: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const reasons = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Trusted Legacy",
      description: "Over 25 years of dedicated service to the community with unwavering commitment"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Certified Excellence",
      description: "Recognized by government bodies and spiritual organizations for our authentic practices"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "24/7 Availability",
      description: "Round-the-clock support for spiritual guidance and emergency assistance"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Team",
      description: "Highly qualified priests, astrologers, and spiritual counselors with decades of experience"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Compassionate Service",
      description: "Every service delivered with genuine care, love, and understanding"
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Authentic Knowledge",
      description: "Traditional Vedic wisdom preserved and shared in its purest form"
    }
  ];

  const stats = [
    { number: "25+", label: "Years of Service" },
    { number: "10,000+", label: "Devotees Served" },
    { number: "500+", label: "Successful Events" },
    { number: "50+", label: "Community Projects" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-40 h-40 border border-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-orange-400 rounded-full animate-spin"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Discover why thousands of devotees trust us as their spiritual guide and community partner. 
            Our commitment goes beyond service – it's a sacred bond.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16" data-aos="fade-up">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-orange-400/30"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">
                {stat.number}
              </div>
              <div className="text-red-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-400/30 group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="text-orange-300 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-red-100 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-400/30" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-orange-300">Experience the Difference</span>
              </h3>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Join our spiritual family and experience the profound transformation that comes from 
                authentic guidance, genuine care, and divine blessings.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-400 rounded-full mr-4"></div>
                  <span className="text-red-100">Personalized Spiritual Guidance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-400 rounded-full mr-4"></div>
                  <span className="text-red-100">Community Support Network</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-400 rounded-full mr-4"></div>
                  <span className="text-red-100">Regular Events & Programs</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Join Our Community
                </button>
                <button className="border-2 border-orange-300 text-orange-300 px-8 py-4 rounded-full font-semibold hover:bg-orange-300 hover:text-red-900 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/8111692/pexels-photo-8111692.jpeg" 
                alt="Community Gathering"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover border-4 border-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;