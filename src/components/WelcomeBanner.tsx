import { useEffect, useState } from "react";

interface WelcomeBannerProps {
  onClose: () => void;
  delay?: number;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ onClose, delay = 1000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      
      const closeTimer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 300);
      
      return () => clearTimeout(closeTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
      isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
      {/* Elegant Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-2C3E50/40 to-slate-800/20 backdrop-blur-md">
        {/* Subtle Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <div className="w-1 h-4 bg-gradient-to-t from-slate-400 to-2C3E50 rounded-full transform rotate-12 opacity-60" />
          </div>
        ))}
        
        {/* Subtle Sparkle Effects */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-slate-300 rounded-full animate-ping opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>

      {/* Main Welcome Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Sophisticated Border Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-slate-500 via-2C3E50 to-slate-700 rounded-3xl blur-md opacity-60"></div>
        
        <div className="relative z-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
          
          {/* Header with Professional Design */}
          <div className="relative bg-gradient-to-r from-slate-700 via-2C3E50 to-slate-800 py-8 px-6 text-center overflow-hidden">
            {/* Subtle Animated Border Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-3 h-3 bg-slate-300 rounded-full animate-pulse" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-slate-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-slate-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-300 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>

            {/* Central Icon with Elegant Design */}
            <div className="relative z-10">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  {/* Main Icon Container */}
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-2C3E50 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-300 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-2C3E50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L9 12l-9 4 9 4 3 10 3-10 9-4-9-4-3-10z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Subtle Surrounding Elements */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-slate-400 rounded-full opacity-70"
                      style={{
                        transform: `rotate(${i * 60}deg) translateY(-35px)`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-slate-200 mt-8 mb-3 font-sans tracking-wide">
                Welcome to
              </h2>
              <h1 className="text-2xl font-bold text-white font-sans leading-tight tracking-tight">
                Maha Shree Rudra<br />Samsthanam Foundation
              </h1>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8 text-center relative">
            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-6 h-6">
              <div className="w-2 h-2 bg-slate-400 rounded-full opacity-60" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6">
              <div className="w-2 h-2 bg-slate-400 rounded-full opacity-60" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6">
              <div className="w-2 h-2 bg-slate-400 rounded-full opacity-60" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6">
              <div className="w-2 h-2 bg-slate-400 rounded-full opacity-60" />
            </div>

            <div className="mb-6 relative z-10">
              <p className="text-slate-700 text-lg leading-relaxed mb-4 font-medium">
                We welcome you to our sacred space of devotion and spiritual growth
              </p>
              <p className="text-slate-600 text-sm italic">
                May your journey be filled with divine blessings and inner peace
              </p>
            </div>

            {/* Elegant Progress Bar */}
            <div className="w-full bg-gradient-to-r from-slate-100 to-slate-200 rounded-full h-2 mb-4 overflow-hidden border border-slate-300 shadow-inner">
              <div 
                className="bg-gradient-to-r from-slate-500 via-2C3E50 to-slate-700 h-2 rounded-full relative overflow-hidden transition-all duration-100 ease-linear"
                style={{ 
                  width: isExiting ? '100%' : '0%',
                  transition: isExiting ? 'width 0.5s ease-in-out' : `width ${delay}ms linear`
                }}
              >
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/30 to-transparent animate-shine" />
              </div>
            </div>

            <p className="text-slate-500 text-xs font-medium">
              This message will close automatically...
            </p>
          </div>

          {/* Bottom Design Element */}
          <div className="bg-gradient-to-r from-slate-500/5 to-2C3E50/5 py-4 px-6 border-t border-slate-200">
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-4 bg-gradient-to-t from-slate-400 to-2C3E50 rounded-full opacity-80"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;