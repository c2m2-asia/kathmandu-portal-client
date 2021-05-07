/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'components/NavBar';
import ChartInsightsPage from 'containers/ChartInsightsPage/Loadable';
import MapInsightsView from 'components/MapInsightsView/Loadable';
import VisualizationSelectionView from 'components/VisualizationSelectionView/Loadable';
import StoriesListView from 'components/StoriesListView/Loadable';
import StoryDetailView from 'components/StoryDetailView/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/stories" component={StoriesListView} />
        <Route exact path="/stories/:id" component={StoryDetailView} />
        <Route
          exact
          path="/visualizations"
          component={VisualizationSelectionView}
        />
        <Route exact path="/chart-insights" component={ChartInsightsPage} />
        <Route exact path="/map-insights" component={MapInsightsView} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
