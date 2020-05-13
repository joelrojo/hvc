import React from 'react';
import LinesBg from '../components/custom/LinesBg/LinesBg';
import Testimonial from '../components/sections/Testimonial';
import Clients from '../components/sections/Clients';
import News from '../components/sections/News';

const Home = () => {

  return (
    <>
      <LinesBg />
      <Testimonial className="has-bg-color-cut" />
      <Clients topDivider bottomDivider />
      <News className="illustration-section-01" />
    </>
  );
}

export default Home;
