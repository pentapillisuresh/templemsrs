import { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart, Star, X, Award, Users } from "lucide-react";

interface WelcomeBannerProps {
  onClose: () => void;
  delay?: number;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ onClose, delay = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Confetti animation with original vibrant colors
  const launchConfetti = () => {
    const end = Date.now() + 500;
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 6,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: colors,
        gravity: 1.2,
        scalar: 1.2,
        drift: 0.2,
      });

      confetti({
        particleCount: 6,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: colors,
        gravity: 1.2,
        scalar: 1.2,
        drift: -0.2,
      });

      confetti({
        particleCount: 3,
        angle: 90,
        spread: 100,
        origin: { x: 0.5, y: 0.9 },
        colors: colors,
        gravity: 1.5,
        scalar: 1,
        drift: 0,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  useEffect(() => {
    // Continuous confetti bursts
    const confettiInterval = setInterval(launchConfetti, 800);

    // Auto-close timer
    const timer = setTimeout(() => {
      setIsExiting(true);
      const closeTimer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 600);

      return () => clearTimeout(closeTimer);
    }, delay);

    return () => {
      clearTimeout(timer);
      clearInterval(confettiInterval);
    };
  }, [delay, onClose]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 400);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
        isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      {/* Confetti Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Banner */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Outer Glow */}
        <div className="absolute -inset-3 bg-2C3E50/30 rounded-2xl blur-lg opacity-50" />

        <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center border border-slate-300 hover:bg-slate-200 transition-all duration-200 hover:scale-110 group"
          >
            <X className="w-4 h-4 text-slate-600 group-hover:text-slate-800 transition-colors" />
          </button>

          <div className="grid lg:grid-cols-2 gap-0 min-h-[380px]">
            
            {/* Left Section - Professional Theme */}
            <div className="relative bg-2C3E50 p-8 flex flex-col justify-center overflow-hidden">
              
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, #FFFFFF 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                  <div className="relative">
                    <Award className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Welcome Text */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-px w-12 bg-white/40" />
                    <span className="text-white/80 text-xs font-medium tracking-widest uppercase">
                      Welcome to
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-white leading-tight tracking-tight font-serif">
                      Maha Shree
                    </h1>
                    <h1 className="text-2xl font-bold text-white/90 leading-tight tracking-wide font-serif">
                      Rudra Samsthanam
                    </h1>
                    <div className="flex items-center gap-2 pt-1">
                      <div className="h-px w-8 bg-white/30" />
                      <span className="text-white/70 text-sm font-light tracking-wide uppercase">
                        Foundation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Icons */}
                <div className="flex gap-3 pt-2">
                  {[Award, Users, Star].map((Icon, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center transform hover:scale-105 transition-all duration-200"
                    >
                      <Icon className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="p-8 flex flex-col justify-center relative bg-white">
              
              {/* Animated Dots */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-2C3E50/60"
                    style={{
                      animation: `pulse ${1.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  {/* Badge */}
                  <div className="inline-block">
                    <div className="flex items-center gap-2 px-4 py-2 bg-2C3E50/10 rounded-xl border border-2C3E50/20">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-2C3E50 text-sm font-semibold tracking-wide">
                        Government Recognized
                      </span>
                    </div>
                  </div>

                  {/* Main Heading */}
                  <h2 className="text-xl font-bold text-slate-800 leading-tight">
                    Divine Kindness Through
                    <br />
                    <span className="text-2C3E50">Empathetic Service</span>
                  </h2>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Welcome to our spiritual foundation dedicated to serving humanity 
                    and spreading divine harmony through compassionate service.
                  </p>

                  {/* Invitation Card */}
                  <div className="flex items-start gap-3 p-4 bg-2C3E50/5 rounded-xl border border-2C3E50/10">
                    <div className="w-8 h-8 bg-2C3E50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="w-4 h-4 text-white" fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-slate-700 text-xs leading-relaxed font-medium">
                        "You are cordially invited to join our sacred journey toward serving 
                        humanity and spreading spiritual harmony."
                      </p>
                    </div>
                  </div>

                  {/* Founder Section */}
                  <div className="pt-3 border-t border-slate-200">
                    <div className="text-center">
                      <p className="text-slate-800 font-semibold text-sm">Srinivasa Sai Kavali</p>
                      <p className="text-slate-600 text-xs">Founder & Director</p>
                    </div>
                  </div>
                </div>

                {/* Motto Section */}
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-3 bg-2C3E50/5 rounded-xl border border-2C3E50/10">
                      <Star className="w-4 h-4 text-2C3E50" />
                      <span className="text-2C3E50 font-semibold text-sm tracking-wide">
                        Serving Humanity • Spiritual Harmony
                      </span>
                      <Star className="w-4 h-4 text-2C3E50" />
                    </div>
                  </div>
                  
                  {/* Thank You */}
                  <div className="text-center">
                    <p className="text-slate-600 text-xs italic">
                      Thank you for visiting our official website
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Custom Color Style */}
      <style jsx global>{`
        .bg-2C3E50 { background-color: #2C3E50; }
        .bg-2C3E50\\/10 { background-color: rgba(44, 62, 80, 0.1); }
        .bg-2C3E50\\/5 { background-color: rgba(44, 62, 80, 0.05); }
        .bg-2C3E50\\/30 { background-color: rgba(44, 62, 80, 0.3); }
        .bg-2C3E50\\/60 { background-color: rgba(44, 62, 80, 0.6); }
        .border-2C3E50\\/10 { border-color: rgba(44, 62, 80, 0.1); }
        .border-2C3E50\\/20 { border-color: rgba(44, 62, 80, 0.2); }
        .text-2C3E50 { color: #2C3E50; }
      `}</style>
    </div>
  );
};

export default WelcomeBanner;