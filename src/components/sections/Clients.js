import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';
import { SectionProps } from '../../utils/SectionProps';
import Slider from "react-slick";
import Button from '../elements/Button';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Clients.scss';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Clients extends React.Component {

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
      slidesToShow: 5,
      slidesToScroll: 5,
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
      title: 'We invest in companies that create entirely new markets',
      paragraph: 'Our principals have financed and help build more industry “firsts” than almost any investor in the country.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container clients center-content">
          <div
            className={innerClasses}
          >
            <SectionHeader data={sectionHeader} className="reveal-from-bottom" />
            <Slider {...settings}>
              <div className="reveal-from-bottom" data-reveal-delay="200">
                <img src={require('./../../assets/images/companies/healthjoy.png')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="400">
                <img src={require('./../../assets/images/companies/ginger.png')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <img src={require('./../../assets/images/companies/well.png')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="800">
                <img src={require('./../../assets/images/companies/threeoaks.png')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="1000">
                <img src={require('./../../assets/images/companies/zipari.png')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="200">
                <img src={require('./../../assets/images/companies/jvion.png')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="400">
                <img src={require('./../../assets/images/companies/mdlive.png')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <img src={require('./../../assets/images/companies/contessa.png')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="800">
                <img src={require('./../../assets/images/companies/ivx_health.jpg')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="1000">
                <img src={require('./../../assets/images/companies/sperohealth.jpeg')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="200">
                <img src={require('./../../assets/images/companies/circulation.png')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="400">
                <img src={require('./../../assets/images/companies/aspire.png')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <img src={require('./../../assets/images/companies/teledoc.png')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="800">
                <img src={require('./../../assets/images/companies/change.png')} />
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="1000">
                <img src={require('./../../assets/images/companies/cleardata.png')} />
              </div>
            </Slider>

            <Link to="/" className="bottom reveal-from-bottom"><Button wideMobile>View All Companies</Button></Link>
          </div>
        </div>
      </section>
    );
  }
}

Clients.propTypes = propTypes;
Clients.defaultProps = defaultProps;

export default Clients;
