import React from 'react';
import Hero from '../components/Hero';
import History from '../components/History';
import Features from '../components/Features';
import Stats from '../components/Stats';
import { getFeatures } from '../../controllers/FeaturesController';

const HomePage: React.FC = () => {
  const features = getFeatures();

  return (
    <>
      <Hero />
      <History />
      <Features features={features} />
      <Stats />
    </>
  );
};

export default HomePage;