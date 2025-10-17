import React from "react";
import { Calendar } from "lucide-react";

const events = [
  {
    date: "13",
    month: "Jun",
    title: "Honoring Yogi Bhajan's Birthday 2020",
    time: "8:00 am",
    image:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=400&q=80", // keep same
  },
  {
    date: "06",
    month: "May",
    title: "Gong Yoga Relaxation and Meditation",
    time: "8:00 am",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80", // new image
  },
  {
    date: "19",
    month: "May",
    title: "September New Moon Gong",
    time: "8:00 am",
    image:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=400&q=80", // new image
  },
  {
    date: "09",
    month: "May",
    title: "Kundalini Yoga to Melt Unhealthy Habits",
    time: "8:00 am",
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=400&q=80", // keep same
  },
];

const EventSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.2em] text-blue-400 text-xs font-roboto font-medium mb-3">
            EVENTS
          </p>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight font-serif">
            Upcoming Events And<br />Invitations
          </h2>
        </div>

        {/* Event Cards */}
        <div className="space-y-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="flex items-center">
                {/* Image Section with Date Circle */}
                <div className="relative flex-shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-32 h-24 object-cover rounded-l-2xl"
                  />
                  {/* Date Circle */}
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 flex flex-col items-center justify-center border border-gray-100">
                    <span className="text-lg font-bold text-gray-800 leading-none font-roboto">
                      {event.date}
                    </span>
                    <span className="text-[10px] uppercase text-gray-500 font-medium font-roboto">
                      {event.month}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1 px-8 py-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight font-serif">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-blue-400 font-roboto">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                </div>

                {/* Info Button */}
                <div className="px-6">
                  <button className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm font-roboto">
                    Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Events Button */}
        <div className="text-center mt-12">
          <button className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm font-roboto">
            More Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
