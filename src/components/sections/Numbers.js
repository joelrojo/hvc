import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';
import LinesBg from '../custom/LinesBg/LinesBg';
import CountUp from 'react-countup';

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
  title: <div style={{ fontWeight: "300", fontSize: "36px", lineHeight: "46px" }}>We invest on behalf of the <span style={{ fontWeight: "900", fontStyle: "italic" }}>largest</span> and <span style={{ fontWeight: "900", fontStyle: "italic" }}>most influential</span> healthcare organizations in the country.</div>,
  paragraph: <span style={{ maxWidth: "800px", margin: "30px auto", display: "block" }}>Collectively, these investors, including senior healthcare executives and an outstanding group of global, financial institutions, represent organizations that:</span>
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
      <div
        {...props}
        className={classes}
      >
        <LinesBg />
        <div className="container">
          <div className={
            classNames(
              'reveal-from-bottom site-footer-inner',
              topDivider && 'has-top-divider'
            )}>
            <SectionHeader data={sectionHeader} className="center-content invert-color reveal-from-top" />

            <div className="numbersList">
              <div className="listItem">
                <p>Insure more than</p>
                <h2>
                  <CountUp
                    end={140}
                    suffix="M"
                  />
                </h2>
                <p>Americans</p>
              </div>

              <div className="listItem">
                <p>Operate</p>
                <h2>
                  <CountUp
                    end={500}
                  />
                </h2>
                <p>Hospitals</p>
              </div>

              <div className="listItem">
                <p>Provide PMB services to</p>
                <h2>
                  <CountUp
                    end={75}
                    suffix="%"
                  />
                </h2>
                <p>of the nation</p>
              </div>

              <div className="listItem">
                <p>Employ</p>
                <h2>
                  <CountUp
                    end={3.5}
                    suffix="M"
                  />
                </h2>
                <p>Americans</p>
              </div>

              <div className="listItem">
                <p>Generate</p>
                <h2>
                  <CountUp
                    prefix="$"
                    end={1.7}
                    suffix="T"
                  />
                </h2>
                <p>in revenue</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

Numbers.propTypes = propTypes;
Numbers.defaultProps = defaultProps;

export default Numbers;
