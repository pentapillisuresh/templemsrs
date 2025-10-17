import React, { useState } from 'react';
import {
  User,
  Mail,
  Briefcase,
  Calendar,
  MapPin,
  Phone,
  Heart,
  Send,
  CheckCircle,
  Droplet,
} from 'lucide-react';

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
    availability: '',
    feedback: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl animate-fade-in-up">
            <CheckCircle className="w-20 h-20 text-[#2C3E50] mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-[#2C3E50] mb-4">
              Thank You!
            </h2>
            <p className="text-lg font-roboto text-[#3D4C6D] mb-6">
              Your volunteer application has been submitted successfully. We'll
              contact you soon!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Submit Another Form
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 to-gray-50">
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
        <h2 className="relative text-4xl md:text-5xl font-serif font-bold text-white text-center px-4">
          Become a <span className="text-white">Volunteer</span>
        </h2>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50]"
                />
              </div>

              {/* Qualification */}
              <div>
                <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                  <Briefcase className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Qualification
                </label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  placeholder="e.g. B.Tech, MBA"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50]"
                />
              </div>

              {/* Occupation */}
              <div>
                <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                  <Briefcase className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Occupation / Profession
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  placeholder="e.g. Software Engineer, Teacher"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50]"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="text-[#2C3E50] font-semibold mb-2 block">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50]"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50]"
                />
              </div>

              {/* Blood Group */}
              <div>
                <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                  <Droplet className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Blood Group
                </label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50]"
                >
                  <option value="">Select Blood Group</option>
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>

              {/* Active Donor */}
              <div>
                <label className="text-[#2C3E50] font-semibold mb-2 block">
                  Would you like to be an active blood donor?
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="activeDonor"
                      value="yes"
                      checked={formData.activeDonor === 'yes'}
                      onChange={handleInputChange}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="activeDonor"
                      value="no"
                      checked={formData.activeDonor === 'no'}
                      onChange={handleInputChange}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                <MapPin className="w-5 h-5 mr-2 text-[#3D4C6D]" /> Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter full address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50]"
              />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50]"
                />
              </div>
              <div>
                <label className="text-[#2C3E50] font-semibold mb-2 block">
                  Marital Status
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50]"
                >
                  <option value="">Select Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>

            {/* Volunteer Preferences */}
            <div className="space-y-4">
              <h3 className="flex items-center text-xl font-serif text-[#2C3E50] mb-2">
                <Heart className="w-6 h-6 mr-2 text-[#3D4C6D]" />
                Volunteer Preferences
              </h3>
              <div>
                <label className="text-[#3D4C6D] font-semibold mb-3 block">
                  Areas of Interest:
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center space-x-2 cursor-pointer text-[#2C3E50]"
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="w-4 h-4 text-[#2C3E50] border-gray-300 rounded focus:ring-[#2C3E50]"
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[#3D4C6D] font-semibold mb-3 block">
                  Availability:
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {availabilityOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 cursor-pointer text-[#2C3E50]"
                    >
                      <input
                        type="radio"
                        name="availability"
                        value={option}
                        checked={formData.availability === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#2C3E50] border-gray-300 focus:ring-[#2C3E50]"
                      />
                      <span>{option}</span>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50]"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
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
  );
};

export default VolunteerForm;
