import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 4.401,
  lng: 9.442,
};

function MapWithInfoWindow() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {selectedMarker && (
        <InfoWindow
          position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
          onCloseClick={handleInfoWindowClose}
        >
          <div>
            <h3>{selectedMarker.title}</h3>
            <p>{selectedMarker.description}</p>
          </div>
        </InfoWindow>
      )}
      <Marker
        position={{ lat: 4.401, lng: 9.442 }}
        onClick={() => handleMarkerClick({ lat: 4.401, lng: 9.442, title: "Sawyer Camp", description: "Banga Bakundu" })}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapWithInfoWindow);

