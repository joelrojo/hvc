import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as Scroll from 'react-scroll';
import SectionHeader from './partials/SectionHeader';
import LinesBg from '../custom/LinesBg/LinesBg';
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
  title: <div style={{ fontWeight: "300", fontSize: "36px", lineHeight: "46px" }}>We invest on behalf of many of the largest healthcare organizations in the country, many of healthcare's most accomplished senior executives, and an outstanding group of global institutional investors</div>,
  paragraph: <span style={{ margin: "30px auto", display: "block" }}>Our Principals have worked with strategic investors for longer than almost anyone in the industry. Collectively, Health Velocity Capital’s investors represent organizations that.</span>
};

class Numbers extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      topDivider,
      ...props
    } = this.props;

    const classes = classNames(
      'numbers site-footer invert-color center-content-mobile',
      topOuterDivider && 'has-top-divider',
      className
    );

    return (
      <Scroll.Element name="1">
        <div {...props} className={classes}>
          <LinesBg />
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
                            <p>Insure more than</p>
                            <p className="number">
                              <CountUp
                                useEasing={false}
                                end={175}
                                suffix="M"
                              />
                            </p>
                            <p>Americans</p>
                          </div>

                          <div className="listItem">
                            <p>Operate</p>
                            <p className="number">
                              <CountUp
                                useEasing={false}
                                end={700}
                                prefix=">"
                              />
                            </p>
                            <p>Hospitals</p>
                          </div>

                          <div className="listItem">
                            <p>Provide Pharmacy &amp; PBM services to</p>
                            <p className="number">
                              <CountUp
                                useEasing={false}
                                end={75}
                                suffix="%"
                              />
                            </p>
                            <p>of the nation</p>
                          </div>

                          <div className="listItem">
                            <p>Employ</p>
                            <p className="number">
                              <CountUp
                                useEasing={false}
                                decimals={1}
                                end={5.0}
                                suffix="M"
                              />
                            </p>
                            <p>Americans</p>
                          </div>

                          <div className="listItem">
                            <p>Generate</p>
                            <p className="number">
                              <CountUp
                                prefix="$"
                                useEasing={false}
                                decimals={1}
                                end={2.1}
                                suffix="T"
                              />
                            </p>
                            <p>in revenue</p>
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

Numbers.propTypes = propTypes;
Numbers.defaultProps = defaultProps;

export default Numbers;
