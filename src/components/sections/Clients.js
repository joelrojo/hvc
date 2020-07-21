import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as Scroll from 'react-scroll';
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
      title: 'We partner with companies that create entirely new markets',
      paragraph: <span>For more than 25 years, our Principals have financed and helped build <strong>more successful</strong> healthcare industry <strong>firsts</strong> and companies that became <strong>market leaders</strong>, longer than almost any other investor in the country</span>
    };

    return (
      <Scroll.Element name="0">
        <section {...props} className={outerClasses}>
          <div className="container clients center-content">
            <div
              className={innerClasses}
            >
              <SectionHeader data={sectionHeader} className="reveal-from-bottom" />
              <Slider {...settings}>
                <div className="reveal-from-bottom" data-reveal-delay="200">
                  <img src={require('./../../assets/images/companies/aspire.png')} alt='Aspire' />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="400">
                  <img src={require('./../../assets/images/companies/change.png')} alt='Change' />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <img src={require('./../../assets/images/companies/circulation.png')} alt='Circulation' />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="800">
                  <img src={require('./../../assets/images/companies/contessa.png')} alt='Contessa' />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="1000">
                  <img src={require('./../../assets/images/companies/ginger.png')} alt='Ginger' />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="200">
                  <img src={require('./../../assets/images/companies/healthjoy.png')} alt='HealthJoy' />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="400">
                  <img src={require('./../../assets/images/companies/ivx_health.jpg')} alt="Ivx Health" />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <img src={require('./../../assets/images/companies/jvion.png')} alt="Jvion" />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="800">
                  <img src={require('./../../assets/images/companies/livongo.png')} alt="Livongo" />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="1000">
                  <img src={require('./../../assets/images/companies/mdlive.png')} alt="MD Live" />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="200">
                  <img src={require('./../../assets/images/companies/sperohealth.jpeg')} alt='Spero Health' />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="400">
                  <img src={require('./../../assets/images/companies/threeoaks.png')} alt='Three Oaks' />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <img src={require('./../../assets/images/companies/teledoc.png')} alt='Teledoc' />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="800">
                  <img src={require('./../../assets/images/companies/well.png')} alt='Well' />
                </div>
                <div className="reveal-from-bottom" data-reveal-delay="1000">
                  <img src={require('./../../assets/images/companies/zipari.png')} alt='Zipari' />
                </div>
              </Slider>

              <Link to="/" className="bottom reveal-from-bottom"><Button color="primary" wideMobile>View All Companies</Button></Link>
            </div>
          </div>
        </section>
      </Scroll.Element>
    );
  }
}

Clients.propTypes = propTypes;
Clients.defaultProps = defaultProps;

export default Clients;
