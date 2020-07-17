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
              <small>San Francisco address</small>
              <small>Nashville address</small>
            </div>

            <div className="footer-bottom space-between text-xxs">
              <div className="footer-copyright">&copy; {(new Date().getFullYear())} Health Velocity Capital.</div>
              <small>Logos on this site include Health Velocity Capital investments, prior operating companies and investments from predecessor firms.</small>
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
