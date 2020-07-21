import React from 'react';
import * as Scroll from 'react-scroll';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

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

const headers = [
  'More Industry "Firsts" For Longer',
  'More Value-Add Investors For Longer',
  'Leveraged to Drive More Customer Relationships',
  'Investing with a Mission',
]

class Testimonial extends React.Component {

  state = { videoIndex: 0 }

  componentDidMount() {
    setInterval(() => {
      const newVideoIndex = this.state.videoIndex === videoBgs.length - 1
        ? 0
        : this.state.videoIndex + 1
      this.setState({
        videoIndex: newVideoIndex
      })

      document.getElementById(`video-${newVideoIndex}`).load()
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
          {videoBgs.map((video, index) =>
            <video
              id={`video-${index}`}
              loop
              muted
              autoPlay
              key={video}
              style={{ opacity: index === this.state.videoIndex ? 1 : 0 }}
            >
              <source src={video} />
            </video>
          )}
        </div>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
            <div className={tilesClasses}>
              {headers.map((header, index) =>
                <Scroll.Link key={header} to={`${index}`} spy smooth offset={-100} duration={700}>
                  <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay={`${1200 + (index * 200)}`}>
                    <div className="tiles-item-inner has-shadow">
                      <div className="testimonial-item-header mb-16">
                        <h4>{header}</h4>
                      </div>
                    </div>
                  </div>
                </Scroll.Link>
              )}
            </div>
          </div>
        </div>

        <Scroll.Element name="0">
          <h1>Scroll</h1>
        </Scroll.Element>
      </section>
    );
  }
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
