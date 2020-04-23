import React, { useCallback, useState } from 'react';
import Suggest from 'react-autosuggest';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import actions from '../../store/actions';
import selectors from '../../store/selectors';
import { IProcessedGeoposition } from '../../types/geolocationTypes';
import Error from '../Error/Error';

const Autocomplete = () => {
  const [location, setLocation] = useState<IProcessedGeoposition | null>(null);

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
    (_event, { suggestion }: { suggestion: IProcessedGeoposition }) => {
      setLocation(suggestion);
    },
    [],
  );

  const handleClear = useCallback(
    () => {
      dispatch(actions.searchWeather.clearLocations());
    },
    [dispatch],
  );

  const renderSuggestion = useCallback(
    (suggestion: IProcessedGeoposition) => <span>{suggestion.location}</span>,
    [],
  );

  const getSuggestionValue = useCallback(
    (suggestion: IProcessedGeoposition) => suggestion.location,
    [],
  );

  const props = {
    value: searchValue,
    onChange: handleChange,
  };

  if (isError) {
    return (
      <Error message="Cannot search locations" />
    );
  }

  return (
    <div>
      <Suggest
        suggestions={locations}
        onSuggestionsFetchRequested={handleSuggest}
        onSuggestionsClearRequested={handleClear}
        renderSuggestion={renderSuggestion}
        getSuggestionValue={getSuggestionValue}
        onSuggestionSelected={handleSelect}
        inputProps={props}
      />
      {
        location && (
          <Link to={`${location?.location}/${location?.country}/${location?.userLocationKey}`}>
            <FontAwesomeIcon className="search" icon="search-location" />
          </Link>
        )
      }
    </div>
  );
};


export default Autocomplete;
