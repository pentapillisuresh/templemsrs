import React, { useState, useEffect } from "react";
import AOS from "aos";
import { Banknote, Check, X, Heart } from "lucide-react";
import Confetti from "react-confetti";
import confetti from "canvas-confetti";

const Donation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Infrastructure");
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [windowDimensions, setWindowDimensions] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { name: "General Donation", desc: "Support overall temple activities and maintenance" },
    { name: "Annaprasadam", desc: "Sponsor free meals for devotees and needy" },
    { name: "Educational Support", desc: "Support Vedic education and Sanskrit learning" },
    { name: "Medical Assistance", desc: "Help fund medical camps and healthcare" },
    { name: "Goshala Support", desc: "Support cow protection and care facility" },
    { name: "Infrastructure", desc: "Temple development and infrastructure projects" },
  ];

  const amounts = [500, 1000, 2500, 5000, 10000, 25000];

  const handleDonate = () => {
    const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;
    const nameInput = document.querySelector('input[placeholder="Full Name *"]') as HTMLInputElement;
    const name = nameInput?.value || "Devotee";
    
    setDonorName(name);
    
    // Simulate payment processing
    setTimeout(() => {
      setShowSuccess(true);
      triggerConfetti();
    }, 1000);
  };

  const triggerConfetti = () => {
    // First burst
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2C3E50', '#3D4C6D', '#4CAF50', '#FFD700', '#FF6B6B']
    });

    // Second burst after delay
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#2C3E50', '#3D4C6D', '#4CAF50']
      });
    }, 250);

    // Third burst after delay
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#2C3E50', '#3D4C6D', '#4CAF50']
      });
    }, 400);
  };

  const closeSuccessPopup = () => {
    setShowSuccess(false);
  };

  return (
    <section className="bg-gray-50 font-roboto relative">
      {/* Confetti Background */}
      {showSuccess && (
        <>
          <Confetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.3}
            colors={['#2C3E50', '#3D4C6D', '#4CAF50', '#FFD700', '#FF6B6B']}
          />
        </>
      )}

      {/* Success Popup Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-sm w-full mx-auto transform transition-all duration-500 scale-100"
            data-aos="zoom-in"
          >
            {/* Header */}
            <div className="relative p-6 text-center">
              <button
                onClick={closeSuccessPopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
                Thank You {donorName}!
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Your donation has been successfully processed
              </p>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              <div className="bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] rounded-xl p-4 text-white text-center mb-4">
                <div className="text-2xl font-bold mb-1">
                  ₹{customAmount || selectedAmount}
                </div>
                <div className="text-xs opacity-90">
                  {selectedCategory}
                </div>
              </div>

              <div className="text-center mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Thank you for your generous contribution to{" "}
                  <strong>Maha Shree Rudra Samsthanam Foundation</strong>. 
                  Your support helps us continue our sacred mission.
                </p>
              </div>

              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <Heart className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-blue-800">
                <strong>Tax Benefit:</strong> Donation receipt will be sent to your email within 24 hours.
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={closeSuccessPopup}
                className="w-full bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] text-white py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner */}
      <div
        className="relative h-72 md:h-96 flex items-center justify-center mb-16"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/photo-realistic-investment-icon-design-text-graphics-space-blue-background-ideal-proje_980716-267140.jpg?w=1060')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/80 to-[#3D4C6D]/60"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
            Make a Donation
          </h1>
          <p className="text-lg md:text-xl text-white">
            Your contribution helps maintain our sacred traditions and serve the community
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Donation Form */}
          <div className="lg:col-span-2 bg-white shadow-xl rounded-3xl p-8 md:p-12" data-aos="fade-up">
            {/* Categories */}
            <h3 className="text-lg font-serif text-[#2C3E50] font-semibold mb-4">
              Choose Donation Category
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {categories.map((c, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedCategory(c.name)}
                  className={`relative border rounded-xl p-4 cursor-pointer transition hover:shadow-md ${
                    selectedCategory === c.name ? "border-[#2C3E50] bg-[#E5E7EB]" : "border-gray-200"
                  }`}
                >
                  <h4 className="font-semibold text-[#2C3E50]">{c.name}</h4>
                  <p className="text-sm text-gray-600">{c.desc}</p>
                  {selectedCategory === c.name && (
                    <div className="absolute top-2 right-2 bg-[#2C3E50] text-white rounded-full p-1">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Amount */}
            <h3 className="text-lg font-serif text-[#2C3E50] font-semibold mb-4">Select Amount</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {amounts.map((amt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount("");
                  }}
                  className={`relative px-6 py-2 rounded-lg border font-medium transition ${
                    selectedAmount === amt
                      ? "bg-[#E5E7EB] border-[#2C3E50] text-[#2C3E50]"
                      : "border-gray-300 hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  ₹{amt}
                  {selectedAmount === amt && (
                    <span className="absolute top-1 right-1 bg-[#2C3E50] text-white rounded-full p-1">
                      <Check className="w-4 h-4" />
                    </span>
                  )}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(0);
              }}
              className="w-full border rounded-lg px-4 py-3 text-sm mb-8 focus:ring-2 focus:ring-[#2C3E50]"
            />

            {/* Donor Information */}
            <h3 className="text-lg font-serif text-[#2C3E50] font-semibold mb-4">Donor Information</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input 
                type="text" 
                placeholder="Full Name *" 
                className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50]" 
              />
              <input type="email" placeholder="Email Address *" className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50]" />
              <input type="text" placeholder="Phone Number" className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50]" />
              <input type="text" placeholder="PAN Number" className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50]" />
            </div>
            <textarea
              placeholder="Address"
              rows={3}
              className="w-full border rounded-lg px-4 py-3 text-sm mb-8 focus:ring-2 focus:ring-[#2C3E50]"
            ></textarea>

            {/* Submit */}
            <button
              onClick={handleDonate}
              className="w-full py-4 rounded-lg font-serif text-white text-lg bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] hover:shadow-lg transition transform hover:-translate-y-0.5"
            >
              <Banknote className="inline w-5 h-5 mr-2" />
              Donate ₹{customAmount || selectedAmount}
            </button>
          </div>

          {/* Right Side - Info Boxes */}
          <div className="space-y-6">
            {/* Bank Details */}
            <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4" data-aos="fade-left">
              <div className="bg-[#2C3E50] text-white p-2 rounded-full mt-1">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-[#2C3E50] mb-3">Bank Details</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Account Name:</strong> MAHA SHREE RUDRA SAMSTHANAM FOUNDATION</p>
                  <p><strong>Account Type:</strong> Current Account</p>
                  <p><strong>Account Number:</strong> 925020048085078</p>
                  <p><strong>Bank Name:</strong> Axis Bank</p>
                  <p><strong>Branch:</strong> Gopalapatnam</p>
                  <p><strong>IFSC Code:</strong> UTIB0001411</p>
                  <p><strong>City:</strong> Visakhapatnam</p>
                  <p><strong>State:</strong> Andhra Pradesh</p>
                </div>
              </div>
            </div>

            {/* Tax Benefits */}
            <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4" data-aos="fade-left" data-aos-delay="200">
              <div className="bg-[#2C3E50] text-white p-2 rounded-full mt-1">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-[#2C3E50] mb-3">Tax Benefits</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✔ 80G tax exemption available</li>
                  <li>✔ Official receipt provided</li>
                  <li>✔ 100% transparent usage</li>
                </ul>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4" data-aos="fade-left" data-aos-delay="400">
              <div className="bg-[#2C3E50] text-white p-2 rounded-full mt-1">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-[#2C3E50] mb-3">Need Help?</h4>
                <p className="text-sm text-gray-600">
                  +91 XXXXXX XXXXX <br />
                  donations@msrsfoundation.org <br />
                  Mon-Sat: 9 AM - 6 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;