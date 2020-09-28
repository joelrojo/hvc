import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';
import { SectionProps } from '../../utils/SectionProps';
import Slider from "react-slick";
import Button from '../elements/Button';
import shuffleArray from '../../utils/shuffleArray';

import photos from '../../data/photos';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Tales.scss';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Tales extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };

    const outerClasses = classNames(
      'clients section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'reveal-from-bottom clients-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: <span style={{ fontWeight: "300" }}>We <strong style={{ fontWeight: 900 }}>love</strong> what we do</span>,
      paragraph: 'And we have fun along the way'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container tales center-content">
          <div
            className={innerClasses}
          >
            <SectionHeader data={sectionHeader} className="reveal-from-bottom" />
            <Slider {...settings}>
              {shuffleArray(photos).slice(0,11).map((image, index) =>
                <div key={image.src} className="reveal-from-bottom" data-reveal-delay={index*200+200}>
                  <Link to="/tales-from-the-road">
                    <img src={image.src} alt='Health Velocity Capital Tales from the Road' />
                  </Link>
              </div>
              )}
            </Slider>

            <Link to="/tales-from-the-road" className="bottom"><Button color="primary" wideMobile>Tales From the Road</Button></Link>
          </div>
        </div>
      </section>
    );
  }
}

Tales.propTypes = propTypes;
Tales.defaultProps = defaultProps;

export default Tales;
