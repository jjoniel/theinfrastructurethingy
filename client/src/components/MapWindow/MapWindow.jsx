import React, {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapWindow.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FuNjhib3QiLCJhIjoiY21hdDZhZmZpMGFidTJqb2lmNmZnZXRmdyJ9.AS1DsjNRhA8ylzhnx9P84g';
if (MAPBOX_TOKEN && MAPBOX_TOKEN !== 'YOUR_MAPBOX_ACCESS_TOKEN') {
    mapboxgl.accessToken = MAPBOX_TOKEN;
}

const cityImageMap = {
    'Springfield': '/images/cities/city1.png',
    'Metropolis': '/images/cities/city2.png',
    'Gotham City': '/images/cities/city3.png',
};

const MapWindow = ({ city }) => {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (city) {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
            return;
        }

        if (!mapInstanceRef.current && mapContainerRef.current) {
            if (!MAPBOX_TOKEN || MAPBOX_TOKEN === 'YOUR_MAPBOX_ACCESS_TOKEN') {
                console.error("Mapbox token is not set. Map cannot be initialized.");
                return;
            }

            mapInstanceRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/dark-v11',
                center: [-98.5795, 39.8283],
                zoom: 3.5,
            });
        }

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, [city]);

    return (
        <div className="map-window-container">
            {city && cityImageMap[city] ? (
                <div
                    className="map-image-background"
                    style={{ backgroundImage: `url(${cityImageMap[city]})` }}
                />
            ) : (
                <div ref={mapContainerRef} className="map-container" />
            )}
        </div>
    );
};

export default MapWindow;