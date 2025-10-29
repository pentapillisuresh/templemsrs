import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative text-gray-200 overflow-hidden"
      style={{
        background: "linear-gradient(rgb(15, 23, 42), rgb(93 120 165))",
      }}
    >
      {/* Center Top Image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src="/images/footerlogo.png" // replace with your temple/lotus image
          alt="Footer Top Decoration"
          className="w-40 h-auto opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            MSRS Foundation
          </h2>
          <p className="font-roboto text-sm leading-relaxed text-gray-300">
            Dedicated to spiritual growth, community service, and preserving
            ancient traditions while serving modern needs.
          </p>
          <div className="mt-4 space-y-2 text-sm font-roboto text-gray-400">
            <p>📍 Temple Road, Sacred Grove, Spiritual City</p>
            <p>📞 +91 XXXXX XXXXX</p>
            <p>✉️ info@msrsfoundation.org</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 font-roboto text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About Temple</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-400">Gallery</Link></li>
            <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
            <li><Link to="/board" className="hover:text-blue-400">Trustees</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 font-roboto text-sm">
            <li><Link to="/volunteer" className="hover:text-blue-400">Volunteer</Link></li>
            <li><Link to="/appointment" className="hover:text-blue-400">Appointment</Link></li>
            <li><Link to="/donate" className="hover:text-blue-400">Donation</Link></li>
            <li><Link to="/events" className="hover:text-blue-400">Events</Link></li>
            <li><Link to="/governance" className="hover:text-blue-400">Governance</Link></li>
            <li><Link to="/library" className="hover:text-blue-400">E-Library</Link></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-white mb-4">
            Stay Connected
          </h3>
          <p className="font-roboto text-sm mb-3 text-gray-300">
            Subscribe to our newsletter for updates on events and activities.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md bg-gray-800 text-gray-200 font-roboto text-sm focus:outline-none w-full"
            />
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-2 rounded-r-md text-white font-bold">
              →
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-6">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} className="text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center font-roboto text-sm text-gray-200">
        <p>
          © 2025 MAHA SHREE RUDRA SAMSTHANAM FOUNDATION. All rights reserved. | 
          <a href="#" className="ml-2 text-gray-100 hover:text-blue-400">Privacy Policy</a> | 
          <a href="#" className="ml-2 text-gray-100 hover:text-blue-400">Terms of Service</a> | 
          <a href="#" className="ml-2 text-gray-100 hover:text-blue-400">Sitemap</a>
        </p>
        <p className="mt-2 text-gray-300">
          Developed by{" "}
          <a
            href="https://esotericprojects.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            EsotericProjects
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;