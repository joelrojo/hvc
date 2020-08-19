import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as Scroll from 'react-scroll';
import SectionHeader from './partials/SectionHeader';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';

import './Clients.scss';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const companies = [
  {
    src: require('./../../assets/images/companies/teledoc.png'),
    alt: 'Teledoc',
    caption: 'Telemedicine',
  },
  {
    src: require('./../../assets/images/companies/change.png'),
    alt: 'Change Healthcare',
    caption: 'Cost Transparency',
  },
  {
    src: require('./../../assets/images/companies/livongo.png'),
    alt: 'Livongo',
    caption: 'Virtual Chronic Care Management',
  },
  {
    src: require('./../../assets/images/companies/aspire.png'),
    alt: 'Aspire',
    caption: 'End of Life Care Management',
  },
  {
    src: require('./../../assets/images/companies/aperio.jpeg'),
    alt: 'Aperio',
    caption: 'Digital Pathology',
  },
  {
    src: require('./../../assets/images/companies/mdlive.png'),
    alt: 'MDLive',
    caption: 'Telemedicine',
  },
  {
    src: require('./../../assets/images/companies/ivx_health.jpg'),
    alt: 'IVX Health',
    caption: 'Specialty Biologics Cost Reduction',
  },
  {
    src: require('./../../assets/images/companies/us_renal_care.jpeg'),
    alt: 'US Renal Care',
    caption: 'Kidney Care Management',
  },
  {
    src: require('./../../assets/images/companies/zipari.png'),
    alt: 'Zipari',
    caption: 'CRM for Health Plans',
  },
  {
    src: require('./../../assets/images/companies/ginger.png'),
    alt: 'Ginger',
    caption: 'On-Demand Virtual Mental Health',
  },
  {
    src: require('./../../assets/images/companies/onshift.png'),
    alt: 'OnShift',
    caption: 'Post-Acute Software',
  },
  {
    src: require('./../../assets/images/companies/contessa.png'),
    alt: 'Contessa',
    caption: 'Hospital at Home',
  },
]

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
      title: <span style={{ display: "block", maxWidth: "600px", margin: "0 auto" }}>We partner with companies that create entirely new markets</span>,
      paragraph: <span style={{ display: "block", maxWidth: "700px", margin: "0 auto" }}>For more than 25 years, our Principals have financed and helped build <strong>more successful</strong> healthcare industry <strong>"firsts"</strong> and companies that became <strong>market leaders</strong>, longer than almost any other investor in the country</span>
    };

    return (
      <Scroll.Element name="0">
        <section {...props} className={outerClasses}>
          <div className="container clients center-content">
            <div
              className={innerClasses}
            >
              <SectionHeader data={sectionHeader} className="reveal-from-bottom" />

                <div className="companiesList">
                  {companies.map((c, index) =>
                    <div className="reveal-from-bottom companyContainer" data-reveal-delay={index*200+200}>
                      <img src={c.src} alt={c.alt} />
                      <h4>{c.caption}</h4>
                    </div>
                  )}
                </div>

              <div className='buttons'>
                <Link to="/" className="bottom reveal-from-bottom"><Button color="primary" wideMobile>View All Companies</Button></Link>

                <Link to="/" className="bottom reveal-from-bottom"><Button color="primary" wideMobile>News</Button></Link>
              </div>
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
