import React, { useState } from 'react';
import classNames from 'classnames';
import { ReactTitle } from 'react-meta-tags';
import SectionHeader from '../../components/sections/partials/SectionHeader';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Carousel } from 'antd';

import { testimonials } from '../../data/testimonials';

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

  const sectionHeader = {
    title: <span style={{ fontWeight: "300" }}>Why We're Different</span>,
    paragraph: <span style={{ display: "block", maxWidth: "700px", margin: "0 auto" }}>Healthcare is all we've ever done...</span>
  };

  const sectionHeaderMission = {
    title: "We Are An Investment Firm With A Mission",
    paragraph: "Our mission at Health Velocity Capital is to generate outstanding financial returns while being the preferred innovation partner of entrepreneurs and investors working toward a more affordable, sustainable, consumer-friendly healthcare system."
  }

  const [quoteOneShow, setQuoteOneShow] = useState(false)
  const [quoteTwoShow, setQuoteTwoShow] = useState(false)

  return (
    <>
    <section
      {...props}
      className={outerClasses}
    >
      <ReactTitle title="Why We're Different | Health Velocity Capital"/>
      <div className="bgImg">
        <img src={require('../../assets/images/bg_blue@2x.png')} alt="Health Velocity Capital Tales from the Road"/>
      </div>
      <div className="container">
        <div className={innerClasses} style={{ paddingBottom: 0 }}>
          <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
          <div className='feature-split-wrap'>
            <div className="feature-split">
              <div className="center-content-mobile">
                <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".feature-split">
                  More Industry "Firsts" for Longer
                </h2>
                <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".feature-split">
                  In partnership with outstanding management teams, our Principals have helped to create <strong>more new, important healthcare sectors and market leaders</strong> than almost any other investor in the country.
                </p>
              </div>
              <div className='center-content-mobile reveal-scale-up'
                data-reveal-container=".feature-split"
                data-reveal-delay="200">
                <Carousel autoplay autoplaySpeed={6000}>
                  {testimonials.slice(0,3).map(t => (
                    <div>
                      <p
                        className={quoteOneShow ? '' : "clipped"}
                        onClick={() => setQuoteOneShow(!quoteOneShow)}
                      >"{t.quote}"</p>
                      <div className='user'>
                        <img src={require(`../../assets/images/testimonials/${t.name.toLowerCase().replace(' ', '_')}.jpg`)} alt={t.name} />
                        <div className="details">
                          <h4>{t.name}</h4>
                          <h5>{t.company}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>

            <div className="feature-split">
              <div className='center-content-mobile reveal-scale-up'
                data-reveal-container=".feature-split"
                data-reveal-delay="200">
                <img className='graphicImage' src={require('../../assets/images/graphic.png')} alt='HVC Numbers' />
              </div>
              <div className="center-content-mobile">
                <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".feature-split">
                  We Leverage Some of the Strongest Relationships in the Industry to Drive Revenue, Build Teams, & Create Symbiotic Value
                </h2>
                <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".feature-split">
                  We work closely with a broad group of strategic investors (in addition to an outstanding group of institutional investors) and enjoy longstanding <strong>relationships and friendships with executives of with hundreds of the largest and most influential healthcare organizations in the country</strong>.<br /><br />These organizations help us identify the key themes in which we invest; they assist with diligence; they help our portfolio companies with product development; they help us build management teams; they drive revenue to our portfolio companies; they take part in distribution relationships; and much more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="invert-color mission">
        <div className='container'>
          <p className="callOut m-0 reveal-from-bottom" data-reveal-delay="100">
            Having worked with strategic investors longer than almost anyone in the industry, we interact with a broad group of their senior executives and emerging leaders to understand their strategy, priorities, and challenges as organizations and across functional areas. We track and monitor relevant themes and companies across the sector for them, and we help them identify the right innovative themes and companies to adopt — and at the right time.
          </p>

          <ul className='callOuts reveal-from-bottom' data-reveal-delay="300">
            <li><AiOutlineCheckCircle /> Quarterly, Proprietary Innovation Market Intelligence Report</li>
            <li><AiOutlineCheckCircle /> Quarterly, Proprietary Thematic Whitepapers</li>
            <li><AiOutlineCheckCircle /> Exclusive Strategic Investor Webinars and Annual Off-Site at Elk Creek Ranch</li>
            <li><AiOutlineCheckCircle /> Quarterly On-Site Meetings</li>
            <li><AiOutlineCheckCircle /> And Much More...</li>
          </ul>
        </div>
      </div>


      <div className='container'>
        <div className="feature-split-wrap">
          <div className="feature-split">
            <div className="center-content-mobile">
              <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".feature-split">
                We Are Practical Company Builders
              </h2>
              <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".feature-split">
                With decades of experience, we know that most innovative, growing companies hit a bump (or five) in the road, and the line to success is never straight.  With former operating experience, we know what it takes to overcome setbacks and to accelerate growth, and as such, are ready to roll up our sleeves to help.<br /><br />We are patient investors focused on long term value creation.
              </p>
            </div>
            <div className='center-content-mobile reveal-scale-up'
              data-reveal-container=".feature-split"
              data-reveal-delay="200">
              <Carousel autoplay autoplaySpeed={6000}>
                {testimonials.slice(3,6).map(t => (
                  <div>
                    <p
                      className={quoteTwoShow ? '' : "clipped"}
                      onClick={() => setQuoteTwoShow(!quoteTwoShow)}
                    >"{t.quote}"</p>
                    <div className='user'>
                      <img src={require(`../../assets/images/testimonials/${t.name.toLowerCase().replace(' ', '_').replace(' ', '_')}.jpg`)} alt={t.name} />
                        <div className="details">
                          <h4>{t.name}</h4>
                          <h5>{t.company}</h5>
                        </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='invert-color mission'>
      <div className='container'>
        <SectionHeader data={sectionHeaderMission} className="reveal-from-bottom" />
        <div className='container-sm'>
          <h2 className="reveal-from-bottom" data-reveal-delay="200">We operate with a clear set of organizational values</h2>
          <ul className="reveal-from-bottom" data-reveal-delay="300">
            <li>Our team members are driven by a desire to excel for our entrepreneurs and our investors and to improve our nation’s healthcare system</li>
            <li>We over-communicate and are transparent</li>
            <li>We are responsive</li>
            <li>We serve multiple customers, we work hard for all of them, and we are respectful of the needs of all entrepreneurs, our limited partners, our team, and our co-investors</li>
            <li>We believe good process leads to good results</li>
            <li>We believe the opinion of every team member matters a lot</li>
            <li>We know we make mistakes and do our best to own up to them</li>
            <li>We believe high performance organizations require leadership, accountability, clarity, decisiveness, and a strong and fun culture</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}

export default Different;
