import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import LinesBg from '../custom/LinesBg/LinesBg';
import { AiOutlineMedicineBox, AiOutlineCarryOut, AiOutlineTeam, AiOutlineRise  } from 'react-icons/ai';

import sf1 from '../../assets/videos/sf_1.mp4';
import sf2 from '../../assets/videos/sf_2.webm';
import nv1 from '../../assets/videos/nv_1.webm';
import nv2 from '../../assets/videos/nv_2.webm';

import './Testimonial.scss';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const videoBgs = [sf1, nv1, sf2, nv2]

class Testimonial extends React.Component {

  state = { videoIndex: 0 }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        videoIndex: this.state.videoIndex === videoBgs.length - 1
          ? 0
          : this.state.videoIndex + 1
      })
    }, 4000);
  }

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
      title: <span style={{ fontWeight: "300" }}>We invest exclusively in <strong style={{ fontWeight: 900, fontStyle: 'italic', textDecoration: "underline" }}>innovative</strong> healthcare software and services businesses</span>,
      paragraph: <span>Let's create a more <strong>affordable</strong>, <strong>sustainable,</strong> <strong>consumer-friendly</strong> future together</span>
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="videoWrapper">
          <video key={videoBgs[this.state.videoIndex]} muted loop autoPlay>
            <source src={videoBgs[this.state.videoIndex]} />
          </video>
        </div>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="1000">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <AiOutlineMedicineBox />
                    <h4>Sole Focus<br />on Healthcare</h4>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Building and investing in healthcare software and services companies is all we do
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="1200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <AiOutlineCarryOut />
                    <h4>Long and Successful History</h4>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Over 25 years dedicated to our mission, investing through multiple market cycles
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="1400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <AiOutlineTeam />
                    <h4>Deep and Expansive Network</h4>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Our unique investors and friends represent the US healthcare system
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="1600">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <AiOutlineRise  />
                    <h4>Active<br />Approach</h4>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      We have helped drive revenue and/or helped build teams at 95% of our portfolio companies
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
