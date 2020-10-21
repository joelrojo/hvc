import React from 'react';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';
import * as Scroll from 'react-scroll';
import SectionHeader from './partials/SectionHeader';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';

import './Clients.scss';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Mission extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'clients section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'reveal-from-bottom clients-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: <span>We’re an investment firm that is driven by purpose, a clear mission, and an important set of core values</span>,
      paragraph: <span>Our mission is to generate outstanding financial returns while being the preferred innovation partner of entrepreneurs and investors working toward a more affordable, sustainable, consumer-friendly healthcare system</span>
    };

    return (
      <Scroll.Element name="3">
        <section {...props} className={outerClasses}>
          <div className="container clients center-content">
            <div
              className={innerClasses}
            >
              <SectionHeader data={sectionHeader} className="reveal-from-bottom" />

              <div className='buttons'>
                <HashLink to="/why-were-different#values" className="bottom reveal-from-bottom"><Button wideMobile>Our Values</Button></HashLink>
              </div>
            </div>
          </div>
        </section>
      </Scroll.Element>
    );
  }
}

Mission.propTypes = propTypes;
Mission.defaultProps = defaultProps;

export default Mission;
