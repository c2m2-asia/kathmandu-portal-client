/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import LandingPage from 'components/LandingPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'components/NavBar';
import ScrollToTopButton from 'components/ScrollToTopButton';
import ChartInsightsPage from 'containers/ChartInsightsPage/Loadable';
import MapInsightsPage from 'containers/MapInsightsPage/Loadable';
import VisualizationSelectionView from 'components/VisualizationSelectionView/Loadable';
import StoriesListView from 'components/StoriesListView/Loadable';
import StoryDetailView from 'components/StoryDetailView/Loadable';
import DownloadView from 'components/DownloadView/Loadable';
import UnivariateChartPage from 'containers/UnivariateChartPage/Loadable';
import About from 'components/About';

import GlobalStyle from '../../global-styles';

export default function App() {
  useEffect(() => {
    ReactGA.initialize('UA-201397099-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/stories" component={StoriesListView} />
        <Route exact path="/about" component={About} />
        <Route exact path="/stories/:id" component={StoryDetailView} />
        <Route
          exact
          path="/visualizations"
          component={VisualizationSelectionView}
        />
        <Route
          exact
          path="/visualizations/chart-insights"
          component={ChartInsightsPage}
        />
        <Route
          exact
          path="/visualizations/map-insights"
          component={MapInsightsPage}
        />
        <Route exact path="/univariate" component={UnivariateChartPage} />
        <Route exact path="/downloads" component={DownloadView} />
        <Route component={NotFoundPage} />
      </Switch>
      <ScrollToTopButton />
      <GlobalStyle />
    </div>
  );
}
