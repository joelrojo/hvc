import React from 'react';
import { currentCompanies, pastCompanies } from '../../data/companies'
import { useParams } from 'react-router-dom'
import classNames from 'classnames';
import { ReactTitle } from 'react-meta-tags';
import SectionHeader from '../../components/sections/partials/SectionHeader';
import Company from './Company';
import slugify from '../../utils/slugify';

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

  const { slug } = useParams()

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
    paragraph: <span style={{ display: "block", maxWidth: "700px", margin: "0 auto" }}>For more than 25 years, and longer than almost any other investor in the country, our Principals have financed and helped build <strong>more successful</strong> healthcare industry <strong>"firsts"</strong> and companies that became <strong>market leaders</strong> than any investors</span>
  };

  const section2Header = {
    title: 'Prior Investments',
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <ReactTitle title="Companies | Health Velocity Capital"/>
      <div className="bgImg">
        <img src={require('../../assets/images/bg_grey@2x.png')} alt="Health Velocity Capital Companies"/>
      </div>
      <div className="container">
        <div className={innerClasses} style={{ paddingBottom: 0 }}>
          <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
          <div className={tilesClasses}>
            {currentCompanies.map((c, index) =>
              <Company key={c.alt} company={c} index={index} show={slug && slugify(slug) === slugify(c.alt)}/>
            )}
            <div className="tiles-item reveal-from-bottom companyContainer" data-reveal-container=".tiles-wrap"></div>
          </div>
          <SectionHeader style={{ margin: '40px auto 0', paddingBottom: "10px" }} data={section2Header} tag="h1" className="center-content reveal-from-top" data-reveal-delay="200" />
          <div className={tilesClasses}>
            {pastCompanies.map((c, index) =>
              <Company noUrl key={c.alt} company={c} index={index} show={slug && slugify(slug) === slugify(c.alt)}/>
            )}
            <div className="tiles-item reveal-from-bottom companyContainer" data-reveal-container=".tiles-wrap"></div>
          </div>
          <p className="center-content reveal-from-bottom footnote">Prior investments includes investments that were sourced and led by our Principals at predecessor firms, with the exceptions of ClearData (co-led), iTriage, D2Hawkeye, and Iasis Healthcare.</p>
        </div>
      </div>
    </section>
  );
}

export default Companies;
