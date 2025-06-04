import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapWindow.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuNjhib3QiLCJhIjoiY21hdDZhZmZpMGFidTJqb2lmNmZnZXRmdyJ9.AS1DsjNRhA8ylzhnx9P84g';

const MapWindow = () => {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);

    const initialLng = -98.5795;
    const initialLat = 39.8283;
    const initialZoom = 3.5;

    const [, setCurrentLng] = useState(initialLng);
    const [, setCurrentLat] = useState(initialLat);
    const [, setCurrentZoom] = useState(initialZoom);

    useEffect(() => {
        if (mapInstanceRef.current || !mapContainerRef.current) return;

        mapInstanceRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [initialLng, initialLat],
            zoom: initialZoom,
        });

        const map = mapInstanceRef.current;

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        const updateMapViewState = () => {
            setCurrentLng(map.getCenter().lng.toFixed(4));
            setCurrentLat(map.getCenter().lat.toFixed(4));
            setCurrentZoom(map.getZoom().toFixed(2));
        };

        map.on('move', updateMapViewState);
        map.on('zoom', updateMapViewState);

        return () => {
            map.off('move', updateMapViewState);
            map.off('zoom', updateMapViewState);
            map.remove();
            mapInstanceRef.current = null;
        };
    }, [initialLng]);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div ref={mapContainerRef} className="map-container" style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default MapWindow;