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
      {/* Animated Firecracker Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-800/30 to-red-900/20 backdrop-blur-lg">
        {/* Floating Firecracker Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-6 bg-gradient-to-t from-yellow-500 to-red-500 rounded-full transform rotate-12 shadow-lg animate-pulse" />
          </div>
        ))}
        
        {/* Sparkle Effects */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Main Welcome Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Glowing Border Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-lg opacity-75 animate-pulse"></div>
        
        <div className="relative z-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl shadow-2xl border-2 border-amber-300 overflow-hidden transform transition-all duration-500 hover:scale-105">
          
          {/* Header with Firecracker Design */}
          <div className="relative bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 py-8 px-6 text-center overflow-hidden">
            {/* Animated Firecracker Border */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-4 h-4 bg-yellow-300 rounded-full animate-bounce" />
              <div className="absolute top-0 right-0 w-4 h-4 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-red-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-amber-300 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }} />
            </div>

            {/* Central Icon with Fireworks */}
            <div className="relative z-10">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  {/* Main Icon Container */}
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white transform rotate-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-orange-400 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-amber-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L9 12l-9 4 9 4 3 10 3-10 9-4-9-4-3-10z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Firework Sparks */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-yellow-300 to-red-400 rounded-full animate-firework"
                      style={{
                        transform: `rotate(${i * 45}deg) translateY(-40px)`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mt-8 mb-3 font-serif drop-shadow-lg">
                Welcome to
              </h2>
              <h1 className="text-3xl font-bold text-white font-serif drop-shadow-lg leading-tight">
                Maha Shree Rudra<br />Samsthanam Foundation
              </h1>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8 text-center relative">
            {/* Corner Firecracker Decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8">
              <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full animate-ping" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8">
              <div className="w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8">
              <div className="w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full animate-ping" style={{ animationDelay: '0.6s' }} />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8">
              <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-pink-500 rounded-full animate-ping" style={{ animationDelay: '0.9s' }} />
            </div>

            <div className="mb-6 relative z-10">
              <p className="text-gray-800 text-lg leading-relaxed mb-4 font-medium">
                We welcome you to our sacred space of devotion and spiritual growth
              </p>
              <p className="text-gray-700 text-sm italic">
                May your journey be filled with divine blessings and inner peace
              </p>
            </div>

            {/* Animated Firecracker Progress Bar */}
            <div className="w-full bg-gradient-to-r from-amber-100 to-orange-100 rounded-full h-3 mb-4 overflow-hidden border border-amber-200 shadow-inner">
              <div 
                className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 h-3 rounded-full relative overflow-hidden transition-all duration-100 ease-linear"
                style={{ 
                  width: isExiting ? '100%' : '0%',
                  transition: isExiting ? 'width 0.5s ease-in-out' : `width ${delay}ms linear`
                }}
              >
                {/* Sparkle effect on progress */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-transparent animate-shine" />
              </div>
            </div>

            <p className="text-gray-600 text-xs font-medium">
              This message will close automatically...
            </p>
          </div>

          {/* Bottom Firecracker Design */}
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 py-4 px-6 border-t border-amber-200">
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-6 bg-gradient-to-t from-amber-400 to-orange-600 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
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