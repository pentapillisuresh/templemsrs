import React, { useState } from 'react';
import { User, Mail, Briefcase, Calendar, MapPin, Phone, Heart, Send, CheckCircle } from 'lucide-react';

const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    qualification: '',
    gender: '',
    dob: '',
    address: '',
    phone: '',
    maritalStatus: '',
    interests: [],
    availability: '',
    feedback: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const interests = [
    'Temple Service',
    'Social Service', 
    'Educational Support',
    'Events',
    'Medical Camps',
    'Others'
  ];

  const availabilityOptions = [
    'Weekdays',
    'Weekends', 
    'Flexible',
    'Specific Time'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl animate-fade-in-up">
            <CheckCircle className="w-20 h-20 text-[#2C3E50] mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-[#2C3E50] mb-4">Thank You!</h2>
            <p className="text-lg font-roboto text-[#3D4C6D] mb-6">
              Your volunteer application has been submitted successfully. We'll contact you soon!
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
      {/* Banner Section */}
      <div
        className="relative h-72 md:h-96 flex items-center justify-center mb-12"
        style={{
          backgroundImage: "url('./images/volunteer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/80 to-[#3D4C6D]/60"></div>
        <h2 className="relative text-4xl md:text-5xl font-serif font-bold text-white text-center px-4">
          Become a <span className="text-white">Volunteer</span>
        </h2>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-8 font-roboto">
            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Name *", icon: User, type: "text", name: "name", required: true },
                { label: "Email ID *", icon: Mail, type: "email", name: "email", required: true },
                { label: "Qualification/Occupation", icon: Briefcase, type: "text", name: "qualification" },
                { label: "Gender", icon: null, type: "select", name: "gender", options: ["Male","Female","Other"] },
                { label: "Date of Birth", icon: Calendar, type: "date", name: "dob" },
                { label: "Phone Number", icon: Phone, type: "tel", name: "phone" },
              ].map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                    {field.icon && <field.icon className="w-5 h-5 mr-2 text-[#3D4C6D]" />}
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select {field.label}</option>
                      {field.options?.map((opt) => <option key={opt} value={opt.toLowerCase()}>{opt}</option>)}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData] as string}
                      onChange={handleInputChange}
                      required={field.required || false}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-200"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Address & Marital Status */}
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-[#2C3E50] font-semibold mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-[#3D4C6D]" />
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#2C3E50] font-semibold mb-2 block">Marital Status</label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-200"
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

              {/* Interests */}
              <div>
                <label className="text-[#3D4C6D] font-semibold mb-3 block">Areas of Interest:</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest) => (
                    <label key={interest} className="flex items-center space-x-2 cursor-pointer text-[#2C3E50]">
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

              {/* Availability */}
              <div>
                <label className="text-[#3D4C6D] font-semibold mb-3 block">Availability:</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {availabilityOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer text-[#2C3E50]">
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
              <label className="text-[#3D4C6D] font-semibold mb-2 block">Feedback & Suggestions</label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                rows={4}
                placeholder="Share your thoughts, suggestions, or any additional information..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent transition-all duration-200"
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
