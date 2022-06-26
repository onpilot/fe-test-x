import React, { useEffect, useRef, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
} from '@react-google-maps/api';
import ic_marker_sm from '../../img/icons/marker/map-marker-sm.png';
import ic_marker_lg from '../../img/icons/marker/map-marker-lg.png';
import style from '../../css/MapApi.module.css';
import { description } from '../../data/description';

const containerStyle = {
  height: '100%',
};

const styles = {
  default: [],
  hide: [
    {
      featureType: 'all',
      stylers: [{ saturation: -100 }],
    },
    {
      featureType: 'administrative',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'administrative.neighborhood',
      stylers: [{ visibility: 'on' }],
    },
    {
      featureType: 'poi',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ visibility: 'on' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text',
      stylers: [{ visibility: 'on' }],
    },
    {
      featureType: 'poi.sports_complex',
      elementType: 'labels.text',
      stylers: [{ visibility: 'on' }],
    },
  ],
};

const MapApi = ({ markers, selectedCity, setSelectedCity }) => {
  const init = useRef({
    center: { lat: 1.290555, lng: 103.856188 },
    zoom: 15,
  });

  const [zoom, setZoom] = useState(init.current.zoom);
  const [center, setCenter] = useState(init.current.center);
  const [isActive, setIsActive] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  const reset = () => {
    setZoom(init.current.zoom);
    setCenter(init.current.center);
    setIsActive(null);
  };

  const handleClick = (position, city) => {
    setZoom(17);
    setCenter(position);
    setSelectedCity(city);
    setIsActive(city);
  };

  useEffect(() => {
    if (selectedCity) {
      const marker = markers.filter((e) => e.name === selectedCity);
      const position = { lat: marker[0].lat, lng: marker[0].lng };
      setCenter(position);
      setZoom(17);
    }
  }, [selectedCity, markers]);

  return (
    <LoadScript googleMapsApiKey='YOUR_API_KEY'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        clickableIcons={false}
        center={center}
        zoom={zoom}
        onRightClick={() => reset()}
        options={{
          // mapId: 'YOUR_MAP_ID',
          styles: styles['hide'],
          mapTypeControl: false,
          streetViewControl: false,
        }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {markers.map((e) => {
          const position = { lat: e.lat, lng: e.lng };
          return (
            <div key={`marker_${e.name}`}>
              <Marker
                position={position}
                label={{
                  color: '#ffffff',
                  fontSize: '16px',
                  className:
                    isHovered === e.name || isActive === e.name
                      ? ''
                      : `${style.map_label}`,
                  text:
                    isHovered === e.name || isActive === e.name ? ' ' : e.name,
                }}
                icon={
                  isHovered === e.name || isActive === e.name
                    ? ic_marker_lg
                    : ic_marker_sm
                }
                onClick={() => handleClick(position, e.name)}
                onMouseOver={() => setIsHovered(e.name)}
                onMouseOut={() => setIsHovered(null)}
              />

              {(isHovered === e.name || isActive === e.name) && (
                <OverlayView
                  position={position}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <div className={style.overlay}>
                    <h1>{e.name}</h1>
                    <p>{description['Merlion'].text[0]}</p>
                  </div>
                </OverlayView>
              )}
            </div>
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MapApi);
