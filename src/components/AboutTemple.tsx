import React, { useEffect } from "react";
import { Car, Bus, Train, Check } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutTemple() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="bg-white font-['Roboto'] overflow-x-hidden w-full text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[#2C3E50] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('./images/aboutbanner.jpg')",
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
              MAHA SHREE RUDRA SAMSTHANAM
            </h2>
            <p className="leading-relaxed mb-6">
              Our temple stands as a beacon of spiritual enlightenment and
              community service. Founded with the vision of preserving ancient
              Vedic traditions while addressing modern social needs, we serve as
              a bridge between the divine and the devotees.
            </p>
            <p className="leading-relaxed mb-8">
              The temple is dedicated to Lord Rudra (Shiva) and serves thousands
              of devotees who seek spiritual guidance, participate in sacred
              rituals, and contribute to our various social welfare programs.
            </p>
            <button className="bg-[#2C3E50] hover:bg-[#3D4C6D] text-white px-8 py-3 rounded-full transition-all shadow-lg">
              How to Reach Temple
            </button>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <img
              src="./images/about2.jpg"
              alt="Temple Deity"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Temple Schedule */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">
              Temple Schedule
            </h2>
            <p className="text-gray-600 text-lg">
              Daily worship timings and spiritual activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                time: "5:00 AM - 6:00 AM",
                activity: "Morning Prayers & Abhishekam",
              },
              { time: "6:30 AM - 8:00 AM", activity: "Suprabhatam & Darshan" },
              {
                time: "10:00 AM - 12:00 PM",
                activity: "Special Poojas & Archana",
              },
              { time: "12:00 PM - 1:00 PM", activity: "Afternoon Aarti" },
              { time: "6:00 PM - 8:00 PM", activity: "Evening Prayers & Bhajans" },
              { time: "8:30 PM - 9:00 PM", activity: "Night Aarti & Prasadam" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#2C3E50] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-bold text-[#2C3E50] mb-1">{item.time}</p>
                    <p className="text-gray-600 text-sm">{item.activity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Activities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">
              Temple Activities
            </h2>
            <p className="text-gray-600 text-lg">
              Diverse spiritual and community programs throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Daily Rituals",
                description:
                  "Traditional poojas, abhishekam, and spiritual ceremonies",
                img: "https://img.freepik.com/premium-photo/cropped-image-person-pouring-oil-diya_1048944-6665773.jpg?w=1060",
              },
              {
                title: "Festival Celebrations",
                description:
                  "Grand celebrations of Hindu festivals and special occasions",
                img: "./images/about11.jpg",
              },
              {
                title: "Spiritual Discourses",
                description:
                  "Learn spiritual truths and religious education programs",
                             img: "./images/about12.jpg",
              },
              {
                title: "Community Service",
                description: "Social welfare programs and charitable initiatives",
                                img: "./images/about13.jpg",

              },
            ].map((activity, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="relative h-64">
                  <img
                    src={activity.img}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#2C3E50] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <h3 className="text-2xl font-serif text-[#2C3E50]">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="./images/temple11.jpg"
                alt="Temple Architecture"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-4xl font-serif text-[#2C3E50] mb-6">
                Temple Architecture
              </h2>
              <p className="leading-relaxed mb-6">
                Our temple showcases traditional South Indian architectural
                style with intricate stone carvings, majestic gopurams, and
                sacred geometry that reflects ancient Vastu principles.
              </p>
              <p className="leading-relaxed mb-6">
                Every element of the temple design has deep spiritual
                significance, creating a harmonious space for worship and
                meditation.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Traditional Dravidian architecture",
                  "Intricate stone and wood carvings",
                  "Sacred geometry and Vastu compliance",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="bg-[#2C3E50] text-white rounded-full p-1 mt-1">
                      <Check size={14} />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">
              Important Dates
            </h2>
            <p className="text-gray-600 text-lg">
              Annual festivals and special celebrations at our temple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                festival: "Maha Shivaratri",
                img: "./images/about31.png",
                desc: "Grand celebration with abhishekam and chanting.",
              },
              {
                festival: "Diwali",
                img: "./images/about32.jpg",
                desc: "Festival of Lights with special prayers.",
              },
              {
                festival: "Navaratri",
                                img: "./images/about33.jpg",
                desc: "Nine nights of devotion and divine blessings.",
              },
              {
                festival: "Ram Navami",
                                               img: "./images/about34.jpg",
                desc: "Commemorating the birth of Lord Rama.",
              },
              {
                festival: "Krishna Janmashtami",
                img: "./images/about35.jpg",
                desc: "Celebration of Lord Krishna’s birth.",
              },
              {
                festival: "Ganesh Chaturthi",
                img: "https://img.freepik.com/premium-photo/man-woman-holding-statue-elephant_997657-47079.jpg?w=1060",
                desc: "Installation and immersion of Lord Ganesha idols.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <img
                  src={item.img}
                  alt={item.festival}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-serif text-[#2C3E50] mb-2">
                    {item.festival}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="bg-gray-50 py-20">
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
                <div className="bg-[#2C3E50] text-white w-12 h-12 rounded-full flex items-center justify-center" style={{borderRadius:"50%"}}>
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
                <div className="bg-[#3D4C6D] text-white w-12 h-12 rounded-full flex items-center justify-center" style={{borderRadius:"50%"}}>
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
                <div className="bg-[#2C3E50] text-white w-12 h-12 rounded-full flex items-center justify-center" style={{borderRadius:"50%"}}>
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
            <div data-aos="fade-left" data-aos-delay="200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6284448181584!2d78.48319!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                className="rounded-xl shadow-xl border-0 w-full"
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
