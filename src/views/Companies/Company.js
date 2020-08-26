import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTitle } from 'react-meta-tags';
import slugify from '../../utils/slugify';

const Company = ({ company, index }) => {
  return (
    <Link to={`/companies/${slugify(company.alt)}`}>
      <>
        <div className="tiles-item reveal-from-bottom companyContainer" data-reveal-container=".tiles-wrap" data-reveal-delay={index*200+200}>
          <div className="tiles-item-inner">
            <img src={company.src} alt={company.alt} />
            <h4>{company.caption}</h4>
          </div>
        </div>
        
      </>
    </Link>
  )
}

export default Company;
