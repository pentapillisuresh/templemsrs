import React from 'react';
import BannerCarousel from './BannerCarousel';
import AboutUs from './AboutUs';
import Astrology from './Astrology';
import Projects from './Projects';
import WhyChooseUs from './WhyChooseUs';
import Events from './Events';
import ELibrary from './ELibrary';
import 'aos/dist/aos.css';
// import TempleHighlights from './TempleHighlights';
import Services from './Services';

function Homepage() {
  return (
    <div className="min-h-screen">
      <BannerCarousel />
      <AboutUs />
      <Services />
      <Astrology />
      <Projects />
      {/* <WhyChooseUs /> */}
      {/* <TempleHighlights /> */}
      <Events />
      <ELibrary />
    </div>
  );
}

export default Homepage;