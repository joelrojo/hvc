import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import LogoInvert from "./partials/LogoInvert";

const propTypes = {
  active: PropTypes.bool,
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
  fixed: PropTypes.bool,
  showHeader: PropTypes.bool,
};

const defaultProps = {
  active: false,
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
  fixed: false,
  showHeader: false,
};

class Header extends React.Component {
  state = {
    isActive: false,
  };

  nav = React.createRef();
  hamburger = React.createRef();

  componentDidMount() {
    this.props.active && this.openMenu();
    document.addEventListener("keydown", this.keyPress);
    document.addEventListener("click", this.clickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress);
    document.addEventListener("click", this.clickOutside);
    this.closeMenu();
  }

  openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    this.nav.current.style.maxHeight = this.nav.current.scrollHeight + "px";
    this.setState({ isActive: true });
  };

  closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    this.nav.current && (this.nav.current.style.maxHeight = null);
    this.setState({ isActive: false });
  };

  keyPress = (e) => {
    this.state.isActive && e.keyCode === 27 && this.closeMenu();
  };

  clickOutside = (e) => {
    if (!this.nav.current) return;
    if (
      !this.state.isActive ||
      this.nav.current.contains(e.target) ||
      e.target === this.hamburger.current
    )
      return;
    this.closeMenu();
  };

  render() {
    const {
      className,
      active,
      navPosition,
      hideNav,
      hideSignin,
      bottomOuterDivider,
      bottomDivider,
      fixed,
      showHeader,
      ...props
    } = this.props;

    const classes = classNames(
      `site-header ${fixed ? "fixed" : "reveal-from-top"} ${
        showHeader ? "show" : ""
      }`,
      bottomOuterDivider && "has-bottom-divider",
      className
    );

    return (
      <header {...props} className={classes}>
        <div className="container">
          <div
            className={classNames(
              "site-header-inner",
              bottomDivider && "has-bottom-divider"
            )}
          >
            <LogoInvert />

            {!hideNav && (
              <React.Fragment>
                <button
                  ref={this.hamburger}
                  className="header-nav-toggle"
                  onClick={this.state.isActive ? this.closeMenu : this.openMenu}
                >
                  <span className="screen-reader">Menu</span>
                  <span className="hamburger">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                <nav
                  ref={this.nav}
                  className={classNames(
                    "header-nav",
                    this.state.isActive && "is-active"
                  )}
                >
                  <div className="header-nav-inner">
                    <ul
                      className={classNames(
                        "list-reset text-xs",
                        navPosition && `header-nav-${navPosition}`
                      )}
                    >
                      <li>
                        <Link to="/why-were-different" onClick={this.closeMenu}>
                          Why We're Different
                        </Link>
                      </li>
                      <li>
                        <Link to="/companies" onClick={this.closeMenu}>
                          Companies
                        </Link>
                      </li>
                      <li>
                        <Link to="/team" onClick={this.closeMenu}>
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/tales-from-the-road"
                          onClick={this.closeMenu}
                        >
                          TFTR
                        </Link>
                      </li>
                      <li>
                        <a
                          href="https://healthvelocitycapital.medium.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          News
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </React.Fragment>
            )}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
