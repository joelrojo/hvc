import React, { useState } from 'react';
import classNames from 'classnames';
import { ReactTitle } from 'react-meta-tags';
import SectionHeader from '../../components/sections/partials/SectionHeader';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Carousel } from 'antd';
import { FaArrowDown } from "react-icons/fa";

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
    paragraph: <span style={{ display: "block", maxWidth: "700px", margin: "0 auto" }}>Our Principals have been investing in and building innovative healthcare software and services companies since the mid-1990s, creating market leaders and important new healthcare sectors in all types of market and healthcare cycles.</span>
  };

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
        <img src={require('../../assets/images/bg_grey@2x.png')} alt="Health Velocity Capital Tales from the Road"/>
      </div>
      <div className="container">
        <div className={innerClasses} style={{ paddingBottom: 0 }}>
          <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
          <div className='feature-split-wrap'>
            <div className="feature-split">
              <div className="center-content-mobile">
                <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".feature-split">
                  We Drive Revenue and Build Teams
                </h2>
                <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".feature-split">
                  We have leveraged our unique networks to tangibly and directly drive revenue (and the  resulting value creation) at almost every company with whom we have ever partnered.  We also believe nothing is more important in fast-growing, successful businesses than getting the right people on the bus – and quickly. Our Principals have introduced more than <strong>85 executives, team members, board members, and key contributors</strong> (well-known to us and longstanding in our networks) to the companies that have chosen to partner with us.
                </p>
              </div>
              <div className='center-content-mobile reveal-scale-up'
                data-reveal-container=".feature-split"
                data-reveal-delay="200">
                <Carousel autoplay autoplaySpeed={6000}>
                  {testimonials.slice(0,2).map(t => (
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
                <Carousel autoplay autoplaySpeed={6000}>
                  {testimonials.slice(2,4).map(t => (
                    <div>
                      <p
                        className={quoteOneShow ? '' : "clipped"}
                        onClick={() => setQuoteOneShow(!quoteOneShow)}
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
              <div className="center-content-mobile">
                <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".feature-split">
                  Limited Partners That Matter
                </h2>
                <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".feature-split">
                  We work closely with a number of strategic investors (in addition to an outstanding group of global institutional investors) and enjoy longstanding friendships with executives of many of the largest and most influential healthcare organizations in the country. Collectively, our strategic investors and more than <strong>50 senior level healthcare executives</strong> who have invested personally in our fund represent organizations that <strong>insure 175 million Americans, operate more than 620 hospitals, provide pharmacy and PBM services to more than 75% of the nation, and sell software to every major health system in the country.</strong> Our broader relationships put us a phone call away from almost any healthcare organization in the country.
                </p>
              </div>
            </div>

            <div className="feature-split">
              <div className="center-content-mobile">
                <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".feature-split">
                   These Are Truly Symbiotic Relationships
                </h2>
                <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".feature-split">
                  We have partnered with strategic investors for longer than almost anyone in the industry. We interact with a broad group of their senior executives and emerging leaders to understand their strategies, priorities, and challenges as organizations and across functional areas. They look to us to help them identify the right innovative themes and companies to adopt at the right time – and to avoid mistakes. In turn, they help us identify some of the key themes in which we invest, they assist with diligence, they help our portfolio companies with product development, they drive revenue to our portfolio companies, they take part in distribution relationships, and much more.
                </p>
              </div>
              <div className='reveal-scale-up'
                data-reveal-container=".feature-split"
                data-reveal-delay="200">
                <p className='callOut'>We facilitate this knowledge sharing through:</p>
                <div className='downIcon'><FaArrowDown /></div>
                <Carousel>
                  <ul className='callOuts'>
                    <li><AiOutlineCheckCircle /> Quarterly, proprietary innovation market intelligence reports</li>
                    <li><AiOutlineCheckCircle /> Quarterly, proprietary thematic white papers</li>
                    <li><AiOutlineCheckCircle /> Exclusive strategic investor webinars and pitch days</li>
                    <li><AiOutlineCheckCircle /> Quarterly on-site meetings</li>
                    <li><AiOutlineCheckCircle /> Our Annual JPMorgan Healthcare Conference Senior Leaders Dinner (11 years running…)</li>
                  </ul>
                  <ul className='callOuts'>
                    <li><AiOutlineCheckCircle /> Proprietary, annual Strategic Limited Partner Innovation Survey</li>
                    <li><AiOutlineCheckCircle /> Annual Strategic Limited Partner offsite at Elk Creek Ranch</li>
                    <li><AiOutlineCheckCircle /> Presentations at off-sites and other bespoke services</li>
                    <li><AiOutlineCheckCircle /> Executive Network Fund and Advisory Board interactions</li>
                    <li><AiOutlineCheckCircle /> 19th annual JPMorgan Healthcare Conference Innovation Reception</li>
                  </ul>
                </Carousel>
                <p className='callOut' style={{ margin: "60px auto 0"}}>...and much more</p>
              </div>
            </div>

            <div className="feature-split">
              <div className='center-content-mobile reveal-scale-up'
                data-reveal-container=".feature-split"
                data-reveal-delay="200">
                <Carousel autoplay autoplaySpeed={6000}>
                  {testimonials.slice(4,6).map(t => (
                    <div>
                      <p
                        className={quoteTwoShow ? '' : "clipped"}
                        onClick={() => setQuoteTwoShow(!quoteTwoShow)}
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
              <div className="center-content-mobile">
                <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".feature-split">
                  We Have Pattern Recognition
                </h2>
                <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".feature-split">
                  Working with management, we are constantly assessing market size, the competitive environment, and the company’s ability to executive against the opportunity. We know these are not static variables and evaluate them on an ongoing basis in partnership with management to help determine when to increase or decrease spend; when to tweak a product, invest heavily in product development, or switch gears completely; and when to continue building a company, sell, or go public. All these decisions directly impact the capital intensity of a business and can have a huge impact on an entrepreneur’s personal wealth creation. We make two clear promises while doing this: we work FOR our entrepreneur partners, and, accordingly, we will lean in hard to help.
                </p>
              </div>
            </div>

            <div id="values" />

            <div className="feature-split values">
              <div className="center-content-mobile">
                <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".feature-split">
                   We Are an Investment Firm with a Mission and Values
                </h2>
                <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".feature-split">
                  Our mission at Health Velocity Capital is to generate outstanding financial returns while being the preferred innovation partner of entrepreneurs and investors working toward a more affordable, sustainable, consumer-friendly healthcare system.
                </p>
              </div>
              <div className='reveal-scale-up'
                data-reveal-container=".feature-split"
                data-reveal-delay="200">
                <p className='callOut' style={{ marginTop: "10px"}}>We strive to accomplish our mission through a culture that is defined by the following characteristics:</p>
                <Carousel>
                  <ul className='callOuts'>
                    <li><AiOutlineCheckCircle /> Our team members are driven by a desire to excel for our entrepreneurs and our investors and to improve our nation’s healthcare system</li>
                    <li><AiOutlineCheckCircle /> We over-communicate and are transparent</li>
                    <li><AiOutlineCheckCircle /> We are responsive</li>
                    <li><AiOutlineCheckCircle /> We serve multiple customers; we work hard for all of them; and we are respectful of the needs of all entrepreneurs, our limited partners, our team, and our co-investors</li>
                  </ul>
                  <ul className='callOuts'>
                    <li><AiOutlineCheckCircle /> We believe good process leads to good results</li>
                    <li><AiOutlineCheckCircle /> We believe the opinion of every team member matters a lot</li>
                    <li><AiOutlineCheckCircle /> We know we make mistakes and do our best to own up to them</li>
                    <li><AiOutlineCheckCircle /> We believe high performance organizations require leadership, accountability, clarity, decisiveness, and a strong and fun culture</li>
                </ul>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Different;
