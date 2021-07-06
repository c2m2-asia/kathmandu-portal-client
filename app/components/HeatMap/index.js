/**
 *
 * HeatMap
 *
 */

import React, { Component, memo } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import school from './schools';
import TimelineSlider from 'components/TimelineSlider/Loadable';
import {primary} from 'theme';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import './styles.css';

class HeatMap extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.addMap();
  }

  addMap() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiaGVsbmVyc2hpbmd0aGFwYSIsImEiOiJjazc1cW1uaXkwanVoM2VyeWU3emUyMm0wIn0.Ulemzd1lMM2O6nEfk91bmw';
    const map = new mapboxgl.Map({
      container: this.node,
      style:
        'https://api.baato.io/api/v1/styles/breeze?key=bpk.vEXF2Aj-xkyk-xBSu2Z_w1N8JFss7z-Dzxygnj9I0vBE',
      center: [85.3175, 27.7109],
      zoom: 12.5,
      attributionControl: false,
      // logoPosition: 'top-right',
    });

    // const nav = new mapboxgl.NavigationControl();
    // map.addControl(nav, "top-left");

    this.map = map;

    map.on('load', function() {
      map.addSource('schools', {
        type: 'geojson',
        data: school,
      });

      // add heatmap layer here
      map.addLayer({
        id: 'trees-heat',
        type: 'heatmap',
        source: 'schools',
        maxzoom: 15,
        paint: {
          // increase weight as diameter breast height increases
          'heatmap-weight': 0.5,
          // increase intensity as zoom level increases
          'heatmap-intensity': {
            stops: [[11, 1], [15, 3]],
          },
          // assign color values be applied to points depending on their density
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0,
            'rgba(33,102,172,0)',
            0.2,
            '#ffffd9',
            0.4,
            '#c7e9b4',
            0.6,
            '#41b6c4',
            0.8,
            '#225ea8',
            1,
            '#081d58',
          ],
          // increase radius as zoom increases
          'heatmap-radius': {
            stops: [[11, 15], [15, 20]],
          },
          // decrease opacity to transition into the circle layer
          'heatmap-opacity': 0.7,
        },
      });

      // add circle layer here

      map.addLayer({
        id: 'trees-point',
        type: 'circle',
        source: 'schools',
        minzoom: 14,
        paint: {
          // increase the radius of the circle as the zoom level and dbh value increases
          'circle-radius': {
            property: 'student:count',
            type: 'exponential',
            stops: [
              [{ zoom: 15, value: 100 }, 5],
              [{ zoom: 15, value: 800 }, 10],
              [{ zoom: 22, value: 100 }, 20],
              [{ zoom: 22, value: 800 }, 50],
            ],
          },

          // "circle-radius": {
          //   base: 1.75,
          //   stops: [
          //     [12, 2],
          //     [22, 180],
          //   ],
          // },

          'circle-color': {
            property: 'student:count',
            type: 'exponential',
            stops: [
              [0, 'rgba(236,222,239,0)'],
              [100, 'rgb(236,222,239)'],
              [200, 'rgb(208,209,230)'],
              [300, 'rgb(166,189,219)'],
              [400, 'rgb(103,169,207)'],
              [500, 'rgb(28,144,153)'],
              [600, 'rgb(1,108,89)'],
            ],
          },
          'circle-stroke-color': 'white',
          'circle-stroke-width': 1,
          'circle-opacity': {
            stops: [[14, 0], [15, 1]],
          },
        },
      });

      map.on('click', 'trees-point', function(e) {
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(
            '<b>Number of students</b> ' +
              e.features[0].properties['student:count'],
          )
          .addTo(map);
      });
    });
  }

  render() {
    return (
      <div
        ref={node => (this.node = node)} //eslint-disable-line
        style={{
          height: '100%',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            zIndex: '10',
            padding: '0 5px',
            backgroundColor: 'hsla(0,0%,100%,.5)',
            margin: '0',
            position: 'absolute',
            bottom: '0px',
            right: '0px',
          }}
        >
          {' '}
          ©{' '}
          <a
            href="https://www.openstreetmap.org/copyright"
            rel="noopener noreferrer no follow"
            target="_blank"
            style={{textDecoration: 'none', color: primary}}
          >
            OpenStreetMap contributors
          </a>
        </div>
        <div
          style={{
            zIndex: '100',
            padding: '0 5px',
            backgroundColor: 'hsla(0,0%,100%,.5)',
            margin: '0',
            position: 'absolute',
            bottom: '0px',
            left: '0px',
          }}
        >
          <a
            href="https://baato.io"
            rel="noopener noreferrer no follow"
            target="_blank"
          >
            <img
              src="https://sgp1.digitaloceanspaces.com/baatocdn/images/BaatoLogo.svg"
              alt="Baato"
              width="80px"
            />
          </a>
        </div>
        <div
          style={{
            zIndex: '100',
            padding: '0 5px',
            margin: '0',
            position: 'absolute',
            bottom: '25px',
            right: '0px',
          }}
        >
          <TimelineSlider />
        </div>
      </div>
    );
  }
}

HeatMap.propTypes = {};

export default memo(HeatMap);
