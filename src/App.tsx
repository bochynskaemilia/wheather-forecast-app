import React, { useEffect } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OneDayForecast from './pages/OneDayForecast/OneDayForecast';
import paths from './constants/paths';
import ForecastSearch from './pages/ForecastSearch/ForecastSearch';
import LongTermForecast from './pages/LongTermForecast/LongTermForecast';
import actions from './store/actions';
import Header from './components/Header/Header';
import selectors from './store/selectors';

function App() {
  const dispatch = useDispatch();
  const userLocationKey = useSelector(selectors.geolocation.getUserLocation);

  useEffect(() => {
    dispatch(actions.geolocationSaga.fetchGeolocation());
  }, [dispatch]);

  useEffect(() => {
    if (userLocationKey) {
      dispatch(actions.currentWeatherSaga.fetchCurrentWeather());
    }
  }, [dispatch, userLocationKey]);

  return (
    <div className="App">
      <Header />
      <Switch>

        <Route path={paths.search} component={ForecastSearch} />

        <Route path={paths.longTermForecast} component={LongTermForecast} />

        <Route path={paths.root} component={OneDayForecast} />

      </Switch>
    </div>
  );
}

export default App;
