import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';
import LinesBg from '../custom/LinesBg/LinesBg';

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
          </div>
        </div>
      </div>
    )
  }
}

Numbers.propTypes = propTypes;
Numbers.defaultProps = defaultProps;

export default Numbers;
