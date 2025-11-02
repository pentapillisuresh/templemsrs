import React, { useState, FormEvent, useEffect } from 'react';
import { Send, X, CheckCircle } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const aboutBanner = './images/contactbanner1.jpg';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState('');

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Network error');

      // Store user's name for personalized message
      setUserName(formData.name);
      setSubmitStatus('success');
      
      // Show popup
      setShowPopup(true);
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', address: '', message: '' });
      
      // Hide popup after 10 seconds
      setTimeout(() => {
        setShowPopup(false);
        setSubmitStatus('idle');
      }, 10000);

    } catch {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSubmitStatus('idle');
  };

  const mapQuery = encodeURIComponent('Maha Shree Rudra Samsthanam Foundation, India');
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`;

  return (
    <div className="w-full min-h-screen font-roboto text-gray-800 bg-gray-50 overflow-hidden">
      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Popup Content */}
            <div className="p-8 text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
              </div>
              
              {/* Personalized Message */}
              <h3 className="text-2xl font-serif text-[#2C3E50] mb-4">
                Thank You, {userName}!
              </h3>
              
              <p className="text-gray-600 mb-2">
                Your message has been successfully submitted to
              </p>
              <p className="text-lg font-semibold text-[#2C3E50] mb-4">
                MSRS Foundation
              </p>
              
              <p className="text-gray-600 mb-6">
                We truly appreciate you reaching out to us. Our team will contact you 
                within 1-2 working days.
              </p>
              
              {/* Countdown Timer */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="text-sm text-gray-500 mb-2">
                  This message will close automatically in
                </div>
                <div className="text-2xl font-mono font-bold text-[#2C3E50]">
                  10 seconds
                </div>
              </div>
              
              {/* Action Button */}
              <button
                onClick={closePopup}
                className="w-full bg-[#2C3E50] hover:bg-[#1a252f] text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Close Message
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative h-[400px] w-full bg-[#2C3E50] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBanner})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 
            className="text-4xl md:text-5xl font-serif mb-4 drop-shadow-lg"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Contact Our Temple
          </h1>
          
          {/* Divider Line */}
          {/* <div 
            className="w-24 h-1 bg-white mb-4 rounded-full"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div> */}
          
          <p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            A sacred place of worship, learning, and community service.
          </p>
        </div>
      </section>

      {/* CONTACT FORM + MAP SECTION */}
      <section className="w-full py-12 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: CONTACT FORM */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="text-2xl font-serif text-[#2C3E50] mb-4">Get in touch</h2>
            <p className="text-sm mb-6 text-[#3D4C6D]">
              Kindly complete the form, and our MSRS Foundation team will get back to you within 1-2 working days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              {/* Email and Phone Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                  placeholder="Street, City, Country (Optional)"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent"
                  placeholder="Tell us how we can help..."
                />
              </div>

              {/* Error Message (only show error, success is now in popup) */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#2C3E50] hover:bg-[#1a252f] text-white px-5 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 border-t pt-4 text-sm text-[#3D4C6D]">
              <p><strong className="text-[#2C3E50]">Email:</strong> info@example.org</p>
              <p className="mt-1"><strong className="text-[#2C3E50]">Phone:</strong> +91 98765 43210</p>
              <p className="mt-1">Visit us: 123 Temple Road, City</p>
            </div>
          </div>

          {/* RIGHT: MAP */}
          <div 
            className="rounded-2xl overflow-hidden shadow-lg bg-white h-full"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <iframe
              title="Our location"
              src={mapSrc}
              className="w-full h-full min-h-[600px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}