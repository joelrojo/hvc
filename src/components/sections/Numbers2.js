import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as Scroll from 'react-scroll';
import SectionHeader from './partials/SectionHeader';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import './Numbers.scss';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const sectionHeader = {
  title: <div style={{ fontWeight: "300", fontSize: "36px", lineHeight: "46px", maxWidth: "600px", margin: "0 auto" }}>We leverage these relationships to help drive revenue and build teams</div>,
  paragraph: <span style={{ margin: "30px auto", display: "block", fontSize: "18px" }}>In a highly process-driven and symbiotic manner, our Principals have used their networks to <span style={{ fontWeight: "900", color: "#101D2D" }}>tangibily create equity value at more than <span style={{ fontStyle: 'italic' }}>95%</span></span> of the companies with whom we have partnered</span>
};

class Numbers2 extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      topDivider,
      ...props
    } = this.props;

    const classes = classNames(
      'numbers site-footer center-content-mobile',
      topOuterDivider && 'has-top-divider',
      className
    );

    return (
      <Scroll.Element name="2">
        <div {...props} className={classes}>
          <div className="container">
            <div className={
              classNames(
                'reveal-from-bottom site-footer-inner',
                topDivider && 'has-top-divider'
              )}>
              <SectionHeader data={sectionHeader} className="center-content invert-color reveal-from-top" />
              <VisibilitySensor partialVisibility>
                {({isVisible}) => (
                  <div className="numbersList">
                    {isVisible
                      ? (
                        <>
                          <div className="listItem">
                            <p className="number">
                              <CountUp
                                useEasing={false}
                                end={700}
                                suffix="+"
                              />
                            </p>
                            <p>conversations with strategic investors</p>
                          </div>

                          <div className="listItem">
                            <p className="number">
                              <CountUp
                                useEasing={false}
                                end={600}
                                suffix="+"
                              />
                            </p>
                            <p>companies<br />discussed</p>
                          </div>

                          <div className="listItem">
                            <p className="number">
                              <CountUp
                                prefix="$"
                                useEasing={false}
                                end={40}
                                suffix="B+"
                              />
                            </p>
                            <p>equity value<br />creation</p>
                          </div>

                          <div className="listItem">
                            <p className="number">
                              <CountUp
                                useEasing={false}
                                end={55}
                                suffix="+"
                              />
                            </p>
                            <p>executives<br />placed</p>
                          </div>
                          
                          <div className="listItem">
                            <p className="number">
                              <CountUp
                                useEasing={false}
                                end={100}
                                suffix="+"
                              />
                            </p>
                            <p>commercial relationships facilitated</p>
                          </div>
                        </>
                      )
                      : null
                    }
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </div>
      </Scroll.Element>
    )
  }
}

Numbers2.propTypes = propTypes;
Numbers2.defaultProps = defaultProps;

export default Numbers2;
