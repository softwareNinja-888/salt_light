
// components/ChurchLocator.jsx
import React, { useCallback } from "react";
import { GoogleMap, LoadScript, MarkerF, useJsApiLoader } from "@react-google-maps/api";



const containerStyle = {
  width: "100%",
  height: "100vh",
};




export function ChurchLocator(church=[]){
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCqNX9g0Wc6M1w2rJxVruTfnPxXGRcfKMc", // Replace with your API key
  });

   const onLoad = useCallback((mapInstance) => {
    console.log("Map Loaded:", mapInstance);
  }, []);

  // Callback to handle marker loading
  const onMarkerLoad = useCallback((marker) => {
    console.log("Marker Loaded:", marker);
  }, []);

  const formatChurch = church.churches[0]

  if (!isLoaded)
    return <div className="flex justify-center items-center h-screen">Loading Map...</div>;

  return (
    <div id="map" className="w-full h-screen relative">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={formatChurch.position}
        zoom={10}
        onLoad={onLoad}
        options={{
          disableDefaultUI: true, // Removes unnecessary UI elements
          clickableIcons: false, // Disables default POI clicks
          gestureHandling: "cooperative", // Prevents over-zooming on touch devices
        }}
      >
          <MarkerF
            key={formatChurch.id}
            position={formatChurch.position}
            title={formatChurch.name}
            onLoad={onMarkerLoad}
          />
       </GoogleMap>
    </div>
  );
};
