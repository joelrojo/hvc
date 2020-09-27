import React from 'react';
import { photos } from '../../data/photos';
import classNames from 'classnames';
import { ReactTitle } from 'react-meta-tags';
import SectionHeader from '../../components/sections/partials/SectionHeader';

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

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: <span style={{ fontWeight: "300" }}>Tales from the Road</span>,
    paragraph: <span style={{ display: "block", maxWidth: "700px", margin: "0 auto" }}>Health Velocity Capital has headquarters in both Nashville and San Francisco, which means we're on the road a lot. Check out some of our favorite memories, the fun we’ve had in our company’s journey, and the many friends who’ve helped us along the way</span>
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <ReactTitle title="Tales from the Road | Health Velocity Capital"/>
      <div className="bgImg">
        <img src={require('../../assets/images/bg@2x.png')} alt="Health Velocity Capital Tales from the Road"/>
      </div>
      <div className="container">
        <div className={innerClasses} style={{ paddingBottom: 0 }}>
          <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
          <div className={tilesClasses}>

          </div>
        </div>
      </div>
    </section>
  );
}

export default TalesPage;
