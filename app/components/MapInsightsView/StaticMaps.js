/**
 *
 * About
 *
 */

import React from 'react';
import { uid } from 'react-uid';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ZoomImage from 'components/StoryDetailView/ZoomImage';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import tourismDestinations from 'images/tourism-destinations.png';
// import migrationPokhara from 'images/migration-pokhara.png';
// import migrationKathmandu from 'images/migration-kathmandu.png';
// import entryPoints from 'images/entry-points.png';
// import geoDistribution from 'images/geo-distribution.png';
// import tourismDestinations from 'images/perma-addr-distribution.png';

const staticMaps = [
  {
    fileName: 'tourism-destinations.png',
    title: 'Major Tourism Destinations',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    fileName: 'migration-kathmandu.png',
    title: 'Flow of Tourism Workers to Kathmandu with Different Skills',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    fileName: 'entry-points.png',
    title: 'Entry Points and Travelling Options',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    fileName: 'geo-distribution.png',
    title: 'Geographical Distribution of Tourism Workers by Their Occupation',
    description:
      'This map is a standard univariate product that shows district-wise distribution of our respondents, or how reported tourism occupations vary across districts. Turns out 20% of our respondents are from Solukhumbu district, where the highest peak of the world, Mount Everest is located. Most of the respondents here are Mountain and trekking guides.',
  },
];

function StaticMaps() {
  const getDescription = index => {
    switch (index) {
      case 1: {
        return (
          <>
            <Typography paragraph>
              this map identifies the major tourism hubs and destinations of the
              country by looking into the movement of the respondents during
              their work.
            </Typography>
            <Typography paragraph>
              We prepared this map by combining the responses from the survey
              with the existing OSM data and checking the validity of the hubs.
            </Typography>
            <Typography paragraph>
              The areas with diagonal lines show the major tourism hubs. We
              figured the major tourism hubs were Kathmandu, the capital city of
              Nepal that houses the only international airport in Nepal.
              Pokhara, which has the route to Annapurna trekking. The area is
              also famous for adventure sports. Next, we have Chitwan - the
              gateway to national parks.
            </Typography>
          </>
        );
      }
      case 2: {
        return (
          <>
            <Typography paragraph>
              This map depicts the nature and distribution of tourism skills
              that Kathmandu draws from its surrounding districts.
            </Typography>
            <Typography paragraph>
              Based on our workforce survey, 51% of our respondents mentioned
              Kathmandu as one of their major tourism-related workplaces.
              <ul>
                <li>
                  Among them, 52% are trekking guides and 31 % are tour guides.
                  Travel agents and hotel staffs are 7% each.
                </li>
                <li>
                  {' '}
                  Also from the survey we have found that 16% of the respondents
                  are from Kathmandu.
                </li>
              </ul>
            </Typography>
          </>
        );
      }
      case 3: {
        return (
          <>
            <Typography paragraph>
              What also makes the Nepali tourism industry interesting is the way
              tourists navigate the country. At present, the country has only
              one point of entry via air travel -- Tribhuvan International
              Airport. As a result, incoming international tourists --
              regardless of their destination -- usually find the need to park
              themselves at Kathmandu both at the beginning and end of their
              travels.
            </Typography>
          </>
        );
      }
      case 4: {
        return (
          <>
            <Typography paragraph>
              This map is a standard univariate product that shows district-wise
              distribution of our respondents, or how reported tourism
              occupations vary across districts.
            </Typography>
            <Typography paragraph>
              Turns out 20% of our respondents are from Solukhumbu district,
              where the highest peak of the world, Mount Everest is located.
              Most of the respondents here are Mountain and trekking guides.
            </Typography>
          </>
        );
      }
      default: {
        return '';
      }
    }
  };
  return (
    <>
      <div className="static-maps-container">
        {staticMaps.map((map, index) => (
          <Paper
            key={uid(map, index)}
            elevation={1}
            style={{
              padding: '1rem',
              width: '49%',
              marginTop: '3rem',
              marginBottom: '3rem',
            }}
            className="static-map-step static-map static-paper"
          >
            <Typography
              variant="h6"
              gutterBottom
              style={
                {
                  // color: 'rgba(0,0,0,0.5)',
                }
              }
            >
              {map.title}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ lineHeight: '1.2', color: 'rgba(0,0,0,0.5)' }}
              gutterBottom
            >
              {getDescription(index + 1)}
            </Typography>
            <ZoomImage src={map.fileName} alt={map.title} />
          </Paper>
        ))}
      </div>
    </>
  );
}

StaticMaps.propTypes = {};

export default StaticMaps;
