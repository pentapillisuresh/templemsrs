import React, { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';


const aboutBanner = './images/contactbanner1.jpg'; // hero banner at top


interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  // Added address field
  address: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    // Initialized address field
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // NOTE: Ensure your backend '/api/contact' is set up to receive the 'address' field.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Network error');

      setSubmitStatus('success');
      // Reset form including the new address field
      setFormData({ name: '', email: '', phone: '', address: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mapQuery = encodeURIComponent('Maha Shree Rudra Samsthanam Foundation, India');
  // NOTE: Corrected the mapSrc to a valid Google Maps embed URL format
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`;

  return (
    <div className="w-full min-h-screen font-roboto text-gray-800 bg-gray-50 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[400px] w-full bg-[#2C3E50] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBanner})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Our Temple</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            A sacred place of worship, learning, and community service.
          </p>
        </div>
      </section>

      {/* CONTACT FORM + MAP SECTION */}
      <section className="w-full py-12 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-serif text-[#2C3E50] mb-4">Get in touch</h2>
            <p className="text-sm mb-6 text-[#3D4C6D]">
              Fill the form and we'll respond within 1–2 days.
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

              {/* Address Field - NEWLY ADDED */}
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

              {/* Submission Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  ✅ Thank you — we'll get back to you soon.
                </div>
              )}
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
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white h-full">
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