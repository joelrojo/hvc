import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/LogoInvert';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

class Footer extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      topDivider,
      ...props
    } = this.props;

    const classes = classNames(
      'site-footer invert-color center-content-mobile',
      topOuterDivider && 'has-top-divider',
      className
    );

    return (
      <footer
        {...props}
        className={classes}
      >
        <div className="container">
          <div className={
            classNames(
              'reveal-from-bottom site-footer-inner',
              topDivider && 'has-top-divider'
            )}>
            <div className="footer-top space-between text-xxs">
              <Logo />
              <FooterSocial />
            </div>

            <div className="footer-bottom space-between text-xxs">
              <small>1 Sansome St, Suite 3650, San Francisco, CA 94104</small>
              <small>5511 Virginia Way, Suite 210, Brentwood, TN 37027</small>
            </div>

            <div className="footer-bottom space-between text-xxs">
              <small className="footer-copyright">&copy; {(new Date().getFullYear())} Health Velocity Capital.</small>
              <small>Logos on this site include Health Velocity Capital investments, prior operating companies, and investments from predecessor firms.<br />Commercial relationships and executives placed include introductions from Principals’ prior roles at other organizations.</small>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
