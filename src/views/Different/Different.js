import React from 'react';
import classNames from 'classnames';
import { ReactTitle } from 'react-meta-tags';
import SectionHeader from '../../components/sections/partials/SectionHeader';

import './Different.scss';

const Different = ({
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
    'different section',
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
    title: <span style={{ fontWeight: "300" }}>Why We're Different</span>,
    paragraph: <span style={{ display: "block", maxWidth: "700px", margin: "0 auto" }}>Healthcare is all we've ever done...</span>
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <ReactTitle title="Why We're Different | Health Velocity Capital"/>
      <div className="bgImg">
        <img src={require('../../assets/images/bg@2x.png')} alt="Health Velocity Capital Tales from the Road"/>
      </div>
      <div className="container">
        <div className={innerClasses} style={{ paddingBottom: 0 }}>
          <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
          <div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Different;
