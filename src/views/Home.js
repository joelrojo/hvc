import React from 'react';
import Testimonial from '../components/sections/Testimonial';
import Clients from '../components/sections/Clients';
import Numbers from '../components/sections/Numbers';
import Tales from '../components/sections/Tales';

const Home = () => {

  return (
    <>
      <Testimonial className="has-bg-color-cut" />
      <Clients />
      <Numbers />
      <Tales className="illustration-section-01" />
    </>
  );
}

export default Home;
