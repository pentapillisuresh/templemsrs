import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface WelcomeBannerProps {
  onClose: () => void;
  delay?: number;
  imageUrl?: string; // optional custom image
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({
  onClose,
  delay = 3000,
  imageUrl = "./images/welcome.png", // default image path
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Auto-close timer
    const timer = setTimeout(() => {
      setIsExiting(true);
      const closeTimer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 600);
      return () => clearTimeout(closeTimer);
    }, delay);

    return () => clearTimeout(timer);
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
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
        isExiting ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 hover:scale-105"
      >
        <X className="w-5 h-5 text-slate-700" />
      </button>

      {/* Image Popup */}
      <div className="relative z-10 w-[90%] max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200 mt-12">
        <img
          src={imageUrl}
          alt="Welcome Banner"
          className="w-full h-[500px] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default WelcomeBanner;
