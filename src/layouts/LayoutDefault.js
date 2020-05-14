import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const scrollThreshold = 200;

const LayoutDefault = ({ children }) => {

  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, [showHeader])

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll >= scrollThreshold && !showHeader) {
      setShowHeader(true)
    }
    if (winScroll < scrollThreshold && showHeader) {
      setShowHeader(false)
    }
  }

  return (
    <>
      <Header className="invert-color" navPosition="right" />
      <Header fixed showHeader={showHeader} navPosition="right" />

      <main className="site-content">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default LayoutDefault;
