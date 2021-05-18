/**
 *
 * Carousel
 *
 */

import React from 'react';
import { uid } from 'react-uid';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import blob from 'images/blob.svg';
import { primary } from 'theme';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sample from 'images/sample-dp.jpg';

const victims = [
  {
    name: 'Bishnu Sapkota',
    title: 'Handicraft shop owner',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    src: sample,
  },
  {
    name: 'Bishnu Sapkota',
    title: 'Handicraft shop owner',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    src: sample,
  },
  {
    name: 'Bishnu Sapkota',
    title: 'Handicraft shop owner',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    src: sample,
  },
  {
    name: 'Bishnu Sapkota',
    title: 'Handicraft shop owner',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    src: sample,
  },
  {
    name: 'Bishnu Sapkota',
    title: 'Handicraft shop owner',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    src: sample,
  },
  {
    name: 'Bishnu Sapkota',
    title: 'Handicraft shop owner',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    src: sample,
  },
];

const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

function Carousel() {
  return (
    <Slider
      className="places-carousel"
      dots
      infinite
      slidesToScroll={2}
      arrows={false}
      slidesToShow={2}
      centerMode={false}
      centerPadding="50px"
      autoplay={false}
      responsive={responsive}
    >
      {victims.map(victim => (
        <div key={uid(victim)} className="d-flex pb-5 victim-container">
          <div>
            <img
              className="victim-image"
              src={victim.src}
              width="200"
              height="200"
              alt="person"
            />
          </div>
          <div className="victim-description" style={{ marginLeft: '2rem' }}>
            <Typography variant="h6" style={{ color: '#808996' }}>
              {victim.name}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ color: '#696969' }}
            >
              {victim.title}
            </Typography>
            <Typography paragraph gutterBottom style={{ color: '#333f57' }}>
              {victim.description}
            </Typography>
          </div>
        </div>
      ))}
    </Slider>
  );
}

Carousel.propTypes = {};

export default Carousel;
