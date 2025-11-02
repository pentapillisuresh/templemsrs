import { useState, useEffect, useRef } from "react";
import GoogleTranslate from "./GoogleTranslate";
import {
  Menu,
  X,
  Home,
  Info,
  Users,
  Calendar,
  Camera,
  FolderOpen,
  UserCheck,
  Shield,
  BookOpen,
  ChevronDown,
  CalendarCheck,
  HandHeart,
  Volume2,
  VolumeX,
  Award
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize audio state from localStorage on component mount
  useEffect(() => {
    const savedAudioState = localStorage.getItem('audioPlaying');
    if (savedAudioState === 'true') {
      setIsPlaying(true);
    }
  }, []);

  // Handle audio playback when isPlaying state changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(error => {
        console.log('Audio play failed:', error);
        setIsPlaying(false);
      });
      localStorage.setItem('audioPlaying', 'true');
    } else {
      audio.pause();
      localStorage.setItem('audioPlaying', 'false');
    }
  }, [isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  // Only reset mobile menu on route change, not audio
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const mainItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "about", label: "About", icon: Info, path: "/about" },
    { id: "contact", label: "Contact", icon: Users, path: "/contact" },
    { id: "appointment", label: "Appointment", icon: CalendarCheck, path: "/appointment" },
    { id: "donate", label: "Donate", icon: HandHeart, path: "/donate" },
  ];

  const dropdownItems = [
    { id: "board", label: "Board & Management", icon: UserCheck, path: "/board" },
    { id: "events", label: "Events", icon: Calendar, path: "/events" },
    { id: "gallery", label: "Gallery", icon: Camera, path: "/gallery" },
    { id: "governance", label: "Governance", icon: Shield, path: "/governance" },
    { id: "library", label: "E-Library", icon: BookOpen, path: "/library" },
    { id: "projects", label: "Projects", icon: FolderOpen, path: "/projects" },
    { id: "team", label: "Team", icon: Users, path: "/team" },
    { id: "volunteer", label: "Volunteer", icon: Users, path: "/volunteer" },
    { id: "certificates", label: "Certificates Govt of India", icon: Award, path: "/certificates" },
  ].sort((a, b) => a.label.localeCompare(b.label));

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-0 py-0">
        {/* Logo with Text - Clean Design */}
        <Link
          to="/"
          className="flex items-center space-x-4 group transition-all duration-300 hover:scale-105"
        >
          {/* Large Logo Image without background */}
          <div className="flex-shrink-0">
            <img 
              src="/images/logomaha21.png" 
              alt="MAHA SHREE RUDRA SAMSTHANAM FOUNDATION Logo"
              className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain transition-all duration-300"
              onError={(e) => {
                // Fallback if logo doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          
          {/* Text Container with Better Typography */}
          <div className="flex flex-col space-y-0">
            <span
              className={`text-xl md:text-1xl font-bold font-serif leading-tight tracking-wide ${
                isScrolled ? "text-gray-900" : "text-white"
              } group-hover:text-[#3B4A69] transition-colors duration-300`}
            >
              MAHA SHREE RUDRA
            </span>
            <span
              className={`text-sm md:text-base font-semibold font-sans leading-tight tracking-normal ${
                isScrolled ? "text-gray-700" : "text-white/90"
              } group-hover:text-[#3B4A69] transition-colors duration-300`}
            >
              SAMSTHANAM FOUNDATION
            </span>
            {/* Subtle decorative line */}
            <div className={`w-16 h-0.5 rounded-full transition-all duration-300 ${
              isScrolled ? "bg-[#3B4A69]" : "bg-white/70"
            } group-hover:bg-[#3B4A69] group-hover:w-20`}></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {mainItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`relative flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? "text-[#3B4A69]"
                  : isScrolled
                  ? "text-gray-700 hover:text-[#3B4A69]"
                  : "text-white hover:text-[#3B4A69]"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
              {isActive(item.path) && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3B4A69] rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}

          {/* Dropdown + Audio + Translator */}
          <div className="flex items-center space-x-6">
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#3B4A69]"
                    : "text-white hover:text-[#3B4A69]"
                }`}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute right-0 mt-2 w-56 rounded-lg shadow-xl bg-white border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          onClick={() => setIsDropdownOpen(false)}
                          className={`flex items-center space-x-2 w-full px-4 py-2 text-sm transition-all duration-200 ${
                            isActive(item.path)
                              ? "text-[#3B4A69] bg-gray-50 font-semibold"
                              : "text-gray-700 hover:text-[#3B4A69] hover:bg-gray-50"
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Audio + Translate Container */}
            <div className="flex items-center space-x-4">
              {/* Audio Icon */}
              <button
                onClick={toggleAudio}
                className={`p-2 rounded-full transition ${
                  isScrolled
                    ? "bg-gray-100 text-[#3B4A69] hover:bg-gray-200"
                    : "bg-white/20 text-white hover:bg-white/40"
                }`}
              >
                {isPlaying ? (
                  <Volume2 className="w-5 h-5" />
                ) : (
                  <VolumeX className="w-5 h-5" />
                )}
              </button>

              {/* Google Translate */}
              <div className={`translate-wrapper overflow-hidden h-10 flex items-center`}>
                <GoogleTranslate />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Audio Icon in Mobile Header */}
          <button
            onClick={toggleAudio}
            className={`p-2 rounded-full transition ${
              isScrolled
                ? "bg-gray-100 text-[#3B4A69] hover:bg-gray-200"
                : "bg-white/20 text-white hover:bg-white/40"
            }`}
          >
            {isPlaying ? (
              <Volume2 className="w-5 h-5" />
            ) : (
              <VolumeX className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-transform duration-200 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-md"
          >
            <div className="px-4 py-3 space-y-1">
              {[...mainItems, ...dropdownItems].map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "text-[#3B4A69] bg-gray-100"
                      : "text-gray-700 hover:text-[#3B4A69] hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}

              {/* Google Translate in Mobile */}
              {/* <div className="px-3 py-3 border-t border-gray-100">
                <div className="text-xs font-medium text-gray-500 mb-2">Language Translator</div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <GoogleTranslate />
                </div>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Audio - Persistent across navigation */}
      <audio 
        ref={audioRef} 
        src="/images/om.mp3" 
        loop 
        preload="auto" 
      />
    </header>
  );
};

export default Header;