import React from 'react';
import { GoogleMap } from '@react-google-maps/api';
import useGoogleMapsApi from './useGoogleMapsApi';

const apiKey = 'AIzaSyCnAJoYvPDYBVOk5Y-aTA26NnzTQKi44pk'; // Reemplaza con tu clave API

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

const Map: React.FC = () => {
  const { isLoaded, error } = useGoogleMapsApi(apiKey);

  if (error) {
    return <div>Error loading Google Maps API: {error}</div>;
  }

  return (
    <div style={containerStyle}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {/* Puedes agregar marcadores u otros componentes aquí */}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Map;
