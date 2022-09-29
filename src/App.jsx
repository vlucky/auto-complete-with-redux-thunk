import React, { useEffect, useRef, useState } from "react";
import Map from "./Components/Map";
import Search from "./Components/Search";

import "./App.css";
import { useDispatch, useSelector } from 'react-redux';

import { fetchPlaceDetailsAsync } from "./Store/fetchPlaceDetailsAsync";
import { fetchPlacePredictionsAsync } from './Store/fetchPlacePredictionsAsync';

const App = () => {

  const { results } = useSelector((state) => state.searchResults);
  const { geometry } = useSelector((state) => state.searchResults);
  const [placeService, setPlaceService] = useState(null);

  const dispatch = useDispatch();
  const mapServiceRef = useRef();

  const handleOnChange = (e) => {
    if (e.target.value.length > 0) {
      dispatch(fetchPlacePredictionsAsync({
        input: e.target.value,
        placeService: mapServiceRef.current
      }));
    }
  };

  const handleSelectionChange = (event, name) => {
    const searchedPlace = results.find(place => place.name === name);
    if (searchedPlace) {
      dispatch(fetchPlaceDetailsAsync({ id: searchedPlace.id, placeService }));
    }
  }

  useEffect(() => {
    mapServiceRef.current = new window.google.maps.places.AutocompleteService();
  });

  return (
    <div className="container">
      <div className="search-box">
        <Search onChange={handleOnChange} onSelectionChange={handleSelectionChange} options={results && results.map(place => place.name)} />
      </div>
      <div className="map-container">
        <Map zoom={16} geometry={geometry} onSetPlaceService={setPlaceService} />
      </div>
    </div>
  );
};

export default App;
