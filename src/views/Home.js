import React from 'react';
import LinesBg from '../components/custom/LinesBg/LinesBg';
import Testimonial from '../components/sections/Testimonial';
import Clients from '../components/sections/Clients';
import Numbers from '../components/sections/Numbers';
import News from '../components/sections/News';

const Home = () => {

  return (
    <>
      <LinesBg />
      <Testimonial className="has-bg-color-cut" />
      <Clients />
      <Numbers />
      <News className="illustration-section-01" />
    </>
  );
}

export default Home;
