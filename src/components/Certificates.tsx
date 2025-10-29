import { Award, Calendar, Shield, Image as ImageIcon, X } from 'lucide-react';
import { useState } from 'react';

const certifications = [
  {
    id: 5,
    title: 'Temple Administration',
    issuer: 'Promotion of Industry and Internal trade Department',
    date: 'October 2025',
    image: './images/ce5.jpg',
    credentialId: 'TAP-ED-2030-1129'
  },
  {
    id: 1,
    title: 'Pan card',
    issuer: 'Income tax department of India',
    date: 'March 2024',
    image: './images/ce1.jpg',
    credentialId: 'NTP-2421-2041-7943'
  },
  {
    id: 2,
    title: 'TAN Card',
    issuer: 'Income tax department of India',
    date: 'January 2024',
    image: './images/ce2.jpg',
    credentialId: 'SAA-ECRN-3041-3421'
  },
  {
    id: 3,
    title: 'Religious Site Management',
    issuer: 'Ministry of Corporate Affairs',
    date: 'December 2023',
    image: './images/ce3.jpg',
    credentialId: 'KBN-MH-2019-4978'
  },
  {
    id: 4,
    title: 'Ancient Sculpture Conservation',
    issuer: 'Ministry of Corporate Affairs',
    date: 'October 2023',
    image: './images/ce4.jpg',
    credentialId: 'ACC-NRI-2030-5443'
  },
  {
    id: 6,
    title: 'Ritual & Ceremony Specialist',
    issuer: 'Ministry of Corporate Affairs',
    date: 'June 2023',
    image: './images/ce6.jpeg',
    credentialId: 'KCS-SRB-2030-4821'
  },
  {
    id: 7,
    title: 'Ritual & Ceremony Specialist',
    issuer: 'Ministry of Corporate Affairs',
    date: 'June 2023',
    image: './images/ce7.jpeg',
    credentialId: 'KCS-SRB-2030-4821'
  },
  {
    id: 8,
    title: 'Darpan Certificate',
    issuer: 'Niti Aayog, Government of India',
    date: 'September 2025',
    image: './images/ce8.jpeg',
    credentialId: 'KCS-SRB-2030-4821'
  },
];

function Certificates() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageError = (id: number) => {
    setImageErrors(prev => new Set(prev).add(id));
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url(./images/delhi.jpg)',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-[#2C3E50]/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 tracking-tight drop-shadow-lg">
            Professional Certifications
          </h1>
          <div className="w-32 h-1.5 bg-[#2C3E50] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-light drop-shadow-md">
            Officially Recognized and Certified by the Government of India
          </p>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-white rounded-full text-sm font-medium mb-6 shadow-lg">
            <Shield className="w-5 h-5" />
            <span>Verified & Accredited Credentials</span>
          </div>
          <h2 className="text-4xl font-serif text-[#2C3E50] mb-4 font-bold">Our Certifications</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Recognized by leading national and international institutions for excellence in temple preservation, 
            heritage management, and cultural conservation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            const hasError = imageErrors.has(cert.id);
            
            return (
              <div
                key={cert.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-gray-100"
                onMouseEnter={() => setHoveredId(cert.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Section */}
                <div 
                  className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
                  onClick={() => !hasError && handleImageClick(cert.image)}
                >
                  {hasError ? (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-6">
                      <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
                      <p className="text-center text-sm font-medium">Certificate Image</p>
                      <p className="text-center text-xs mt-1">Not Available</p>
                    </div>
                  ) : (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      onError={() => handleImageError(cert.id)}
                      className={`w-full h-full object-contain transition-transform duration-700 ${
                        hoveredId === cert.id ? 'scale-105' : 'scale-100'
                      }`}
                    />
                  )}
                  
                  {/* Award Badge */}
                  <div className="absolute top-4 right-4 transform transition-transform duration-300 group-hover:scale-110">
                    <div className="p-2 bg-white rounded-full shadow-lg border border-gray-200">
                      <Award className="w-5 h-5 text-[#2C3E50]" />
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/5"></div>
                  
                  {/* Click to view text */}
                  {!hasError && (
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#2C3E50] text-white px-3 py-1 rounded-full text-xs font-medium">
                        Click to view
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-7 border-t-4 border-[#2C3E50] bg-white">
                  <h3 className="text-xl font-serif text-[#2C3E50] mb-4 leading-tight group-hover:text-[#1a252f] transition-colors font-bold">
                    {cert.title}
                  </h3>

                  <div className="space-y-3 mb-5">
                    <p className="text-sm text-gray-700 font-semibold bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                      <Calendar className="w-4 h-4 mr-3 text-[#2C3E50]" />
                      <span className="font-medium">{cert.date}</span>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">Certificate ID</p>
                    <p className="text-sm text-[#2C3E50] font-mono font-bold bg-gray-50 px-3 py-2 rounded border border-gray-200">
                      {cert.credentialId}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Banner */}
      <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-white" />
            <span className="text-white text-lg font-semibold">Verified Credentials</span>
          </div>
          <p className="text-white/90 text-base max-w-2xl mx-auto leading-relaxed">
            All certifications are officially verified and recognized by their respective governmental 
            and institutional authorities. Each credential undergoes rigorous validation processes.
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Certificate Full View"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;