import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryBanner = './images/gallerybanner1.jpg'; // Banner image (replace with actual path)

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Festival Celebrations',
      category: 'Events'
    },
    {
      src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Temple Architecture',
      category: 'Architecture'
    },
    {
      src: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Meditation Sessions',
      category: 'Activities'
    },
    {
      src: 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Service',
      category: 'Service'
    },
    {
      src: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Diwali Preparations',
      category: 'Events'
    },
    {
      src: 'https://images.pexels.com/photos/3992943/pexels-photo-3992943.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cultural Performances',
      category: 'Culture'
    },
    {
      src: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sacred Texts',
      category: 'Education'
    },
    {
      src: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Temple Priests',
      category: 'People'
    },
    {
      src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Devotee Gathering',
      category: 'Community'
    }
  ];

  const categories = ['All', 'Events', 'Architecture', 'Activities', 'Service', 'Culture', 'Education', 'People', 'Community'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] w-full bg-[#2C3E50] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${galleryBanner})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Temple Gallery</h1>
          <p className="text-lg md:text-xl font-roboto max-w-2xl">
            Explore sacred spaces, vibrant festivals, and spiritual activities
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#2C3E50] text-white shadow-lg'
                    : 'bg-white text-[#2C3E50] border border-[#2C3E50]/30 hover:bg-[#2C3E50]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-serif mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200 font-roboto">{image.category}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl w-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-400 z-10"
                >
                  <X className="w-8 h-8" />
                </button>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-400 z-10"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-400 z-10"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />

                <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                  <h3 className="text-xl font-serif mb-1">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-300 font-roboto">
                    {filteredImages[selectedImage].category}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 bg-[#2C3E50] p-8 md:p-12 rounded-3xl text-white text-center">
            <h3 className="text-3xl font-bold font-serif mb-4">Share Your Moments</h3>
            <p className="text-lg md:text-xl font-roboto leading-relaxed max-w-3xl mx-auto mb-6">
              Have photos from our temple events? Share your spiritual moments with our community.
            </p>
            {/* <button className="bg-white text-[#2C3E50] px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Submit Your Photos
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
