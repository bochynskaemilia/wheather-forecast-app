import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import OneDayForecast from './pages/OneDayForecast/OneDayForecast';
import paths from './constants/paths';
import ForecastSearch from './pages/ForecastSearch/ForecastSearch';
import LongTermForecast from './pages/LongTermForecast/LongTermForecast';
import initStore from '../src/store';

function App() {
  return (
    <Provider store={initStore()}>
      <div className="App">
        <Switch>

          <Route path={paths.search}>
            <ForecastSearch />
          </Route>

          <Route path={paths.longTermForecast}>
            <LongTermForecast />
          </Route>

          <Route path={paths.root}>
            <OneDayForecast />
          </Route>

        </Switch>
      </div>
    </Provider>
  );
}

export default App;
