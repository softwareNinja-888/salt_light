import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export function MapLocation(arr = []) {
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const [markers, setMarkers] = useState(arr.arr);
  const [error, setError] = useState(null);

  const mapContainerStyle = {
    width: '100%',
    height: '500px',
  };

  useEffect(() => {
    // Get user's location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (err) => {
          setError('Failed to fetch location. Please allow location access.');
          console.error(err);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }

  }, []);

  console.log(markers)

  return (
    <div>
      {error && <p>{error}</p>}
      {!error && (
        <LoadScript googleMapsApiKey="AIzaSyCqNX9g0Wc6M1w2rJxVruTfnPxXGRcfKMc">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={userLocation} // Centered at the user's location
            zoom={12}
          >
            {/* User's location marker */}
            <Marker
              position={userLocation}
              icon={{
                url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
              }}
            />

            {/* Markers from database */}
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng }}
                title={marker.name} // Display marker's name on hover
              />
            ))}
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};
