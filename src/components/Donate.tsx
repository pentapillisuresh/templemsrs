import React, { useState, useEffect } from "react";
import AOS from "aos";
import { Banknote, Check } from "lucide-react";

const Donation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Infrastructure");
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
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
    alert(`Donated ₹${finalAmount} towards ${selectedCategory}`);
  };

  return (
    <section className="bg-gray-50 font-roboto">
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
              <input type="text" placeholder="Full Name *" className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50]" />
              <input type="email" placeholder="Email Address *" className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50]" />
              <input type="text" placeholder="Phone Number" className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50]" />
              <input type="text" placeholder="PAN Number (for 80G receipt)" className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#2C3E50]" />
            </div>
            <textarea
              placeholder="Address"
              rows={3}
              className="w-full border rounded-lg px-4 py-3 text-sm mb-8 focus:ring-2 focus:ring-[#2C3E50]"
            ></textarea>

            {/* Submit */}
            <button
              onClick={handleDonate}
              className="w-full py-4 rounded-lg font-serif text-white text-lg bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] hover:shadow-lg transition"
            >
              <Banknote className="inline w-5 h-5 mr-2" />
              Donate ₹{customAmount || selectedAmount}
            </button>
          </div>

          {/* Right Side - Info Boxes */}
          {/* Right Side - Info Boxes */}
<div className="space-y-6">
  {/* Bank Details */}
  <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4" data-aos="fade-left">
    <div className="bg-[#2C3E50] text-white p-2 rounded-full mt-1">
      <Check className="w-5 h-5" />
    </div>
    <div>
      <h4 className="font-serif font-semibold text-[#2C3E50] mb-3">Bank Details</h4>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Domestic Donation</strong><br />
        Bank Name: State Bank of India <br />
        Branch: Temple Road Branch <br />
        Account: 1234567890123 <br />
        IFSC: SBIN0001234
      </p>
      <p className="text-sm text-gray-600">
        <strong>International Donation</strong><br />
        Bank Name: State Bank of India <br />
        Branch: Temple Road Branch <br />
        Account: 1234567890123 <br />
        IFSC: SBIN0001234 <br />
        SWIFT: SBININBB123 <br />
        AD Code: 1234567890
      </p>
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
