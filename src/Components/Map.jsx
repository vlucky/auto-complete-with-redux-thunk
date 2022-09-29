import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = ({ zoom, className, onSetPlaceService, geometry }) => {
  const mapRef = useRef();


  useEffect(() => {

    let _geometry = JSON.parse(geometry);

    console.log("GEOMETRy", _geometry);

    if (_geometry === null) {
      _geometry = { location: { lat: 3.140853, lng: 101.693207 } };
    }

    const map = new window.google.maps.Map(mapRef.current, {
      center: _geometry && _geometry.location,
      zoom: zoom,
    });

    const marker = new window.google.maps.Marker({
      position: _geometry && _geometry.location,
      map: map,
    });

    if (_geometry && _geometry.location && _geometry.viewport) {
      map.fitBounds(_geometry.viewport);
      marker.setPosition(_geometry.location);
      marker.setVisible(true);
    }

    const service = new window.google.maps.places.PlacesService(map);

    onSetPlaceService(service);

  }, [zoom, onSetPlaceService, geometry]);

  return (
    <div ref={mapRef} className={"map"}>
      DIV
    </div>
  );
};

export default Map;
