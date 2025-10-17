import { useState, useEffect, useRef } from "react";
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
  const audioRef = useRef(null);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle play/pause audio
  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Stop audio when navigating
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
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

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
        >
          <span
            className={`text-lg font-bold font-serif tracking-tight ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            MAHA SHREE RUDRA SAMSTHANAM FOUNDATION
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {mainItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`relative flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none ${
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

          {/* Dropdown + Audio */}
          <div className="flex items-center space-x-4">
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none ${
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
                    className="absolute right-0 mt-2 w-56 rounded-lg shadow-xl bg-white border border-gray-100 overflow-hidden"
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

            {/* Audio Icon */}
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full bg-white/20 hover:bg-white/40 transition ${
                isScrolled ? "text-[#3B4A69]" : "text-white"
              }`}
            >
              {isPlaying ? (
                <Volume2 className="w-5 h-5" />
              ) : (
                <VolumeX className="w-5 h-5" />
              )}
            </button>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src="/images/om.mp3" loop preload="auto" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
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

              {/* Audio Icon in Mobile Menu */}
              <button
                onClick={toggleAudio}
                className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#3B4A69] hover:bg-gray-50"
              >
                {isPlaying ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
                <span>{isPlaying ? "Stop Chant" : "Play Chant"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
