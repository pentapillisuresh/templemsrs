import { useState, useEffect } from "react";
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
  CalendarCheck, HandHeart 
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "about", label: "About Temple", icon: Info, path: "/about" },
    { id: "contact", label: "Contact", icon: Users, path: "/contact" },
  ];

  const dropdownItems = [
    { id: "board", label: "Board & Management", icon: UserCheck, path: "/board" },
    { id: "events", label: "Events", icon: Calendar, path: "/events" },
    { id: "gallery", label: "Gallery", icon: Camera, path: "/gallery" },
    { id: "projects", label: "Projects", icon: FolderOpen, path: "/projects" },
    { id: "team", label: "Team", icon: Users, path: "/team" },
    { id: "governance", label: "Governance", icon: Shield, path: "/governance" },
    { id: "library", label: "E-Library", icon: BookOpen, path: "/library" },
    { id: "volunteer", label: "Volunteer", icon: Users, path: "/volunteer" },
    { id: "appointment", label: "Appointment", icon: CalendarCheck, path: "/appointment" },
  { id: "donate", label: "Donate", icon: HandHeart, path: "/donate" },


  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div> */}
          <span
            className={`text-2xl font-bold font-serif ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            MAHA SHREE RUDRA SAMSTHANAM
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {mainItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none ${
                isScrolled
                  ? "text-gray-700 hover:text-[#3B4A69]"
                  : "text-white hover:text-[#3B4A69]"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          ))}

          {/* Dropdown */}
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
                className={`w-4 h-4 transition-transform ${
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
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white border border-gray-100"
                >
                  <div className="py-2">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:text-[#3B4A69] hover:bg-gray-50 transition-all duration-200 focus:outline-none"
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
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isScrolled ? "text-gray-700" : "text-white"} focus:outline-none`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[...mainItems, ...dropdownItems].map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#3B4A69] hover:bg-gray-50 transition-all duration-200 focus:outline-none"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
