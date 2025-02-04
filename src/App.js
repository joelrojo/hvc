import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ScrollToTop from './utils/ScrollToTop';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import Companies from './views/Companies/Companies';
import Team from './views/Team/Team';
import TalesPage from './views/TalesPage/TalesPage';
import Different from './views/Different/Different';

import './App.scss';
import "antd/dist/antd.css";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <>
          <ScrollToTop />
          <Switch>
            <AppRoute exact path='/' component={Home} layout={LayoutDefault} />
            <AppRoute path='/companies/:slug' component={Companies} layout={LayoutDefault} />
            <AppRoute path='/companies' component={Companies} layout={LayoutDefault} />

            <AppRoute path='/team/:slug' component={Team} layout={LayoutDefault} />
            <AppRoute path='/team' component={Team} layout={LayoutDefault} />
            <AppRoute path='/tales-from-the-road' component={TalesPage} layout={LayoutDefault} />
            <AppRoute path='/why-were-different' component={Different} layout={LayoutDefault} />
          </Switch>
        </>
      )} />
  );
}

export default App;
