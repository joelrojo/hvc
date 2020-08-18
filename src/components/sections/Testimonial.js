import React from 'react';
import * as Scroll from 'react-scroll';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

import sf1 from '../../assets/videos/sf_1.mp4';
import sf2 from '../../assets/videos/sf_2.webm';
import nv1 from '../../assets/videos/nv_1.webm';
import nv2 from '../../assets/videos/nv_2.webm';

import { IoIosArrowDown } from "react-icons/io";

import './Testimonial.scss';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const videoBgs = [sf1, nv1, sf2, nv2]

const headers = [
  <span>More <strong>Industry "Firsts"</strong> For Longer</span>,
  <span>More <strong>Value-Add</strong> Investors For Longer</span>,
  <span>Leveraged to Drive <strong>More Customer Relationships</strong></span>,
  <span>Investing with a<br /><strong>Mission</strong></span>,
]

class Testimonial extends React.Component {

  state = { videoIndex: -1 }

  componentDidMount() {
    this.setState({ videoIndex: 0 })

    document.getElementById('video-0').load()

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
      title: <span style={{ fontWeight: "300" }}>We invest exclusively in <strong style={{ fontWeight: 900 }}>innovative</strong> healthcare software and services businesses</span>,
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
          <div className={innerClasses} style={{ paddingBottom: 0 }}>
            <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color reveal-from-top" data-reveal-delay="600" />
            <div className={tilesClasses}>
              {headers.map((header, index) =>
                <Scroll.Link key={header} to={`${index}`} spy smooth duration={700}>
                  <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay={`${1200 + (index * 200)}`}>
                    <div className="tiles-item-inner">
                      <div className="testimonial-item-header">
                        <h4>{header}</h4>
                        <div className='readMore'>
                          Read More
                          <IoIosArrowDown />
                        </div>
                      </div>
                    </div>
                  </div>
                </Scroll.Link>
              )}
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
