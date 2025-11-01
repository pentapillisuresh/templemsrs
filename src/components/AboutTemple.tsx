import React, { useEffect, useRef } from "react";
import { Car, Bus, Train, Check } from "lucide-react";
import { Sunrise, Sun, Clock, Moon, Sunset, MoonStar, Bell, Droplets, Sparkles, Flame, Apple, Users, Star, BookOpen, Music, Heart, Lock, DoorOpen, Lamp, Bed, Utensils } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutTemple() {
  const reachSectionRef = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);

  const scrollToReachSection = () => {
    reachSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const nakshatraTrees = [
    { nakshatram: "Ashwini", tree: "Kuchila (Nux Vomica) (ఎజ్జు చెట్టు / Ejju Chettu)", benefit: "Brings energy & healing power" },
    { nakshatram: "Bharani", tree: "Amla (Gooseberry) (ఉసిరి చెట్టు / Usiri Chettu)", benefit: "Longevity & divine strength" },
    { nakshatram: "Krittika", tree: "Fig (Ficus Racemosa) (అత్తి చెట్టు / Atti Chettu)", benefit: "Prosperity & divine blessings" },
    { nakshatram: "Rohini", tree: "Jamun (Black Plum) (నేరేడు చెట్టు / Neredu Chettu)", benefit: "Mental peace & fertility" },
    { nakshatram: "Mrigashira", tree: "Banyan Tree (మర్రి చెట్టు / Marri Chettu)", benefit: "Stability & long life" },
    { nakshatram: "Ardra", tree: "Neem (వేప చెట్టు / Veepa Chettu)", benefit: "Protection from negativity" },
    { nakshatram: "Punarvasu", tree: "Bamboo (వెదురు / Veduru)", benefit: "Growth & harmony" },
    { nakshatram: "Pushya", tree: "Peepal (అశ్వత్థం / Ashwattha or Raavi Chettu)", benefit: "Moksha & wisdom" },
    { nakshatram: "Ashlesha", tree: "Nagakesara (నాగకేసర చెట్టు / Nagakesara Chettu)", benefit: "Protection from evil" },
    { nakshatram: "Magha", tree: "Banyan Tree (మర్రి చెట్టు / Marri Chettu)", benefit: "Royal success" },
    { nakshatram: "Purva Phalguni", tree: "Ashoka (అశోక చెట్టు / Ashoka Chettu)", benefit: "Happiness & love" },
    { nakshatram: "Uttara Phalguni", tree: "Mango (మామిడి చెట్టు / Mamidi Chettu)", benefit: "Prosperity" },
    { nakshatram: "Hasta", tree: "Jasmine (మల్లె చెట్టు / Malle Chettu)", benefit: "Spiritual clarity" },
    { nakshatram: "Chitra", tree: "Bael (Bilva) (బిల్వ చెట్టు / Bilva Chettu)", benefit: "Shiva's grace" },
    { nakshatram: "Swati", tree: "Arjuna (తారామూళి / Taramuli or Maddi Chettu)", benefit: "Balance & health" },
    { nakshatram: "Vishakha", tree: "Amruta (Tinospora) (తిప్ప తీగ / Tippa Teega)", benefit: "Detox & immunity" },
    { nakshatram: "Anuradha", tree: "Jackfruit (పనస చెట్టు / Panasa Chettu)", benefit: "Friendship & devotion" },
    { nakshatram: "Jyeshtha", tree: "Champa (చంపక చెట్టు / Champaka Chettu)", benefit: "Leadership & fame" },
    { nakshatram: "Moola", tree: "Banyan (మర్రి చెట్టు / Marri Chettu)", benefit: "Deep spiritual roots" },
    { nakshatram: "Purvashadha", tree: "Palm (తాటి చెట్టు / Taati Chettu)", benefit: "Courage & endurance" },
    { nakshatram: "Uttarashadha", tree: "Fig (అత్తి చెట్టు / Atti Chettu)", benefit: "Wisdom & patience" },
    { nakshatram: "Shravana", tree: "Vata (వట వృక్షం / Vata Vriksham)", benefit: "Knowledge & listening" },
    { nakshatram: "Dhanishta", tree: "Shami (సమీ చెట్టు / Sami Chettu)", benefit: "Victory & success" },
    { nakshatram: "Shatabhisha", tree: "Kadamba (కదంబ చెట్టు / Kadamba Chettu)", benefit: "Healing power" },
    { nakshatram: "Purvabhadra", tree: "Neem (వేప చెట్టు / Veepa Chettu)", benefit: "Purity & protection" },
    { nakshatram: "Uttarabhadra", tree: "Tamarind (చింత చెట్టు / Chinta Chettu)", benefit: "Stability in life" },
    { nakshatram: "Revathi", tree: "Kadamba (కదంబ చెట్టు / Kadamba Chettu)", benefit: "Peace & happiness" }
  ];


  return (
    <div className="bg-white font-['Roboto'] overflow-x-hidden w-full text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[#2C3E50] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 transform transition-transform duration-[4000ms] hover:scale-110"
          style={{
            backgroundImage: "url('./images/aboutbanner.jpg')",
          }}
        ></div>
        <div className="absolute inset-0"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="text-5xl md:text-6xl font-serif text-white mb-4"
            data-aos="fade-down"
          >
            About Our Temple
          </h1>
          <p
            className="text-xl text-gray-100 max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A sacred place of worship, learning, and community service
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-serif text-[#2C3E50] mb-6">
              MAHA SHREE RUDRA SAMSTHANAM FOUNDATION
            </h2>
            <p className="leading-relaxed mb-6">
              Our temple stands as a beacon of spiritual enlightenment and
              community service. Founded with the vision of preserving ancient
              Vedic traditions while addressing modern social needs, we serve as
              a bridge between the divine and the devotees.
            </p>
            <p className="leading-relaxed mb-8">
              The temple is dedicated to Lord Rudra (Shiva) and Mata Durga, serving thousands
              of devotees who seek spiritual guidance, participate in sacred
              rituals, and contribute to our various social welfare programs including
              Annaprasdam - free food distribution for devotees and needy under Anna Daanam Maha Daanam seva.
            </p>
            <button onClick={scrollToReachSection} className="bg-[#2C3E50] hover:bg-[#3D4C6D] text-white px-8 py-3 rounded-full transition-all shadow-lg">
              How to Reach Temple
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="overflow-hidden rounded-2xl shadow-2xl"
          >
            <video
              src="./images/maha.mp4"
              className="w-full h-[500px] object-cover transform transition-transform duration-[3000ms] hover:scale-110"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

      {/* Temple Schedule */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">
              Temple Daily Schedule
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Daily worship timings and spiritual activities as per ancient traditions
            </p>
          </div>

          {/* Grouped by Time Periods */}
          <div className="space-y-16">
            {/* Early Morning */}
            <div data-aos="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-16 bg-gradient-to-b from-[#2C3E50] to-[#3D4C6D] rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-serif text-[#2C3E50] flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center">
                      <Sunrise className="text-white w-5 h-5" />
                    </div>
                    Early Morning Divine Hours
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">4:00 AM - 7:00 AM</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    time: "4:00 AM – 5:00 AM",
                    activity: "Suprabhata Seva - Awakening deities with Stotras, bells, and Vedic chants",
                    icon: "Bell"
                  },
                  {
                    time: "5:00 AM – 5:30 AM",
                    activity: "Abhishekam (Mangala Snanam) - Holy bath to Lord Shiva & Mata Durga",
                    icon: "Droplets"
                  },
                  {
                    time: "5:30 AM – 6:00 AM",
                    activity: "Alankarana Seva - Decoration of deities with flowers and jewels",
                    icon: "Sparkles"
                  },
                  {
                    time: "6:00 AM – 6:30 AM",
                    activity: "Mangal Archana & Aarati - Chanting of 108 names, offering of lamps",
                    icon: "Flame"
                  },
                  {
                    time: "6:30 AM – 7:00 AM",
                    activity: "Naivedyam - Morning offering of fruits, pongal, and tulasi",
                    icon: "Apple"
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2C3E50]/30 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#2C3E50] to-[#3D4C6D] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[#2C3E50] text-lg mb-2 leading-tight">{item.time}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.activity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Morning */}
            <div data-aos="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-16 bg-gradient-to-b from-[#2C3E50] to-[#3D4C6D] rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-serif text-[#2C3E50] flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center">
                      <Sun className="text-white w-5 h-5" />
                    </div>
                    Morning Sevas
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">7:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    time: "7:00 AM – 8:00 AM",
                    activity: "Sarva Darshanam - Temple open for devotees' darshan and archana",
                    icon: "Users"
                  },
                  {
                    time: "8:00 AM – 9:00 AM",
                    activity: "Ganapathi & Navagraha Archana - For obstacle removal and prosperity",
                    icon: "Star"
                  },
                  {
                    time: "9:00 AM – 10:00 AM",
                    activity: "Rudra Japam / Durga Saptashati Parayanam - Daily chanting for peace",
                    icon: "BookOpen"
                  },
                  {
                    time: "10:00 AM – 11:00 AM",
                    activity: "Special Homam / Agni Karyam - Optional Homa rituals",
                    icon: "Flame"
                  },
                  {
                    time: "11:00 AM – 12:00 PM",
                    activity: "Madhyahna Pooja - Grand worship with sacred chanting and Aarati",
                    icon: "Music"
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2C3E50]/30 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#2C3E50] to-[#3D4C6D] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {idx + 6}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[#2C3E50] text-lg mb-2 leading-tight">{item.time}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.activity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Noon */}
            <div data-aos="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-16 bg-gradient-to-b from-[#2C3E50] to-[#3D4C6D] rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-serif text-[#2C3E50] flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center">
                      <Clock className="text-white w-5 h-5" />
                    </div>
                    Noon Worship
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">12:00 PM - 1:00 PM</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    time: "12:00 PM – 1:00 PM",
                    activity: "Maha Naivedyam & Maha Mangala Aarati - Main food offering and blessings",
                    icon: "Heart"
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2C3E50]/30 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#2C3E50] to-[#3D4C6D] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {idx + 11}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[#2C3E50] text-lg mb-2 leading-tight">{item.time}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.activity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Afternoon */}
            <div data-aos="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-16 bg-gradient-to-b from-[#2C3E50] to-[#3D4C6D] rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-serif text-[#2C3E50] flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center">
                      <Moon className="text-white w-5 h-5" />
                    </div>
                    Afternoon Break
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">1:00 PM - 3:00 PM</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    time: "1:00 PM – 3:00 PM",
                    activity: "Temple Closed - Alaya Shuddhi, deity's rest time",
                    icon: "Lock"
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2C3E50]/30 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#2C3E50] to-[#3D4C6D] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {idx + 12}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[#2C3E50] text-lg mb-2 leading-tight">{item.time}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.activity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Evening */}
            <div data-aos="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-16 bg-gradient-to-b from-[#2C3E50] to-[#3D4C6D] rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-serif text-[#2C3E50] flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center">
                      <Sunset className="text-white w-5 h-5" />
                    </div>
                    Evening Devotional Hours
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">3:00 PM - 7:00 PM</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    time: "3:00 PM – 4:00 PM",
                    activity: "Temple Reopens – Pravesha Seva with bell and mantra chanting",
                    icon: "DoorOpen"
                  },
                  {
                    time: "4:00 PM – 5:00 PM",
                    activity: "Deeparadhana & Devotee Archana - Evening lamp offering with bhajans",
                    icon: "Lamp"
                  },
                  {
                    time: "5:00 PM – 6:00 PM",
                    activity: "Rudrabhishekam / Kumkumarchana - As per day schedule",
                    icon: "Droplets"
                  },
                  {
                    time: "6:00 PM – 7:00 PM",
                    activity: "Sandhya Aarati - Sunset prayer and offering of deepam",
                    icon: "Flame"
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2C3E50]/30 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#2C3E50] to-[#3D4C6D] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {idx + 13}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[#2C3E50] text-lg mb-2 leading-tight">{item.time}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.activity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Night */}
            <div data-aos="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-16 bg-gradient-to-b from-[#2C3E50] to-[#3D4C6D] rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-serif text-[#2C3E50] flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center">
                      <MoonStar className="text-white w-5 h-5" />
                    </div>
                    Night Worship
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">7:00 PM - 9:00 PM</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    time: "7:00 PM – 8:00 PM",
                    activity: "Bhajans / Devotional Music / Pravachanam - Spiritual discourse",
                    icon: "Music"
                  },
                  {
                    time: "8:00 PM – 8:30 PM",
                    activity: "Ekaanta Seva / Sayana Pooja - Night pooja before deity's rest",
                    icon: "Bed"
                  },
                  {
                    time: "8:30 PM – 9:00 PM",
                    activity: "Shayana Aarati & Temple Closure - Final Aarati and closing ceremony",
                    icon: "Lock"
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2C3E50]/30 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#2C3E50] to-[#3D4C6D] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {idx + 17}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[#2C3E50] text-lg mb-2 leading-tight">{item.time}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.activity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2C3E50] to-[#3D4C6D] rounded-full flex items-center justify-center">
                  <Utensils className="text-white w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#2C3E50] text-xl">Daily Annaprasdam</h3>
              </div>
              <p className="text-gray-700 font-semibold mb-2 text-lg">Timing: 12:30 PM – 2:30 PM</p>
              <p className="text-gray-600 leading-relaxed">
                Free food distribution for devotees and needy under Anna Daanam Maha Daanam seva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Special Sevas */}
  <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">
        Yearly and Monthly Rituals
      </h2>
      <p className="text-gray-600 text-lg">
        Annual festivals and special monthly ceremonies
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { day: "Every Year", seva: "Akshaya Tritiya – Simhachalam Yatra", desc: "Annual pilgrimage and special rituals" },
        { day: "Sankatahara Chaturthi", seva: "Ganapathi Pooja, Lakshmi Ganapathi Homam", desc: "Monthly Lord Ganesha worship" },
        { day: "Pournami", seva: "Shri Chakra Vishesha Sahasra Kumkuma Archana, Maha Chandi Yagam, Sri Satyanarayana Swamy Vratham", desc: "Special full moon day rituals and ceremonies" },
        { day: "Amavasya", seva: "Maha Rudra Yagam, Kalabhairava Pooja", desc: "New moon day rituals for peace and protection" },
        { day: "Masa Shivaratri", seva: "Pradosha Kalam – Maha Nandiswara Abhishekam", desc: "Monthly Shiva worship during Pradosha time" },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          data-aos="fade-up"
          data-aos-delay={idx * 100}
        >
          <div className="text-center">
            <div className="bg-[#2C3E50] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl mx-auto mb-4">
              {item.day.substring(0, 3)}
            </div>
            <h3 className="font-bold text-[#2C3E50] text-lg mb-2">{item.day}</h3>
            <p className="font-semibold text-gray-800 mb-2">{item.seva}</p>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Nakshatra Vanam Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">
              Nakshatra Vanam – Sacred Star Garden
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A divine spiritual grove that connects each devotee's birth star (Nakshatram) to a sacred tree associated with it
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center md:items-stretch">
            {/* Left Section */}
            <div data-aos="fade-right" className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-serif text-[#2C3E50] mb-4">
                  Devotee Participation Seva
                </h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  {[
                    "Identify their Nakshatram (Birth Star)",
                    "Pray to their Nakshatra Tree with flowers, water, and mantras",
                    "Plant their Nakshatra Tree within the temple's sacred Vanam area",
                    "Donate Trees or Plants as part of Prakruthi Seva",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="bg-[#3D4C6D] text-white rounded-full p-1 mt-1">
                        <Check size={14} />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-[#2C3E50] mb-3">
                  Nakshatra Vanam Seva Timings
                </h4>
                <p className="text-gray-700 mb-2">📌 Morning: 7:00 AM – 11:00 AM</p>
                <p className="text-gray-700 mb-2">📌 Evening: 4:00 PM – 6:30 PM</p>
                <p className="text-gray-600 text-sm">
                  Open for devotees every day. Special Pooja on Pournami & Nakshatra days.
                </p>
              </div>
            </div>

            {/* Right Section (Image) */}
            <div
              data-aos="fade-left"
              className="flex justify-center items-center overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src="./images/plants.png"
                alt="Nakshatra Vanam"
                className="w-full h-[300px] md:h-[400px] object-cover transform transition-transform duration-[3000ms] hover:scale-110"
              />
            </div>
          </div>


          {/* Nakshatra Trees Table */}
          <div className="mt-16" data-aos="fade-up">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif text-[#2C3E50] mb-4">Nakshatra Trees & Their Spiritual Benefits</h3>
              <p className="text-gray-600 text-lg">Discover the sacred connection between your birth star and its associated tree</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] text-white py-4 px-6">
                <div className="grid grid-cols-12 gap-4 font-semibold text-sm md:text-base">
                  <div className="col-span-12 md:col-span-3 lg:col-span-2">Nakshatram</div>
                  <div className="col-span-12 md:col-span-4 lg:col-span-5">Sacred Tree</div>
                  <div className="col-span-12 md:col-span-5 lg:col-span-5">Spiritual Benefit</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                {nakshatraTrees.map((tree, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 gap-4 py-4 px-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="col-span-12 md:col-span-3 lg:col-span-2">
                      <div className="bg-[#2C3E50] text-white text-sm font-semibold py-2 px-3 rounded-lg text-center">
                        {tree.nakshatram}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 lg:col-span-5">
                      <h4 className="font-bold text-[#2C3E50] text-lg">{tree.tree}</h4>
                    </div>
                    <div className="col-span-12 md:col-span-5 lg:col-span-5">
                      <p className="text-gray-600 text-sm leading-relaxed">{tree.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yearly Pooja Schedule */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">
              Yearly Pooja Schedule
            </h2>
            <p className="text-gray-600 text-lg">
              Annual festivals and special celebrations at our temple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                month: "January",
                festival: "Vaikunta Ekadasi / Bhogi / Sankranthi Sambaralu",
                desc: "Vaikunta Ekadasi, Bhogi – Goda Devi Ranganatha Swamy Kalyanam, Sankranthi Sambaralu",
                img: "./images/jan1.jpg",
              },
              {
                month: "February",
                festival: "Maha Shivaratri (Major Event)",
                desc: "Maha Shivaratri, Bhishma Ekadashi – Vishnu Sahasranama Parayanam, Magha Purnima – Shiva Parvati Kalyanam",
                img: "./images/about31.png",
              },
              {
                month: "March",
                festival: "Ugadi & Vasantha Navaratri",
                desc: "Ugadi – Telugu New Year, Vasantha Navaratri",
                img: "./images/march.jpeg",
              },
              {
                month: "April",
                festival: "Sri Ramayana Parayanam & Sri Seetha Rama Kalyanam",
                desc: "Sri Ramayana Parayanam, Sri Seetha Rama Kalyanam, Maha Samrajya Pattabhishekam, Veda Ashirvachanam, Sundarakanda Parayanam, Hanuman Jayanti, Hanuman Shobha Yatra",
                img: "./images/about34.jpg",
              },
              {
                month: "May",
                festival: "Common Monthly Activities",
                desc: "Regular poojas and weekly temple sevas",
                img: "./images/may.jpg",
              },
              {
                month: "June",
                festival: "Common Monthly Activities",
                desc: "Devotional parayanams and Annadanam seva",
                img: "./images/june.jpg",
              },
              {
                month: "July",
                festival: "Guru Pooja Mahotsavam",
                desc: "Offerings and poojas for Gurus and Acharyas",
                img: "./images/about12.jpg",
              },
              {
                month: "August",
                festival: "Krishna Janmashtami & Varalakshmi Vratham",
                desc: "Shri Krishna Janmashtami, Varalakshmi Devi Vratham, Every Week – Special Poojas, Weekly Ammavari Alankaram",
                img: "./images/august1.jpeg",
              },
              {
                month: "September",
                festival: "Ganapathi Navaratri",
                desc: "Lord Ganesha special poojas and homams",
                img: "./images/sep.jpeg",
              },
              {
                month: "October",
                festival: "Durga Devi Navaratri 2025",
                desc: "9 days of Devi Alankaram, Chandi Parayanam",
                img: "./images/october.jpeg",
              },
              {
                month: "November",
                festival: "Diwali, Karthika Pournami, Ekadashi Rudrabhishekam",
                desc: "Diwali Celebration, Karthika Somavaram, Karthika Pournami Deepotsavam, Jwala Thoranam, Ekadashi Rudrabhishekam, Maha Kumbh Abhishekam, Laksha Bilvarchana",
                img: "./images/nov.jpg",
              },
              {
                month: "December",
                festival: "Subramanya Sashti & Dhanurmasam Mahotsavam",
                desc: "Subramanya Sashti, Valli Devasena Subramanya Swamy Kalyanam, Thiruppavai Pasuram, Dhanurmasam Mahotsavam",
                img: "./images/december.jpeg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.festival}
                    className="h-48 w-full object-cover transform transition-transform duration-[3000ms] hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-2">
                    {item.month}
                  </h3>
                  <h4 className="text-xl font-serif text-[#3D4C6D] mb-2">
                    {item.festival}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* How to Reach */}
      <section ref={reachSectionRef} className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">
              How to Reach Temple
            </h2>
            <p className="text-gray-600 text-lg">
              Find us easily with multiple transportation options
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right">
              {/* By Car */}
              <div className="flex gap-4">
                <div className="bg-[#2C3E50] text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Car size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50] text-lg mb-2">
                    By Car
                  </h3>
                  <p className="text-gray-700">
                    Located on Main Temple Road, easily accessible from city
                    center. Ample parking available.
                  </p>
                </div>
              </div>

              {/* By Bus */}
              <div className="flex gap-4">
                <div className="bg-[#3D4C6D] text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Bus size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50] text-lg mb-2">
                    By Bus
                  </h3>
                  <p className="text-gray-700">
                    Nearest bus stop: Temple Junction (2 min walk). Regular bus
                    services available from all parts of the city.
                  </p>
                </div>
              </div>

              {/* By Train */}
              <div className="flex gap-4">
                <div className="bg-[#2C3E50] text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Train size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50] text-lg mb-2">
                    By Train
                  </h3>
                  <p className="text-gray-700">
                    Nearest railway station: City Central (15 min by auto/taxi).
                    Local trains connect to major stations.
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div data-aos="fade-left" data-aos-delay="200" className="overflow-hidden rounded-xl shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6284448181584!2d78.48319!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                className="rounded-xl shadow-xl border-0 w-full transform transition-transform duration-[4000ms] hover:scale-105"
                loading="lazy"
                allowFullScreen
                title="Temple Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutTemple;