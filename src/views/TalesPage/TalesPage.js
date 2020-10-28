import React, { useState, useEffect, useCallback } from 'react';
import photos from '../../data/photos';
import classNames from 'classnames';
import { ReactTitle } from 'react-meta-tags';
import SectionHeader from '../../components/sections/partials/SectionHeader';

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import './TalesPage.scss';

const TalesPage = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'talesPage section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: <span style={{ fontWeight: "300" }}>Tales from the Road</span>,
    paragraph: <span style={{ display: "block", maxWidth: "700px", margin: "0 auto" }}>Health Velocity Capital has headquarters in both Nashville and San Francisco, and we're on the road a lot! Check out some of our favorite memories, the fun we’ve had along our journey, and the many friends who’ve helped us along the way.</span>
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages(photos)
  }, [])

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <ReactTitle title="Tales from the Road | Health Velocity Capital"/>
      <div className="bgImg">
        <div className='overlay' />
        <img src={require('../../assets/images/tales/5.jpg')} alt="Health Velocity Capital Tales from the Road"/>
      </div>
      <div className="container">
        <div className={innerClasses} style={{ paddingBottom: 0 }}>
          <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
          <div className='photoGallery'>
            <Gallery photos={images} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={images.map(photo => ({
                      ...photo,
                      srcset: photo.srcSet,
                      caption: photo.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalesPage;
