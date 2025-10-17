import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import "aos/dist/aos.css";

// ✅ Type-safe Count-Up Component
interface CountUpNumberProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({
  from,
  to,
  duration = 2,
  suffix = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      count.set(from);
      const controls = {
        current: count.get(),
      };
      const startTime = performance.now();

      const animate = (time: number) => {
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        const value = from + (to - from) * progress;
        count.set(value);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, count, from, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          latest.toLocaleString() + (suffix ?? "");
      }
    });
    return () => unsubscribe();
  }, [rounded, suffix]);

  return <span ref={ref}>{from.toLocaleString() + suffix}</span>;
};

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #2C3E50 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#69B5DE]/5 text-[#2C3E50] rounded-full text-xs font-semibold tracking-wider uppercase mb-3 font-['Roboto']">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3 leading-tight tracking-tight font-serif">
            MAHA SHREE RUDRA SAMSTHANAM FOUNDATION
          </h1>
          <div className="w-16 h-0.5 bg-[#2C3E50] mx-auto mb-4"></div>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed font-['Roboto']">
            Preserving sacred wisdom and serving humanity with compassion,
            devotion, and unwavering commitment to spiritual growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
          {/* Left: Image & Stats */}
          <div
            className="lg:col-span-3 order-2 lg:order-1 flex flex-col"
            data-aos="fade-right"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="./images/temple2.jpg"
                alt="Temple worship"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-[18px] font-medium font-['Roboto']">
                  Sacred Traditions & Rituals
                </p>
              </div>
            </div>

            {/* Stats Bar */}
            <div
              className="grid grid-cols-3 gap-4 mt-6 bg-gradient-to-br from-[#2C3E50] to-[#34495E] rounded-lg p-6 shadow-lg"
              data-aos="fade-up"
            >
              <div className="text-center border-r border-white/20 last:border-0">
                <p className="text-2xl font-bold text-white mb-1 font-serif">
                  <CountUpNumber from={0} to={25} suffix="+" duration={1.5} />
                </p>
                <p className="text-[18px] text-white/80 font-['Roboto']">
                  Years Active
                </p>
              </div>
              <div className="text-center border-r border-white/20 last:border-0">
                <p className="text-2xl font-bold text-white mb-1 font-serif">
                  <CountUpNumber from={0} to={10000} suffix="+" duration={2.5} />
                </p>
                <p className="text-[18px] text-white/80 font-['Roboto']">
                  Lives Impacted
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white mb-1 font-serif">
                  <CountUpNumber from={0} to={50} suffix="+" duration={2} />
                </p>
                <p className="text-[18px] text-white/80 font-['Roboto']">
                  Programs
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className="lg:col-span-2 order-1 lg:order-2 flex flex-col justify-start space-y-6"
            data-aos="fade-left"
          >
            <div>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4 leading-tight font-serif">
                Our Sacred Mission
              </h2>
              <div className="space-y-4">
                <p className="text-[18px] text-gray-700 leading-relaxed font-['Roboto']">
                  For over two decades, our foundation has served as a sanctuary
                  for spiritual seekers, providing a path to inner peace,
                  wisdom, and community through devotion and service.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed font-['Roboto']">
                  We are committed to preserving ancient traditions while
                  addressing modern spiritual needs through education, guidance,
                  and social welfare programs that touch thousands of lives
                  annually.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-[#69B5DE]/10 border-l-4 border-[#2C3E50] p-5 mt-4">
              <blockquote className="text-[18px] text-gray-800 font-medium italic leading-relaxed mb-2 font-['Roboto']">
                "Service to humanity is the highest form of worship and devotion
                to the Divine"
              </blockquote>
              <cite className="text-[18px] text-gray-600 not-italic font-['Roboto']">
                — Our Guiding Principle
              </cite>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
              className="self-start px-6 py-2 bg-[#2C3E50] text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-[#1a252f]"
            >
              Read More →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
