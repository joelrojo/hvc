import React from 'react';
import { ReactTitle } from 'react-meta-tags';
import Testimonial from '../components/sections/Testimonial';
import Clients from '../components/sections/Clients';
import Numbers from '../components/sections/Numbers';
import Numbers2 from '../components/sections/Numbers2';
import Mission from '../components/sections/Mission';
import Tales from '../components/sections/Tales';

const Home = () => {

  return (
    <>
      <ReactTitle title="Health Velocity Capital"/>
      <Testimonial className="has-bg-color-cut" />
      <Clients />
      <Numbers />
      <Numbers2 />
      <Mission invertColor />
      <Tales className="illustration-section-01" />
    </>
  );
}

export default Home;
