import React from 'react';
import { team, advisors } from '../../data/team'
import { useParams } from 'react-router-dom'
import classNames from 'classnames';
import { ReactTitle } from 'react-meta-tags';
import SectionHeader from '../../components/sections/partials/SectionHeader';
import Member from './Member';
import slugify from '../../utils/slugify';

import './Team.scss';

const Team = ({
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

  const { slug } = useParams()

  const outerClasses = classNames(
    'companyTeam section',
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
    title: <span style={{ fontWeight: "300" }}>Our Team</span>,
    paragraph: <span style={{ display: "block", maxWidth: "700px", margin: "0 auto" }}>For the past 25 years, our Principals have exclusively invested in and helped build healthcare software and service companies contributing to a more affordable, sustainable, consumer-friendly healthcare system.</span>
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <ReactTitle title="Team | Health Velocity Capital"/>
      <div className="bgImg">
        <div className='overlay' />
        <img src={require('../../assets/images/team_bg3.jpg')} alt="Health Velocity Capital Team"/>
      </div>
      <div className="container">
        <div className={innerClasses} style={{ paddingBottom: 0 }}>
          <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
          <div className={tilesClasses}>
            {team.map((m, index) =>
              <Member key={m.name} member={m} index={index} show={slug && slugify(slug) === slugify(m.name)}/>
            )}
          </div>
          <SectionHeader style={{ margin: '80px auto 0' }}data={{ title: 'Our Advisors' }} tag="h1" className="center-content reveal-from-top" data-reveal-delay="200" />
          <div className={tilesClasses}>
            {advisors.map((m, index) =>
              <Member key={m.name} member={m} index={index} show={slug && slugify(slug) === slugify(m.name)}/>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
