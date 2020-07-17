import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';
import { SectionProps } from '../../utils/SectionProps';
import Slider from "react-slick";
import Button from '../elements/Button';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Tales.scss';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const images = [
  'https://images.squarespace-cdn.com/content/v1/57ccae3a440243f4deda5961/1571769558085-0ED06KQ8491IN56LGLSC/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/HVC+Team+axe+throwing.jpg',
  "https://images.squarespace-cdn.com/content/v1/57ccae3a440243f4deda5961/1501043997328-VL0LZBGIGHHQM8X7RLPA/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/file-9.jpeg",
  "https://images.squarespace-cdn.com/content/v1/57ccae3a440243f4deda5961/1500483626674-VCECV2572CEAS37G51RQ/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_2732.jpg",
  "https://images.squarespace-cdn.com/content/v1/57ccae3a440243f4deda5961/1571769932777-ISO6ZK868SO0BRCQRW4R/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/Grant+Blevins+Bruce+Crosby+Jenny+Guyton+Reagan+Museum.jpg",
  "https://images.squarespace-cdn.com/content/v1/57ccae3a440243f4deda5961/1501043916723-RSRN545NDFL1QREBCDH2/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/file-2.jpeg",
  "https://images.squarespace-cdn.com/content/v1/57ccae3a440243f4deda5961/1500483520933-4MPL1QONN88E600U81O5/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1965.jpg",
  "https://images.squarespace-cdn.com/content/v1/57ccae3a440243f4deda5961/1501116974547-2IBA0OOO6NTSMGI4HXJ5/ke17ZwdGBToddI8pDm48kLTI_7v4Ges5T89TqlsvAId7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmTqyr0YSX1lQOSnWxEpwDIjNrW5IBxXmf5Xj0OwipSdZo26JKo3dQi0snS9dxSvGu/file.jpeg",
  "https://images.squarespace-cdn.com/content/v1/57ccae3a440243f4deda5961/1539784297309-4YHX37ZLML24TUEWVG17/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/elk+creek.jpg",
  "https://images.squarespace-cdn.com/content/v1/57ccae3a440243f4deda5961/1559927293892-K1X46OJK5GQUDC9UGIP9/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/Dim+sum.jpg",
]

const shuffleArray = arra1 => {
    var ctr = arra1.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

class Tales extends React.Component {

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

    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };

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
      title: <span style={{ fontWeight: "300" }}>We <strong style={{ fontWeight: 900, fontStyle: 'italic', textDecoration: "underline" }}>love</strong> what we do</span>,
      paragraph: 'And we have fun along the way'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container tales center-content">
          <div
            className={innerClasses}
          >
            <SectionHeader data={sectionHeader} className="reveal-from-bottom" />
            <Slider {...settings}>
              {shuffleArray(images).map((image, index) =>
                <div key={image} className="reveal-from-bottom" data-reveal-delay={index*200+200}>
                  <img src={image} />
                </div>
              )}
            </Slider>

            <Link to="/" className="bottom"><Button color="primary" wideMobile>Click Here for More Tales From the Road</Button></Link>
          </div>
        </div>
      </section>
    );
  }
}

Tales.propTypes = propTypes;
Tales.defaultProps = defaultProps;

export default Tales;
