import React from 'react';
import Testimonial from '../components/sections/Testimonial';
import Clients from '../components/sections/Clients';
import News from '../components/sections/News';

const Home = () => {

  return (
    <>
      <Testimonial className="has-bg-color-cut illustration-section-02" />
      <Clients topDivider bottomDivider />
      <News className="illustration-section-01" />
    </>
  );
}

export default Home;
