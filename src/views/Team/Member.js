import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ReactTitle } from 'react-meta-tags';
import slugify from '../../utils/slugify';
import { Modal } from 'antd';
import { FaLinkedin } from 'react-icons/fa';

import Accordion from '../../components/elements/Accordion';
import AccordionItem from '../../components/elements/AccordionItem';

const Member = ({ member, index, show }) => {

  const [clicked, setClicked] = useState(false)
  const history = useHistory();

  const handleCancel = () => {
    setClicked(false)
    history.push('/team')
  }

  useEffect(() => {
    setClicked(show)
  }, [show])

  return (
    <>
      <Link
        to={{
          pathname: `/team/${slugify(member.name)}`,
          state: { modal: true }
        }}
        onClick={() => setClicked(true)}
      >
        <div className="tiles-item reveal-from-bottom teamContainer" data-reveal-container=".tiles-wrap" data-reveal-delay={index*200+200}>
          <div className="tiles-item-inner">
            <img src={member.src} alt={member.name} className={member.original ? "original" : ""} />
            <h2>{member.name}</h2>
            <h3>{member.title}</h3>
          </div>
        </div>
      </Link>
      {clicked && <ReactTitle title={`${member.name} | Health Velocity Capital`} />}

      <Modal
        title={null}
        footer={null}
        centered
        visible={clicked}
        onCancel={handleCancel}
        className='teamModal'
      >
        <div className='info'>
          <h2>{member.name}</h2>
          <h3>{member.title}{member.linkedin && <a href={`https://www.linkedin.com/in/${member.linkedin}`} target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>}</h3>
          <p dangerouslySetInnerHTML={{ __html: member.bio }} />
          {member.investments && member.investments.length > 0 &&
            <Accordion>
              <AccordionItem title="Investments">
                <ul>
                  {member.investments.map(item => <li>{item}</li>)}
                </ul>
              </AccordionItem>
            </Accordion>
          }
          {member.education && member.education.length > 0 &&
            <Accordion>
              <AccordionItem title="Education">
                <ul>
                  {member.education.map(item => <li>{item}</li>)}
                </ul>
              </AccordionItem>
            </Accordion>
          }
        </div>
        <img src={member.src} alt={member.name} />
      </Modal>
    </>
  )
}

export default Member;
