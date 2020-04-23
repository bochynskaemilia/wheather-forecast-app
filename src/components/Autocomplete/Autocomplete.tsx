import React, { useCallback } from 'react';
import Suggest from 'react-autosuggest';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../store/actions';
import selectors from '../../store/selectors';
import { IProcessedGeoposition } from '../../types/geolocationTypes';
import Error from '../Error/Error';

const Autocomplete = () => {
  const searchValue = useSelector(selectors.searchWeather.getSearchValue);
  const locations = useSelector(selectors.searchWeather.getAutocompleteLocations);
  const isError = useSelector(selectors.searchWeather.isAutocompleteError);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    (_event, { newValue }) => {
      dispatch(actions.searchWeather.setSearchValue(newValue));
    },
    [dispatch],
  );

  const handleSuggest = useCallback(
    () => {
      dispatch(actions.searchWeatherSaga.fetchAutocompleteLocations());
    },
    [dispatch],
  );

  const handleSelect = useCallback(
    () => {
      dispatch(actions.searchWeather.setSearchValue(''));
    },
    [dispatch],
  );

  const handleClear = useCallback(
    () => {
      dispatch(actions.searchWeather.clearLocations());
    },
    [dispatch],
  );

  const renderSuggestion = useCallback(
    (suggestion: IProcessedGeoposition) => (
      <Link to={`/${suggestion.location}/${suggestion.country}/${suggestion.userLocationKey}`}>
        <span className="autocomplete-item">{`${suggestion.location}, ${suggestion.country}`}</span>
      </Link>
    ),
    [],
  );

  const getSuggestionValue = useCallback(
    (suggestion: IProcessedGeoposition) => suggestion.location,
    [],
  );

  const props = {
    value: searchValue,
    onChange: handleChange,
    placeholder: 'Search weather',
  };

  if (isError) {
    return (
      <Error message="Cannot search locations" />
    );
  }

  return (
    <Suggest
      suggestions={locations}
      onSuggestionsFetchRequested={handleSuggest}
      onSuggestionsClearRequested={handleClear}
      renderSuggestion={renderSuggestion}
      getSuggestionValue={getSuggestionValue}
      onSuggestionSelected={handleSelect}
      inputProps={props}
    />
  );
};


export default Autocomplete;
