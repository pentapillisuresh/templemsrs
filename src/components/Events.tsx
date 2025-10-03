import React from 'react';
import { Calendar, MapPin, Clock, Users, Star } from 'lucide-react';

const eventsBanner = './images/eventsbanner.jpeg'; // hero banner image

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      title: 'Diwali Festival Celebration',
      date: '2024-11-12',
      time: '6:00 PM - 10:00 PM',
      location: 'Main Temple Hall',
      description: 'Grand Diwali celebrations with special pujas, cultural programs, and prasadam distribution',
      attendees: 500,
      featured: true,
      image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Navaratri Dance Festival',
      date: '2024-10-15',
      time: '7:00 PM - 11:00 PM',
      location: 'Temple Courtyard',
      description: 'Traditional dance performances celebrating the nine nights of Navaratri',
      attendees: 300,
      featured: false,
      image: 'https://images.pexels.com/photos/3992943/pexels-photo-3992943.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Monthly Community Service',
      date: '2024-10-28',
      time: '9:00 AM - 2:00 PM',
      location: 'Temple Premises',
      description: 'Food distribution and medical camp for underprivileged communities',
      attendees: 150,
      featured: false,
      image: 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Sanskrit Learning Workshop',
      date: '2024-11-05',
      time: '10:00 AM - 4:00 PM',
      location: 'Education Hall',
      description: 'Beginner-friendly Sanskrit workshop focusing on prayers and basic conversation',
      attendees: 75,
      featured: false,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Yoga and Meditation Retreat',
      date: '2024-11-20',
      time: '6:00 AM - 6:00 PM',
      location: 'Temple Gardens',
      description: 'Full day retreat combining yoga, meditation, and spiritual discourse',
      attendees: 100,
      featured: true,
      image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Annual Foundation Day',
      date: '2024-12-01',
      time: '5:00 AM - 10:00 PM',
      location: 'Entire Temple Complex',
      description: 'Celebrating our temple\'s anniversary with special ceremonies and cultural events',
      attendees: 1000,
      featured: true,
      image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full bg-[#2C3E50] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${eventsBanner})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Upcoming Events & Invitations
          </h1>
          <p className="text-lg md:text-xl font-roboto max-w-2xl">
            Celebrate festivals, workshops, and community service with us
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Events */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-serif text-[#2C3E50] mb-6 flex items-center">
              <Star className="w-6 h-6 mr-2 text-[#2C3E50]" /> Featured Events
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingEvents.filter(e => e.featured).map((event, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                  <div className="h-48 relative overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-[#2C3E50] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold font-serif text-[#2C3E50] mb-3">{event.title}</h4>
                    <div className="space-y-2 mb-4 font-roboto text-[#2C3E50] text-sm">
                      <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {formatDate(event.date)}</div>
                      <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {event.time}</div>
                      <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {event.location}</div>
                      <div className="flex items-center"><Users className="w-4 h-4 mr-2" /> {event.attendees} people</div>
                    </div>
                    <p className="text-[#2C3E50] text-sm mb-4 leading-relaxed">{event.description}</p>
                    <button className="w-full bg-[#2C3E50] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Events */}
          <div>
            <h3 className="text-2xl font-bold font-serif text-[#2C3E50] mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-[#2C3E50]" /> All Upcoming Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold font-serif text-[#2C3E50] flex-1">{event.title}</h4>
                    {event.featured && <Star className="w-5 h-5 text-[#2C3E50] ml-2" />}
                  </div>
                  <div className="space-y-2 mb-4 font-roboto text-[#2C3E50] text-sm">
                    <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {formatDate(event.date)}</div>
                    <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {event.time}</div>
                    <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {event.location}</div>
                  </div>
                  <p className="text-[#2C3E50] text-sm mb-4 leading-relaxed">{event.description.length > 100 ? `${event.description.substring(0,100)}...` : event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#2C3E50]"><Users className="w-4 h-4 mr-1" /> {event.attendees}</div>
                    <button className="bg-[#2C3E50] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1f2d3c] transition">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-[#2C3E50] p-8 md:p-12 rounded-3xl text-white text-center">
            <h3 className="text-3xl font-bold font-serif mb-4">Stay Connected</h3>
            <p className="text-lg md:text-xl font-roboto leading-relaxed max-w-3xl mx-auto mb-6">
              Don't miss our upcoming events! Subscribe to our newsletter for updates on festivals, workshops, and community service.
            </p>
            <button className="bg-white text-[#2C3E50] px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
