import React from 'react';
import classNames from 'classnames';
import SectionHeader from '../../components/sections/partials/SectionHeader';

import './Companies.scss';

const headers = [
  <span>More <strong>Industry "Firsts"</strong> For Longer</span>,
  <span>More <strong>Value-Add</strong> Investors For Longer</span>,
  <span>Leveraged to Drive <strong>More Customer Relationships</strong></span>,
  <span>Investing with a<br /><strong>Mission</strong></span>,
]

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
    title: <span style={{ fontWeight: "300" }}>Our Portfolio</span>,
    paragraph: <span>Let's create a more <strong>affordable</strong>, <strong>sustainable,</strong> <strong>consumer-friendly</strong> future together</span>
  };


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="bgImg">
        <img src={require('../../assets/images/bg@2x.png')} />
      </div>
      <div className="container">
        <div className={innerClasses} style={{ paddingBottom: 0 }}>
          <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
          <div className={tilesClasses}>
            {headers.map((header, index) =>
              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay={`${1200 + (index * 200)}`}>
                <div className="tiles-item-inner">
                  <div className="testimonial-item-header">
                    <h4>{header}</h4>
                    <div className='readMore'>
                      Read More
                    </div>
                  </div>
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
