import React from "react";
import { Calendar } from "lucide-react";

const events = [
  {
    date: "13",
    month: "Jun",
    title: "Honoring Yogi Bhajan's Birthday 2020",
    time: "8:00 am",
    image:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    date: "06",
    month: "May",
    title: "Gong Yoga Relaxation and Meditation",
    time: "8:00 am",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80",
  },
  {
    date: "19",
    month: "May",
    title: "September New Moon Gong",
    time: "8:00 am",
    image:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=400&q=80",
  },
  {
    date: "09",
    month: "May",
    title: "Kundalini Yoga to Melt Unhealthy Habits",
    time: "8:00 am",
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=400&q=80",
  },
];

const EventSection = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-12">
          <p className="uppercase tracking-[0.2em] text-blue-400 text-xs font-roboto font-medium mb-3">
            EVENTS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight font-serif">
            Upcoming Events And<br className="hidden sm:block" />Invitations
          </h2>
        </div>

        {/* Event Cards */}
        <div className="space-y-4 md:space-y-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
                {/* Image Section with Date Circle */}
                <div className="relative flex-shrink-0">
                  <div className="flex sm:block relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-32 sm:w-32 sm:h-24 object-cover rounded-t-xl sm:rounded-l-2xl sm:rounded-tr-none group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Date Circle - Mobile */}
                    <div className="sm:hidden absolute top-3 right-3 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center border border-gray-100">
                      <div className="text-center leading-none">
                        <span className="block text-lg font-bold text-gray-800 font-roboto -mb-0.5">
                          {event.date}
                        </span>
                        <span className="block text-[10px] uppercase text-gray-500 font-medium font-roboto tracking-wide mt-0.5">
                          {event.month}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Date Circle - Desktop */}
                  <div className="hidden sm:block absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center border border-gray-100 z-10">
                    <div className="text-center leading-none">
                      <span className="block text-lg font-bold text-gray-800 font-roboto -mb-0.5">
                        {event.date}
                      </span>
                      <span className="block text-[10px] uppercase text-gray-500 font-medium font-roboto tracking-wide mt-0.5">
                        {event.month}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 leading-tight font-serif group-hover:text-gray-900 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-blue-500 font-roboto">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                </div>

                {/* Info Button */}
                <div className="px-4 sm:px-6 py-3 sm:py-0 border-t sm:border-t-0 border-gray-100 sm:border-none">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 shadow-sm font-roboto hover:shadow-md transform hover:-translate-y-0.5">
                    Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Events Button */}
        <div className="text-center mt-10 md:mt-12">
          <button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-200 shadow-sm font-roboto hover:shadow-md transform hover:-translate-y-0.5">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventSection;