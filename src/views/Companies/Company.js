import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ReactTitle } from 'react-meta-tags';
import slugify from '../../utils/slugify';
import { Modal } from 'antd';

const Company = ({ company, index, show, noUrl }) => {

  const [clicked, setClicked] = useState(false)
  const history = useHistory();

  const handleCancel = () => {
    setClicked(false)
    history.push('/companies')
  }

  useEffect(() => {
    setClicked(show)
  }, [show])

  return (
    <>
      <Link
        to={{
          pathname: `/companies/${slugify(company.alt)}`,
          state: { modal: true }
        }}
        onClick={() => setClicked(true)}
      >
        <div className="tiles-item reveal-from-bottom companyContainer" data-reveal-container=".tiles-wrap" data-reveal-delay={index*200+200}>
          <div className="tiles-item-inner">
            <img src={company.src} alt={company.alt} className={company.alt === 'Spero Health' ? "top" : ""}/>
            <h4>{company.caption}</h4>
          </div>
        </div>
      </Link>
      {clicked && <ReactTitle title={`${company.alt} | Health Velocity Capital`} />}

      <Modal
        title={null}
        footer={null}
        centered
        visible={clicked}
        onCancel={handleCancel}
        className='companyModal'
      >
        <img src={company.src} alt={company.alt} />
        <h2>{company.caption}</h2>
        <p>{company.description}</p>
        {company.exit && <p className='exit'>Exit: {company.exit}</p> }
        {company.url && !noUrl && <a className='button button-wide-mobile' href={company.url} alt={company.alt} target="_blank" rel="noopener noreferrer">Visit Homepage</a> }
      </Modal>
    </>
  )
}

export default Company;
