import { useState, useEffect } from 'react';

const useGoogleMapsApi = (apiKey: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGoogleMapsApi = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.google && window.google.maps) {
          // La API ya está cargada
          resolve();
          return;
        }

        const existingScript = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
        if (existingScript) {
          // Si el script ya está presente, resolvemos la promesa
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true; 
        script.defer = true; 
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Google Maps API'));

        document.head.appendChild(script);
      });
    };

    loadGoogleMapsApi()
      .then(() => setIsLoaded(true))
      .catch((err) => setError(err.message));
  }, [apiKey]);

  return { isLoaded, error };
};

export default useGoogleMapsApi;
