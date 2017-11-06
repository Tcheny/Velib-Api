import React, { Component } from 'react';
import { GoogleMap, Marker } from "react-google-maps"

  </GoogleMap>

// const googleapis = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDLfbhY1Ec03QlSp80TUXxjpv8Ldc3AHCk&callback=initMap"

class Maps extends Component {
  const MyMapComponent = (props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  render() {
    return (
      <div>

      </div>
    );
  }

}

export default Maps;
