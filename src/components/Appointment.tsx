import React, { useState, useEffect } from "react";
import { User, Heart, Calendar, Info, X, CheckCircle, Mail, Phone, MapPin, Clock, Users, Venue } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    tob: "",
    location: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    appointmentDate: "",
    appointmentTime: "",
    additionalInfo: "",
    attendees: "",
  });
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [otherService, setOtherService] = useState<string>("");
  const [declarationAccepted, setDeclarationAccepted] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const services = [
    "Astrology Consultation",
    "Horoscope Matching (Pellilu / Marriages)",
    "Inti Vasthu (House Vastu Consultation)",
    "Gruha Pravesham (House Warming Ceremony)",
    "Poojas (Lakshmi Pooja, Rudrabhishekam, Satyanarayana Vratam)",
    "Homams / Yagnams",
    "Temple Rituals",
    "Other",
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  // Get today's date in YYYY-MM-DD format for min date
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!declarationAccepted) {
      alert("Please accept the declaration to proceed.");
      return;
    }
    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmitAnother = () => {
    setShowPopup(false);
    setFormData({
      name: "",
      dob: "",
      tob: "",
      location: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      appointmentDate: "",
      appointmentTime: "",
      additionalInfo: "",
      attendees: "",
    });
    setSelectedServices([]);
    setOtherService("");
    setDeclarationAccepted(false);
  };

  // Close popup when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    if (showPopup) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showPopup]);

  // Success Popup Component
  const SuccessPopup = () => {
    if (!showPopup) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in">
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-auto animate-scale-in">
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="p-8 text-center">
            {/* Success Icon */}
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-ping opacity-20"></div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">
              Appointment Request Submitted!
            </h3>

            {/* Personalized Message */}
            <div className="space-y-4 mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Thank you{" "}
                <span className="font-semibold text-[#2C3E50]">
                  {formData.name || "there"}
                </span>{" "}
                for choosing{" "}
                <span className="font-semibold text-[#2C3E50]">
                  Maha Shree Rudra Samsthanam Foundation
                </span>
                !
              </p>
              <p className="text-gray-600 leading-relaxed">
                We have received your appointment request for{" "}
                <span className="font-semibold text-[#2C3E50]">
                  {selectedServices.length > 0 ? selectedServices.join(", ") : "selected services"}
                </span>
                . Our priests and administrators will review your request and contact you within{" "}
                <span className="font-semibold text-[#2C3E50]">24-48 hours</span> to confirm your appointment.
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-600 mb-2">
                For urgent queries regarding your appointment:
              </p>
              <p className="text-sm font-medium text-[#2C3E50]">
                📧 appointments@maharudrasamsthanam.org<br />
                📞 +91 XXXXX XXXXX
              </p>
            </div>

            {/* Service Reminder */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-amber-800">
                💫 Please keep your birth details and any relevant documents ready for the consultation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={closePopup}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
              >
                Close
              </button>
              <button
                onClick={handleSubmitAnother}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                New Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <SuccessPopup />
      
      <section className="bg-gradient-to-br from-slate-50 to-gray-50 min-h-screen">
        {/* Banner */}
        <div
          className="relative h-72 md:h-96 flex items-center justify-center mb-12"
          style={{
            backgroundImage: "url('./images/ast.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/80 to-[#3D4C6D]/60"></div>
          <div className="relative text-center px-4 max-w-4xl mx-auto">
            <h1 
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Astrology & Ritual Appointment
            </h1>
            
            <p 
              className="text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Book your consultation for astrology services, temple rituals, and spiritual ceremonies
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 font-roboto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Details */}
              <div>
                <h3 className="flex items-center text-xl font-serif text-[#2C3E50] mb-6">
                  <User className="w-6 h-6 text-[#3D4C6D] mr-2" />
                  Personal Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                      <User className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                      <Calendar className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Time of Birth */}
                  <div>
                    <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                      <Clock className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                      Time of Birth *
                    </label>
                    <input
                      type="time"
                      name="tob"
                      value={formData.tob}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                      <MapPin className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                      City, State, Country *
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter your location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                      <Users className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                      Age *
                    </label>
                    <input
                      type="text"
                      name="age"
                      placeholder="Enter your age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                      <Users className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                      Gender *
                    </label>
                    <select 
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                      <Phone className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                      Mobile/WhatsApp Number *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                      <Mail className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="mt-6">
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <MapPin className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                    Complete Address *
                  </label>
                  <textarea
                    name="address"
                    placeholder="Enter your complete address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300 resize-vertical"
                    rows={3}
                    required
                  />
                </div>
              </div>

              {/* Service Required */}
              <div>
                <h3 className="flex items-center text-xl font-serif text-[#2C3E50] mb-6">
                  <Heart className="w-6 h-6 text-[#3D4C6D] mr-2" />
                  Service Required (Select all that apply)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <label
                      key={index}
                      className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-[#2C3E50] transition-all duration-300 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={service}
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-4 h-4 text-[#2C3E50] border-gray-300 rounded focus:ring-[#2C3E50] mr-3"
                      />
                      <span className="text-[#2C3E50] text-sm font-medium">{service}</span>
                    </label>
                  ))}
                </div>

                {selectedServices.includes("Other") && (
                  <div className="mt-4">
                    <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                      <Info className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                      Please specify other service *
                    </label>
                    <input
                      type="text"
                      placeholder="Describe the service you need"
                      value={otherService}
                      onChange={(e) => setOtherService(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Preferred Appointment */}
              <div>
                <h3 className="flex items-center text-xl font-serif text-[#2C3E50] mb-6">
                  <Calendar className="w-6 h-6 text-[#3D4C6D] mr-2" />
                  Preferred Appointment Date & Time
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Appointment Date */}
                  <div>
                    <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                      <Calendar className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleInputChange}
                      min={getTodayDate()}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Appointment Time */}
                  <div>
                    <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                      <Clock className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-2">
                  * Please select a future date for your appointment
                </p>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="flex items-center text-xl font-serif text-[#2C3E50] mb-6">
                  <Info className="w-6 h-6 text-[#3D4C6D] mr-2" />
                  Additional Information
                </h3>
                
                {/* Additional Info Textarea */}
                <div className="mb-6">
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <Info className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                    Detailed Requirements
                  </label>
                  <textarea
                    name="additionalInfo"
                    placeholder="Please describe your requirements in detail, including any specific concerns or questions you have..."
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300 resize-vertical"
                  />
                </div>

                {/* Attendees */}
                <div>
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <Users className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                    Number of Attendees
                  </label>
                  <input
                    type="text"
                    name="attendees"
                    placeholder="How many people will attend the consultation/ritual?"
                    value={formData.attendees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Declaration */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    checked={declarationAccepted}
                    onChange={(e) => setDeclarationAccepted(e.target.checked)}
                    className="w-5 h-5 text-[#2C3E50] border-gray-300 rounded focus:ring-[#2C3E50] mt-2 mr-2 flex-shrink-0"
                    required
                  />
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-2">Declaration</h4>
                    <p className="text-[#3D4C6D] text-sm leading-relaxed">
                      I confirm that the above details are true and accurate. I request
                      to book an appointment for the mentioned service and understand
                      that the final confirmation will be provided by the temple
                      administration of Maha Shree Rudra Samsthanam Foundation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] text-white px-12 py-4 rounded-full font-serif text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Submit Appointment Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;