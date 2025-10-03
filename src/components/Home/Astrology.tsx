import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const items: { title: string; desc: string; img: string }[] = [
  {
    title: "The Happiness Program",
    desc: "Powerful breathing techniques and sessions that will transform your life. Equip yourself with practical knowledge and techniques to unlock your true potential and bring fullness to your life.",
    img: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg",
  },
  {
    title: "Sahaj Samadhi Meditation",
    desc: "Experience deep inner peace — the state of samadhi. Increase self awareness, clarity & creativity. Become fully experienced thanks to us in just a few hours.",
    img: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg",
  },
  {
    title: "Advanced Meditation Program",
    desc: "Go beyond your usually active mind and experience an extraordinary sense of peace and renewed vitality through guided meditations and other processes.",
    img: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
  },
];

const MeditationPrograms: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-light text-gray-800 leading-tight mb-6 max-w-4xl mx-auto"
            style={{ fontFamily: "Georgia, serif" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Meditation, Yoga, Retreats, Free Programs & More...
          </h2>
          <div 
            className="w-24 h-1 bg-blue-400 mx-auto rounded-full"
            data-aos="zoom-in"
            data-aos-delay="300"
          ></div>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical center line */}
          <div 
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"
            data-aos="fade-in"
            data-aos-delay="400"
          />

          {/* Items */}
          <div className="space-y-24">
            {items.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-center gap-12 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image side */}
                  <div 
                    className="w-full lg:w-5/12 relative"
                    data-aos={isEven ? "fade-right" : "fade-left"}
                    data-aos-delay={100 + (idx * 200)}
                    data-aos-duration="1000"
                  >
                    <div className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-72 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Timeline dot - perfectly centered */}
                  <div 
                    className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10"
                    style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
                    data-aos="zoom-in"
                    data-aos-delay={300 + (idx * 200)}
                  >
                    <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-blue-400 border-4 border-white shadow-lg animate-pulse"></div>
                      <div className="absolute inset-0 w-6 h-6 rounded-full bg-blue-400/30 animate-ping"></div>
                    </div>
                  </div>

                  {/* Text side */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      isEven ? "lg:pl-16" : "lg:pr-16"
                    }`}
                    data-aos={isEven ? "fade-left" : "fade-right"}
                    data-aos-delay={200 + (idx * 200)}
                    data-aos-duration="1000"
                  >
                    <div className="space-y-6">
                      {/* Title */}
                      <div className="relative">
                        <h3
                          className="text-2xl lg:text-3xl font-light leading-tight"
                          style={{
                            fontFamily: "Georgia, serif",
                            color: "#576F9F",
                          }}
                          data-aos="fade-up"
                          data-aos-delay={300 + (idx * 200)}
                        >
                          {item.title}
                        </h3>
                        <div 
                          className="w-12 h-0.5 bg-blue-400 mt-3 rounded-full"
                          data-aos="slide-right"
                          data-aos-delay={400 + (idx * 200)}
                        ></div>
                      </div>

                      {/* Description */}
                      <p
                        className="text-base lg:text-lg font-light max-w-md text-justify"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          lineHeight: "1.75",
                          color: "#455371",
                        }}
                        data-aos="fade-up"
                        data-aos-delay={450 + (idx * 200)}
                      >
                        {item.desc}
                      </p>

                      {/* Learn more link */}
                      <div 
                        className="pt-2"
                        data-aos="fade-up"
                        data-aos-delay={500 + (idx * 200)}
                      >
                        <button className="text-blue-500 hover:text-blue-600 font-medium text-sm uppercase tracking-wider hover:tracking-widest transition-all duration-300 group">
                          Learn More
                          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div 
          className="text-center mt-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="space-y-6">
            <p 
              className="text-gray-600 text-lg font-light max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Discover more transformative programs designed to enhance your
              spiritual journey and personal growth.
            </p>
            <button
              className="group relative bg-[#2C3E50] hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-full font-medium text-base tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <span className="relative z-10">Explore All Programs</span>
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeditationPrograms;