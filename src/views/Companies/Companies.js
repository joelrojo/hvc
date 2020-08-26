import React from 'react';
import { companies } from '../../data/companies'
import classNames from 'classnames';
import { ReactTitle } from 'react-meta-tags';
import SectionHeader from '../../components/sections/partials/SectionHeader';

import './Companies.scss';

const Companies = ({
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
    'companies section',
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

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: <span style={{ fontWeight: "300" }}>Our Companies</span>,
    paragraph: <span style={{ display: "block", maxWidth: "700px", margin: "0 auto" }}>For more than 25 years, our Principals have financed and helped build <strong>more successful</strong> healthcare industry <strong>"firsts"</strong> and companies that became <strong>market leaders</strong>, longer than almost any other investor in the country</span>
  };


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <ReactTitle title="Companies | Health Velocity Capital"/>
      <div className="bgImg">
        <img src={require('../../assets/images/bg@2x.png')} />
      </div>
      <div className="container">
        <div className={innerClasses} style={{ paddingBottom: 0 }}>
          <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
          <div className={tilesClasses}>
            {companies.map((c, index) =>
              <div className="tiles-item reveal-from-bottom companyContainer" data-reveal-container=".tiles-wrap" data-reveal-delay={index*200+200}>
                <div className="tiles-item-inner">
                  <img src={c.src} alt={c.alt} />
                  <h4>{c.caption}</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;
