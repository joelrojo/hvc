import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as Scroll from 'react-scroll';
import SectionHeader from './partials/SectionHeader';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import { companies } from '../../data/companies'
import slugify from '../../utils/slugify';

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
      paragraph: <span style={{ display: "block", maxWidth: "700px", margin: "0 auto" }}>For more than 25 years, and longer than almost any other investor in the country, our Principals have financed and helped build <strong>more successful</strong> healthcare industry <strong>"firsts"</strong> and companies that became <strong>market leaders</strong> than any investors</span>
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
                  {companies.slice(0, 12).map((c, index) =>
                    <div className="reveal-from-bottom companyContainer" data-reveal-delay={index*200+200}>
                      <Link to={`/companies/${slugify(c.alt)}`}>
                        <img src={c.src} alt={c.alt} />
                        <h4>{c.caption}</h4>
                      </Link>
                    </div>
                  )}
                </div>

              <div className='buttons'>
                <Link to="/companies" className="bottom reveal-from-bottom"><Button color="primary" wideMobile>View All Companies</Button></Link>

                <a href="https://medium.com/health-velocity-capital" rel="noopener noreferrer" target="_blank" className="bottom reveal-from-bottom"><Button color="primary" wideMobile>News</Button></a>
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
