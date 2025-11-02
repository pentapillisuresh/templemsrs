import React, { useState, useEffect } from 'react';
import {
  User,
  Mail,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Phone,
  Heart,
  Send,
  CheckCircle,
  Droplet,
  ChevronDown,
  X,
  Users,
  Circle,
  BookOpen,
} from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    qualification: '',
    occupation: '',
    gender: '',
    dob: '',
    address: '',
    phone: '',
    maritalStatus: '',
    bloodGroup: '',
    activeDonor: '',
    interests: [] as string[],
    availability: [] as string[],
    feedback: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const interests = [
    'Temple Service',
    'Social Service',
    'Educational Support',
    'Events',
    'Medical Camps',
    'Others',
  ];

  const availabilityOptions = [
    'Weekdays',
    'Weekends',
    'Flexible',
    'Specific Time',
  ];

  const bloodGroups = [
    'A+',
    'A−',
    'B+',
    'B−',
    'O+',
    'O−',
    'AB+',
    'AB−',
  ];

  const qualifications = [
    'High School',
    'Diploma',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Other',
  ];

  const occupations = [
    'Student',
    'Software Engineer',
    'Teacher',
    'Doctor',
    'Engineer',
    'Business Owner',
    'Government Employee',
    'Private Sector Employee',
    'Freelancer',
    'Retired',
    'Other',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleAvailabilityChange = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      availability: prev.availability.includes(option)
        ? prev.availability.filter((i) => i !== option)
        : [...prev.availability, option],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };

    if (showPopup) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  const handleSubmitAnother = () => {
    setShowPopup(false);
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      qualification: '',
      occupation: '',
      gender: '',
      dob: '',
      address: '',
      phone: '',
      maritalStatus: '',
      bloodGroup: '',
      activeDonor: '',
      interests: [],
      availability: [],
      feedback: '',
    });
  };

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
              Application Submitted!
            </h3>

            {/* Personalized Message */}
            <div className="space-y-4 mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Thank you <span className="font-semibold text-[#2C3E50]">{formData.name || 'there'}</span> for your interest in volunteering with us!
              </p>
              <p className="text-gray-600 leading-relaxed">
                We have received your application and our team will review it carefully. 
                We'll get back to you within <span className="font-semibold text-[#2C3E50]">24 to 48hours</span>.
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-600 mb-2">
                For any urgent queries, feel free to contact us:
              </p>
              <p className="text-sm font-medium text-[#2C3E50]">
                📧 volunteer@organization.org | 📞 +1 (555) 123-4567
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
                Submit Another
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
            backgroundImage: "url('./images/volunteer.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/80 to-[#3D4C6D]/60"></div>
          <div className="relative text-center px-4 max-w-4xl mx-auto">
            <h2 
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Become a <span className="text-white">Volunteer</span>
            </h2>
            
            <p 
              className="text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Join our mission to serve the community and make a meaningful difference
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-12">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-8 font-roboto">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <User className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <Mail className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] transition-all duration-300"
                  />
                </div>

                {/* Qualification */}
                <div className="relative">
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <GraduationCap className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Qualification
                  </label>
                  <div className="relative">
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] appearance-none transition-all duration-300"
                    >
                      <option value="">Select</option>
                      {qualifications.map((qual) => (
                        <option key={qual} value={qual}>
                          {qual}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Occupation */}
                <div className="relative">
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <Briefcase className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Profession
                  </label>
                  <div className="relative">
                    <select
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] appearance-none transition-all duration-300"
                    >
                      <option value="">Select</option>
                      {occupations.map((occupation) => (
                        <option key={occupation} value={occupation}>
                          {occupation}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Gender */}
                <div className="relative">
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <Users className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Gender
                  </label>
                  <div className="relative">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] appearance-none transition-all duration-300"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* DOB */}
                <div>
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <Calendar className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] transition-all duration-300"
                  />
                </div>

                {/* Blood Group */}
                <div className="relative">
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <Droplet className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Blood Group
                  </label>
                  <div className="relative">
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] appearance-none transition-all duration-300"
                    >
                      <option value="">Select Blood Group</option>
                      {bloodGroups.map((group) => (
                        <option key={group} value={group}>
                          {group}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Active Donor */}
                <div>
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <Heart className="w-5 h-5 mr-2 text-[#3D4C6D]" /> 
                    Would you like to be a blood donor?
                  </label>
                  <div className="flex items-center space-x-4 p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#2C3E50] transition-all duration-300">
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      formData.activeDonor === 'no' ? 'text-gray-500' : 'text-[#2C3E50]'
                    }`}>
                      No
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ 
                        ...prev, 
                        activeDonor: prev.activeDonor === 'yes' ? 'no' : 'yes' 
                      }))}
                      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:ring-offset-2"
                    >
                      <span className="sr-only">Toggle blood donor status</span>
                      <span
                        className={`${
                          formData.activeDonor === 'yes' ? 'bg-[#2C3E50]' : 'bg-gray-300'
                        } inline-block h-6 w-11 rounded-full transition-colors duration-300`}
                      />
                      <span
                        className={`${
                          formData.activeDonor === 'yes' ? 'translate-x-6' : 'translate-x-1'
                        } absolute inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-sm`}
                      />
                    </button>
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      formData.activeDonor === 'yes' ? 'text-[#2C3E50]' : 'text-gray-500'
                    }`}>
                      Yes
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone & Marital Status Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <Phone className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    <Circle className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Marital Status
                  </label>
                  <div className="relative">
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] appearance-none transition-all duration-300"
                    >
                      <option value="">Select Marital Status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widow</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Enter full address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] transition-all duration-300 resize-vertical"
                />
              </div>

              {/* Volunteer Preferences */}
              <div className="space-y-6">
                <h3 className="flex items-center text-xl font-serif text-[#2C3E50] mb-4">
                  <BookOpen className="w-6 h-6 mr-2 text-[#3D4C6D]" />
                  Volunteer Preferences
                </h3>
                
                {/* Areas of Interest */}
                <div>
                  <label className="text-[#3D4C6D] font-semibold mb-3 block">
                    Areas of Interest:
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interests.map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center space-x-2 cursor-pointer p-3 rounded-lg border border-gray-300 hover:border-[#2C3E50] transition-all duration-300"
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="w-4 h-4 text-[#2C3E50] border-gray-300 rounded focus:ring-[#2C3E50]"
                        />
                        <span className="text-[#3D4C6D]">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability - Multi Select */}
                <div>
                  <label className="text-[#3D4C6D] font-semibold mb-3 block">
                    Availability (Select all that apply):
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {availabilityOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-2 cursor-pointer p-3 rounded-lg border border-gray-300 hover:border-[#2C3E50] transition-all duration-300"
                      >
                        <input
                          type="checkbox"
                          checked={formData.availability.includes(option)}
                          onChange={() => handleAvailabilityChange(option)}
                          className="w-4 h-4 text-[#2C3E50] border-gray-300 rounded focus:ring-[#2C3E50]"
                        />
                        <span className="text-[#3D4C6D]">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Feedback */}
              <div className="space-y-2">
                <label className="text-[#3D4C6D] font-semibold mb-2 block">
                  Feedback & Suggestions
                </label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Share your thoughts, suggestions, or any additional information..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] transition-all duration-300"
                />
              </div>

              {/* Submit */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] text-white px-12 py-4 rounded-full font-serif text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteerForm;