/**
 *
 * Carousel
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { uid } from 'react-uid';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import blob from 'images/blob.svg';
import { primary } from 'theme';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonial1 from 'images/testimonial-1.jpg'; // Neetam Subedi
import testimonial2 from 'images/testimonial-2.jpg'; // Vidya Shakya
import testimonial3 from 'images/testimonial-3.jpg'; // Ramesh Dhakal
import testimonial4 from 'images/testimonial-4.jpg'; // Salil Shrestha
import testimonial5 from 'images/testimonial-5.png'; // Saila Dai

const victims = [
  {
    name: 'Vidya Shakya',
    title: 'Senior travel planner',
    description:
      'I love my job, I have been involved in it for 10 years...Since the lockdown, my husband and I are unemployed, we have had no income for more than a year now.',
    src: testimonial2,
    link: '/stories/1',
  },
  {
    name: 'Saila Dai',
    title: 'Salesman/ shop owner',
    description:
      'At a point during the lockdown, I thought we would die of hunger. There was no income, and the savings were dwindling rapidly.',
    src: testimonial5,
    link: '/stories/4',
  },
  {
    name: 'Ramesh Dhakal',
    title: 'Hotel owner, travels owner',
    description:
      'My energy to work more, take tourism to new heights has faded. I used to donate 5% of my income to charity now I don’t even feel like working.',
    src: testimonial3,
    link: '/stories/2',
  },
  {
    name: 'Neetam Subedi',
    title: 'Owner/ travel consultant',
    description:
      'I thought everything would be back to normal by October. Contrastingly, in October, we had to face unexpected pressures - even from the government.',
    src: testimonial1,
    link: '/stories/3',
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
            <Typography variant="h6">{victim.name}</Typography>
            <Typography variant="subtitle1" gutterBottom color="textSecondary">
              {victim.title}
            </Typography>
            <Typography paragraph gutterBottom>
              {victim.description}
            </Typography>
            <Link to={victim.link} className="read-more">
              <Typography variant="body2" gutterBottom color="primary">
                Read story <ArrowRightAltIcon />
              </Typography>
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
}

Carousel.propTypes = {};

export default Carousel;
