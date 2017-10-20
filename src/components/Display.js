import React, { Component } from 'react';
import request from 'request';

class Display extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }

  componentWillReceiveProps(nextProps) {
    request("https://api.jcdecaux.com/vls/v1/stations?contract=paris&apiKey=6280ec214b08369c3e2790528ec0ac5e30dfbede", (err, res, body) => {
      let query = JSON.parse(body).filter(stations => {
        let regex = new RegExp(nextProps.address, 'gi');
        return stations.address.match(regex)
        })

    this.setState({
        data : query
        })
      console.log(this.state.data[0]);
    })
  }

  render() {
    return (
      <ul>
        {this.state.data.map((stations, index) => {
          return( <li key={index}>{stations.address} <br/>
            Nombre de vélib: {stations.available_bike_stands} Vélib disponible : {stations.available_bikes}
          </li>)
        })}
      </ul>
    );
  }

}

export default Display;
