import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Devotee",
    quote:
      "The foundation has transformed our community. Their dedication to service is truly inspiring.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Volunteer",
    quote:
      "Being part of this foundation has given my life a deeper meaning and purpose.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Amit Patel",
    role: "Medical Volunteer",
    quote:
      "The medical camps organized by the foundation reach those who need it most.",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Meera Nair",
    role: "Social Worker",
    quote:
      "Their food distribution drives bring hope and smiles to countless families every week.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-gray-100/30 to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#2C3E50] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#2C3E50] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div
          className="text-center mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2C3E50]/10 rounded-full mb-4">
            <Quote className="w-6 h-6 text-[#2C3E50]" />
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2C3E50] mb-4 leading-snug"
            style={{ fontFamily: "Georgia, serif" }}
          >
            What People Say
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Hear from our community members about their experiences with our
            foundation
          </p>
        </div>

        {/* Swiper */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="pb-12"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="h-full">
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 p-6 md:p-8 flex flex-col h-full border border-gray-100 hover:border-[#2C3E50]/30 transform hover:-translate-y-2 group">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-[#2C3E50] opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 text-sm md:text-base mb-6 flex-grow leading-relaxed">
                      "{t.quote}"
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-[#2C3E50] rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-[#2C3E50] group-hover:ring-3 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm md:text-base text-[#2C3E50] mb-0.5">
                          {t.name}
                        </h3>
                        <p className="text-[#2C3E50]/80 font-medium text-xs md:text-sm">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Pagination */}
      <style>{`
        .swiper-pagination-bullet {
          background: #2C3E50;
          opacity: 0.3;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
