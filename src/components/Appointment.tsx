import React, { useState } from "react";
import { User, Heart, Calendar, Info } from "lucide-react";

const Appointment: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>(""); // track selected service
  const [otherService, setOtherService] = useState<string>(""); // track other text

  const services = [
    "Astrology Consultation",
    "Horoscope Matching (Pellilu / Marriages)",
    "Inti Vasthu (House Vastu Consultation)",
    "Griha Pravesham (House Warming Ceremony)",
    "Poojas (Lakshmi Pooja, Rudrabhishekam, Satyanarayana Vratam)",
    "Homams / Yagnams",
    "Naming Ceremony",
    "Temple Rituals",
    "Other",
  ];

  return (
    <section className="bg-gray-50">
      {/* Banner */}
      <div
        className="relative h-72 md:h-96 flex items-center justify-center mb-16"
        style={{
          backgroundImage: "url('./images/ast.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/80 to-[#3D4C6D]/60"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
            Astrology & Ritual Appointment
          </h1>
          <p className="text-lg md:text-xl text-white">
            Book your consultation for astrology services, temple rituals, and spiritual ceremonies
          </p>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 font-roboto">
          {/* Personal Details */}
          <div className="mb-10">
            <h3 className="flex items-center text-xl font-serif text-[#2C3E50] mb-6">
              <User className="w-5 h-5 text-[#3D4C6D] mr-2" />
              Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition"
              />
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition"
              />
              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition"
              />
              <input
                type="text"
                placeholder="City, State, Country"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition"
              />
              <input
                type="text"
                placeholder="Your age"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition"
              />
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input
                type="text"
                placeholder="Mobile/WhatsApp Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition"
              />
            </div>
            <textarea
              placeholder="Enter your complete address"
              className="mt-6 w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition"
              rows={3}
            ></textarea>
          </div>

          {/* Service Required */}
          <div className="mb-10">
            <h3 className="flex items-center text-xl font-serif text-[#2C3E50] mb-6">
              <Heart className="w-5 h-5 text-[#3D4C6D] mr-2" />
              Service Required
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <label
                  key={i}
                  className="flex items-center border rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name="service"
                    value={service}
                    checked={selectedService === service}
                    onChange={() => setSelectedService(service)}
                    className="mr-3 accent-[#2C3E50]"
                  />
                  <span className="text-[#2C3E50] text-sm">{service}</span>
                </label>
              ))}
            </div>

            {/* Show input if "Other" is selected */}
            {selectedService === "Other" && (
              <input
                type="text"
                placeholder="Please specify"
                value={otherService}
                onChange={(e) => setOtherService(e.target.value)}
                className="mt-4 w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition"
              />
            )}
          </div>

          {/* Preferred Appointment */}
          <div className="mb-10">
            <h3 className="flex items-center text-xl font-serif text-[#2C3E50] mb-6">
              <Calendar className="w-5 h-5 text-[#3D4C6D] mr-2" />
              Preferred Appointment Date & Time
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition"
              />
              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="mb-10">
            <h3 className="flex items-center text-xl font-serif text-[#2C3E50] mb-6">
              <Info className="w-5 h-5 text-[#3D4C6D] mr-2" />
              Additional Information
            </h3>
            <textarea
              placeholder="Please describe your requirements in detail..."
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent mb-6 transition"
            ></textarea>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="How many people will attend?"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition"
              />
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition">
                <option>Select Location</option>
                <option>Temple Premises</option>
                <option>Home / Private Venue</option>
              </select>
            </div>
          </div>

          {/* Declaration */}
          <div className="bg-[#E5E7EB] p-6 rounded-xl mb-8 text-sm text-[#2C3E50]">
            <h4 className="font-semibold mb-2 text-[#3D4C6D]">Declaration</h4>
            <p>
              I confirm that the above details are true and accurate. I request
              to book an appointment for the mentioned service and understand
              that the final confirmation will be provided by the temple
              administration.
            </p>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button className="w-full md:w-auto px-8 py-4 rounded-lg text-white font-serif bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] hover:shadow-lg transition">
              Submit Appointment Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
