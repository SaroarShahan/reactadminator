import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import styled from 'styled-components';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const MapContainer = ({google}) => {
  return (
    <MapWrapper>
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      />
    </MapWrapper>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_API_KEY_GOES_HERE'
})(MapContainer);

const MapWrapper = styled.div`
  position: relative;
  height: calc(100vh - 11rem);
`;
