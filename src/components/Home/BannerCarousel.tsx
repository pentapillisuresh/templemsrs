import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, Calendar, HandHeart } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import WelcomeBanner from "../WelcomeBanner"; 

const BannerCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const bannerData = [
    {
      image: "./images/banner1.jpg",
      title: "Maha Shree Rudra Samsthanam Foundation",
      subtitle: "A Sacred Journey of Devotion and Service",
    },
    {
      image: "./images/banner2.jpg",
      title: "Divine Blessings Await",
      subtitle: "Experience Spiritual Enlightenment and Inner Peace",
    },
    {
      image: "./images/banner3.jpg",
      title: "Sacred Rituals & Ceremonies",
      subtitle: "Experience Divine Blessings Through Traditional Worship",
    },
  ];

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 9000);
    return () => clearTimeout(interval);
  }, [isAutoPlaying, bannerData.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <>
      {/* Welcome Banner */}
      {/* {showWelcome && (
        <WelcomeBanner onClose={() => setShowWelcome(false)} delay={3000} />
      )} */}

      {/* Main Carousel */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-full" style={{ perspective: "1600px" }}>
          {bannerData.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background with perspective pan/zoom */}
              <div
                className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat ${
                  index === currentSlide ? "animate-zoomPan3D" : ""
                }`}
                style={{ backgroundImage: `url(${banner.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-5xl mx-auto">
                  {/* Title */}
                  <h1
                    style={{ color: "white", fontFamily: "serif" }}
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight ${
                      index === currentSlide ? "animate-titleStagger" : "opacity-0"
                    }`}
                  >
                    {banner.title}
                  </h1>

                  {/* Subtitle */}
                  <p
                    className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90 mb-6 leading-relaxed drop-shadow-lg ${
                      index === currentSlide ? "animate-subtitleIn" : "opacity-0"
                    }`}
                  >
                    {banner.subtitle}
                  </p>

                  {/* Buttons */}
                  <div
                    className={`flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 ${
                      index === currentSlide ? "animate-buttonsIn" : "opacity-0"
                    }`}
                  >
                    {/* Donate Now */}
                    <button
                      onClick={() => navigate("/donate")}
                      className="group border-2 border-[#69B5DE] text-[#69B5DE] px-6 py-3 rounded-full font-semibold hover:bg-[#3D4C6D] hover:text-white transition-all shadow-2xl backdrop-blur-sm flex items-center gap-2"
                    >
                      <Heart size={18} className="group-hover:scale-110 transition-transform" />
                      Donate Now
                    </button>

                    {/* Book Ritual */}
                    <button
                      onClick={() => navigate("/appointment")}
                      className="group border-2 border-[#69B5DE] text-[#69B5DE] px-6 py-3 rounded-full font-semibold hover:bg-[#3D4C6D] hover:text-white transition-all shadow-2xl backdrop-blur-sm flex items-center gap-2"
                    >
                      <Calendar size={18} className="group-hover:scale-110 transition-transform" />
                      Book Ritual
                    </button>

                    {/* Volunteer */}
                    <button
                      onClick={() => navigate("/volunteer")}
                      className="group border-2 border-[#69B5DE] text-[#69B5DE] px-6 py-3 rounded-full font-semibold hover:bg-[#3D4C6D] hover:text-white transition-all shadow-2xl backdrop-blur-sm flex items-center gap-2"
                    >
                      <HandHeart size={18} className="group-hover:scale-110 transition-transform" />
                      Volunteer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 text-white p-3 rounded-full hover:bg-[#3D4C6D] transition-all"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 text-white p-3 rounded-full hover:bg-[#3D4C6D] transition-all"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                index === currentSlide
                  ? "bg-[#69B5DE] border-[#69B5DE] scale-125"
                  : "bg-transparent border-white/60 hover:border-[#3D4C6D]"
              }`}
            />
          ))}
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes zoomPan3D {
            0% {
              transform: scale(1.2) rotateY(6deg) translateX(-20px);
              filter: brightness(1.1);
            }
            100% {
              transform: scale(1) rotateY(0deg) translateX(0);
              filter: brightness(1);
            }
          }
          @keyframes titleStagger {
            0% {
              opacity: 0;
              transform: translateY(40px) rotateX(20deg);
            }
            100% {
              opacity: 1;
              transform: translateY(0) rotateX(0deg);
            }
          }
          @keyframes subtitleIn {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes buttonsIn {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .animate-zoomPan3D {
            animation: zoomPan3D 5s linear forwards;
          }
          .animate-titleStagger {
            animation: titleStagger 1.2s ease-out forwards;
          }
          .animate-subtitleIn {
            animation: subtitleIn 1.4s ease-out forwards;
            animation-delay: 0.3s;
          }
          .animate-buttonsIn {
            animation: buttonsIn 1.6s ease-out forwards;
            animation-delay: 0.6s;
          }
          body {
            overflow-x: hidden;
          }
        `}</style>
      </section>
    </>
  );
};

export default BannerCarousel;