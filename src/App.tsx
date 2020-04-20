import React, { useEffect } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import OneDayForecast from './pages/OneDayForecast/OneDayForecast';
import paths from './constants/paths';
import ForecastSearch from './pages/ForecastSearch/ForecastSearch';
import LongTermForecast from './pages/LongTermForecast/LongTermForecast';
import actions from './store/actions';
import Header from './components/Header/Header';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.geolocationSaga.fetchGeolocation());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
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
  );
}

export default App;
