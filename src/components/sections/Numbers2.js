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
  title: <div style={{ maxWidth: "800px", fontWeight: "300", fontSize: "36px", lineHeight: "46px" }}>We leverage these relationships to <span style={{ fontWeight: "900", textDecoration: "underline" }}>help drive revenue</span> and build teams</div>,
  paragraph: <span style={{ maxWidth: "800px", margin: "30px auto", display: "block" }}>In a highly process-driven and symbiotic manner, our Principals have used their networks to <span style={{ fontWeight: "900", fontVariant: "italic", color: "#101D2D" }}>tangibily create equity value at more than 95%</span> of the companies with whom we have partnered</span>
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
                                end={20}
                              />
                            </p>
                            <p>conversations with our strategic investors over the past year</p>
                          </div>

                          <div className="listItem">
                            <p className="number">
                              <CountUp
                                useEasing={false}
                                end={500}
                              />
                            </p>
                            <p>companies discussed</p>
                          </div>

                          <div className="listItem">
                            <p className="number">
                              <CountUp
                                useEasing={false}
                                end={75}
                              />
                            </p>
                            <p>company introductions</p>
                          </div>

                          <div className="listItem">
                            <p className="number">
                              <CountUp
                                useEasing={false}
                                end={100}
                              />
                            </p>
                            <p>commercial relationships</p>
                          </div>

                          <div className="listItem">
                            <p className="number">
                              <CountUp
                                useEasing={false}
                                end={40}
                              />
                            </p>
                            <p>executives placed</p>
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
