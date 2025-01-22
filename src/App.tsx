import React from 'react';
import Navbar from './views/components/Navbar';
import Hero from './views/components/Hero';
import Features from './views/components/Features';
import Contact from './views/components/Contact';
import Footer from './views/components/Footer';

import { getMenuItems } from './controllers/MenuController';
import { getContactInfo } from './controllers/ContactController';
import { getFeatures } from './controllers/FeaturesController';

function App() {
  const menuItems = getMenuItems();
  const contactInfo = getContactInfo();
  const features = getFeatures();

  return (
    <div className="min-h-screen bg-white">
      <Navbar menuItems={menuItems} />
      <Hero />
      <Features features={features} />
      <Contact contactInfo={contactInfo} />
      <Footer />
    </div>
  );
}

export default App;