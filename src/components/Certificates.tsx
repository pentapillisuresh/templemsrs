import { Award, Calendar, Shield } from 'lucide-react';
import { useState } from 'react';

const certifications = [
  {
    id: 1,
    title: 'Heritage Temple Preservation',
    issuer: 'Archaeological Survey of India',
    date: 'March 2024',
    image: 'https://img.freepik.com/premium-vector/certificate-diploma-template-with-guilloche-style_462925-545.jpg?w=1060',
    credentialId: 'HTP-ASI-2024-7842'
  },
  {
    id: 2,
    title: 'Sacred Architecture',
    issuer: 'International Council on Monuments',
    date: 'January 2024',
    image: 'https://img.freepik.com/premium-vector/certificate-diploma-template-with-guilloche-style_462925-545.jpg?w=1060',
    credentialId: 'SAA-ICOM-2024-3421'
  },
  {
    id: 3,
    title: 'Religious Site Management',
    issuer: 'World Heritage Foundation',
    date: 'December 2023',
    image: 'https://img.freepik.com/premium-vector/certificate-diploma-template-with-guilloche-style_462925-545.jpg?w=1060',
    credentialId: 'RSM-WHF-2023-9876'
  },
  {
    id: 4,
    title: 'Ancient Sculpture Conservation',
    issuer: 'National Museum Institute',
    date: 'October 2023',
    image: 'https://img.freepik.com/premium-vector/certificate-diploma-template-with-guilloche-style_462925-545.jpg?w=1060',
    credentialId: 'ASC-NMI-2023-5543'
  },
  {
    id: 5,
    title: 'Temple Administration',
    issuer: 'Endowment Department',
    date: 'August 2023',
    image: 'https://img.freepik.com/premium-vector/certificate-diploma-template-with-guilloche-style_462925-545.jpg?w=1060',
    credentialId: 'TAF-ED-2023-1129'
  },
  {
    id: 6,
    title: 'Ritual & Ceremony Specialist',
    issuer: 'Sanskrit University Board',
    date: 'June 2023',
    image: 'https://img.freepik.com/premium-vector/certificate-diploma-template-with-guilloche-style_462925-545.jpg?w=1060',
    credentialId: 'RCS-SUB-2023-8821'
  }
];

function Certificates() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      >
        <div className="absolute inset-0 bg-[#2C3E50]/85"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            {/* <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
              <Award className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div> */}
          </div>
          <h1 className="text-6xl font-serif text-white mb-4 tracking-tight">
            Professional Certifications
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-white/90 leading-relaxed">
            Officially Recognized and Certified by the Government of India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2C3E50] text-white rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl font-serif text-[#2C3E50] mb-2">Our Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognized by leading institutions for excellence in temple preservation and management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === cert.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50] via-[#2C3E50]/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-white rounded-full shadow-lg">
                    <Award className="w-5 h-5 text-[#2C3E50]" />
                  </div>
                </div>
              </div>

              <div className="p-6 border-t-4 border-[#2C3E50]">
                <h3 className="text-xl font-serif text-[#2C3E50] mb-3 leading-tight group-hover:text-[#1a252f] transition-colors">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-700 font-medium">{cert.issuer}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-1">Credential ID</p>
                  <p className="text-sm text-[#2C3E50] font-mono font-medium">{cert.credentialId}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#2C3E50] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 text-sm">
            All certifications are verified and recognized by respective authorities
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
