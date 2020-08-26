import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactTitle } from 'react-meta-tags';
import slugify from '../../utils/slugify';

const Company = ({ company, index }) => {

  const [clicked, setClicked] = useState(false)

  return (
    <>
      <Link to={`/companies/${slugify(company.alt)}`} onClick={() => setClicked(true)}>
        <div className="tiles-item reveal-from-bottom companyContainer" data-reveal-container=".tiles-wrap" data-reveal-delay={index*200+200}>
          <div className="tiles-item-inner">
            <img src={company.src} alt={company.alt} />
            <h4>{company.caption}</h4>
          </div>
        </div>
      </Link>
      {clicked && <ReactTitle title={`${company.alt} | Health Velocity Capital`} />}
    </>
  )
}

export default Company;
