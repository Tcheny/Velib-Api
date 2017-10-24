import React, { Component } from 'react';

// const googleapis = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDLfbhY1Ec03QlSp80TUXxjpv8Ldc3AHCk&callback=initMap"

class Maps extends Component {

  render() {
    return (
      <div>
        <iframe src="https://opendata.paris.fr/explore/embed/dataset/stations-velib-disponibilites-en-temps-reel/map/?location=16,48.85744,2.44091&static=false&datasetcard=false" width="50%" height="600" frameBorder="0"></iframe>
      </div>
    );
  }

}

export default Maps;
