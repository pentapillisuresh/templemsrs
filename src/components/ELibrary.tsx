import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Download, Eye } from "lucide-react";
import { useNavigate } from 'react-router-dom';


const ELibrary: React.FC = () => {
    const navigate = useNavigate();
  
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Books");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const categories = [
    "All Books",
    "Spiritual Texts",
    "Social Development",
    "Economics & Poverty",
    "Philosophy",
    "Education",
  ];

  const books = [
    {
      title: "Shiva Puranam",
      author: "by Ancient Sages",
      details: "Sacred text describing the glory and stories of Lord Shiva",
      pages: "500 pages",
      lang: "Sanskrit/English",
      category: "Spiritual Texts",
      image: "./images/book1.jpg",
    },
    {
      title: "Vishnu Sahasranamam",
      author: "by Sage Vyasa",
      details: "The thousand names of Lord Vishnu with meanings and significance",
      pages: "200 pages",
      lang: "Sanskrit/English",
      category: "Spiritual Texts",
      image: "./images/book2.jpg",
    },
    {
      title: "Lalitha Sahasranamam",
      author: "by Ancient Rishis",
      details: "Sacred hymn praising the Divine Mother with thousand names",
      pages: "150 pages",
      lang: "Sanskrit/English",
      category: "Spiritual Texts",
      image: "./images/book3.jpg",
    },
    {
      title: "Moving Out of Poverty",
      author: "by Deepa Narayan",
      details: "Understanding poverty from the perspective of the poor themselves",
      pages: "450 pages",
      lang: "English",
      category: "Social Development",
      image: "./images/book4.jpg",
    },
    {
      title: "Poor Economics",
      author: "by Abhijit Banerjee & Esther Duflo",
      details: "A radical rethinking of the way to fight global poverty",
      pages: "400 pages",
      lang: "English",
      category: "Economics & Poverty",
      image: "./images/book6.jpg",
    },
    {
      title: "Bhagavad Gita",
      author: "by Sage Vyasa",
      details: "The eternal dialogue between Krishna and Arjuna",
      pages: "250 pages",
      lang: "Sanskrit/English",
      category: "Spiritual Texts",
      image: "./images/book8.jpg",
    },
    {
      title: "Upanishads",
      author: "by Ancient Sages",
      details: "Philosophical texts forming the basis for Hinduism",
      pages: "600 pages",
      lang: "Sanskrit/English",
      category: "Philosophy",
      image: "./images/book9.jpg",
    },
    {
      title: "Vedic Mathematics",
      author: "by Bharati Krishna Tirathji",
      details: "Ancient Indian mathematical techniques and methods",
      pages: "350 pages",
      lang: "English",
      category: "Education",
      image: "./images/book10.jpg",
    },
    {
      title: "Yoga Sutras of Patanjali",
      author: "by Sage Patanjali",
      details: "Classical text on yoga philosophy and practice",
      pages: "180 pages",
      lang: "English",
      category: "philosophy",
      image: "./images/book11.jpg",
    },
    {
      title: "Ayurveda Principles",
      author: "by Charaka & Sushruta",
      details: "Ancient Indian medical system and healing practices",
      pages: "500 pages",
      lang: "English",
      category: "Education",
      image: "./images/book12.jpg",
    },
    {
      title: "Help the Poor",
      author: "by Various Authors",
      details: "Practical approaches to poverty reduction and social welfare",
      pages: "300 pages",
      lang: "English",
      category: "social Development",
      image: "./images/book5.jpg",
    },
    {
      title: "Why Nations Fail",
      author: "by Daron Acemoglu & James Robinson",
      details: "The origins of power, prosperity, and poverty",
      pages: "350 pages",
      lang: "English",
      category: "economics & Poverty",
      image: "./images/book7.jpg",
    },

  ];

  const filteredBooks = books.filter(
    (book) =>
      (category === "All Books" || book.category === category) &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="bg-gray-50 font-['Roboto']">
      {/* Banner */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[#2C3E50]/70"></div>
        <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 
            className="text-4xl md:text-5xl font-serif font-bold mb-4 drop-shadow-lg"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            E-Library
          </h1>
          
          {/* Divider Line */}
          {/* <div 
            className="w-24 h-1 bg-white mx-auto mb-4 rounded-full"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div> */}
          
          <p 
            className="text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Explore spiritual wisdom, philosophy, and knowledge resources.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Search + Filters */}
        <div className="flex items-center justify-between gap-4 mb-12 overflow-x-auto scrollbar-hide">
          {/* Search */}
          <div className="w-1/3 min-w-[250px]">
            <input
              type="text"
              placeholder="Search books..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#2C3E50] focus:border-[#2C3E50] text-gray-700"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-nowrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${category === c
                    ? "bg-[#2C3E50] text-white"
                    : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-56 object-cover"
                />
                <span
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${book.category === "Spiritual Texts"
                      ? "bg-purple-600 text-white"
                      : book.category === "Social Development"
                        ? "bg-green-600 text-white"
                        : book.category === "Economics & Poverty"
                          ? "bg-blue-600 text-white"
                          : book.category === "Philosophy"
                            ? "bg-indigo-600 text-white"
                            : "bg-[#3D4C6D] text-white"
                    }`}
                >
                  {book.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#2C3E50] mb-1 font-serif">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                <p className="text-sm text-gray-500 mb-2">{book.details}</p>
                <p className="text-xs text-gray-400 mb-4">
                  {book.pages} · {book.lang}
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-[#2C3E50] hover:bg-[#3D4C6D] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center transition">
                    <Download className="w-4 h-4 mr-1" /> Download
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center hover:bg-gray-100 transition">
                    <Eye className="w-4 h-4 mr-1" /> Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          data-aos="fade-up"
          className="mt-16 bg-gradient-to-r from-[#2C3E50] to-[#3D4C6D] rounded-2xl p-10 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Contribute to Our Library
          </h3>
          <p className="mb-8 max-w-2xl mx-auto text-lg">
            Help us expand our digital library by donating books or supporting our digitization efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="bg-white text-[#2C3E50] font-semibold px-6 py-3 rounded-lg border border-white hover:shadow-lg transition">
              Donate Books
            </button> */}
            <button onClick={() => navigate('/donate')} className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2C3E50] transition">
              Support Library
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ELibrary;