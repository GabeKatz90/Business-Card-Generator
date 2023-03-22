import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import '../map/map.css'

function MapContainer() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  const LocationPin = ({ text }) => (
    <div className="pin">
      <PersonPinCircleIcon />
      <p className="pin-text">{text}</p>
    </div>
  )

  useEffect(() => {
    getLocation();
  }, []);

  const position = { lat, lng };

  const zoomLevel = 14;

  return (
    <div>
      <div className="map">
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
            center={position}
            defaultZoom={zoomLevel}
            yesIWantToUseGoogleMapApiInternals
          >
            <LocationPin
              lat={lat}
              lng={lng}
              text={
                status === null 
                ? "Your Location" 
                : status}
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}

export default MapContainer;