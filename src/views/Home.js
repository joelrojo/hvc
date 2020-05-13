import React from 'react';
import HeroSplit from '../components/sections/HeroSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesTabs from '../components/sections/FeaturesTabs';
import News from '../components/sections/News';
import Roadmap from '../components/sections/Roadmap';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <HeroSplit hasBgColor invertColor />
      <FeaturesTiles />
      <FeaturesTabs topDivider bottomOuterDivider />
      <News className="illustration-section-01" />
      <Roadmap topOuterDivider />
      <Pricing hasBgColor pricingSlider />
      <Cta hasBgColor invertColor split />
    </>
  );
}

export default Home;
