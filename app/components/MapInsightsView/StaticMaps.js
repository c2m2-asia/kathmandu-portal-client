/**
 *
 * About
 *
 */

import React from 'react';
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
    fileName: 'map-insight-1.png',
    title: 'Distribution of respondents by occupation and district',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    fileName: 'migration-pokhara.png',
    title: 'Flow of Tourism Workers to Pokhara with Different Skills',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    fileName: 'migration-kathmandu.png',
    title: 'Flow of Tourism Workers to Pokhara with Different Skills',
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
    title: 'Geographical Distribution of TOurism Workers by Their Occupation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    fileName: 'perma-addr-distribution.png',
    title: 'Distribution of Tourism Workers by Their Permanent Address ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    fileName: 'tourism-destinations.png',
    title: 'Major Tourism Destinations',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
];

function StaticMaps() {
  return (
    <>
      <div className="static-maps-container">
        {staticMaps.map(map => (
          <Paper
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
              {map.description}
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
