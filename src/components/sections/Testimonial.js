import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import LinesBg from '../custom/LinesBg/LinesBg';
import { AiOutlineLineChart, AiOutlineDeploymentUnit, AiOutlineUsergroupAdd, AiOutlineDollar } from 'react-icons/ai';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Testimonial extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: <span>We’re on a mission to build<br />a better healthcare system</span>,
      paragraph: <span>Let's create a more <strong>affordable</strong>, <strong>sustainable,</strong> and <strong>consumer-friendly</strong> future together</span>
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <LinesBg />
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="1400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <AiOutlineLineChart />
                    <h4>We’re investors <i>and</i> operators.</h4>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      We’ve been investing and building healthcare software and services for 25+ years.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="1200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <AiOutlineDeploymentUnit />
                    <h4>We have a network.</h4>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Our unique investors and friends represent the US healthcare system.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="1600">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <AiOutlineDollar />
                    <h4>We help drive revenue.</h4>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Over 100 introductions that facilitated or helped maintain revenue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="1000">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <AiOutlineUsergroupAdd />
                    <h4>We help build teams.</h4>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Over 50 executive introductions hired by our portfolio companies.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
