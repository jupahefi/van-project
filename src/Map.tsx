import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const apiKey = 'AIzaSyCnAJoYvPDYBVOk5Y-aTA26NnzTQKi44pk'; 

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: -33.50972,
  lng: -70.76167, // Coordenadas de Plaza de Maipú
};

const Map: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ['places'], // Puedes agregar más bibliotecas si las necesitas
  });

  if (loadError) {
    return <div>Error loading Google Maps API: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Puedes agregar marcadores u otros componentes aquí */}
    </GoogleMap>
  );
};

export default Map;
