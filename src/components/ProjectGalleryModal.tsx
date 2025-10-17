import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images: string[];
}

const ProjectGalleryModal: React.FC<ProjectGalleryModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
  images,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 bg-white hover:bg-gray-100 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-[#2C3E50]" />
        </button>

        <div className="bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] px-8 py-6">
          <h2 className="text-3xl font-serif font-bold text-white pr-16">
            {projectTitle}
          </h2>
          <p className="text-white/90 mt-2 font-roboto">
            Image {currentIndex + 1} of {images.length}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="relative bg-gray-900">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <img
                src={images[currentIndex]}
                alt={`${projectTitle} - Image ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-7 h-7 text-[#2C3E50]" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-7 h-7 text-[#2C3E50]" />
                  </button>
                </>
              )}
            </div>
          </div>

          {images.length > 1 && (
            <div className="px-8 py-6 bg-white border-t border-gray-200">
              <h3 className="text-sm font-semibold text-[#2C3E50] mb-4 font-roboto">
                All Images
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`flex-shrink-0 w-28 h-28 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      idx === currentIndex
                        ? 'border-[#2C3E50] ring-4 ring-[#2C3E50]/30 scale-105'
                        : 'border-gray-300 hover:border-[#2C3E50] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="px-8 py-5 bg-white border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 font-roboto text-sm">
              Use arrow buttons or click thumbnails to navigate through images
            </p>
            <button
              onClick={onClose}
              className="bg-[#2C3E50] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#3D4C6D] transition font-roboto shadow-md hover:shadow-lg"
            >
              Close Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGalleryModal;
