import React, { Component } from 'react';
import ReactModal from 'react-modal';
import request from 'request';
import Modal from './Modal';

import config from '../config';

class Display extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : [], // state de data = []
      showModal: false // state du Modal
    };
  }

  //
  componentWillReceiveProps(nextProps) {
    // request permet de faire une requête à l'API JCD pour récuperer la donnée.
    request(`https://api.jcdecaux.com/vls/v1/stations?contract=paris&apiKey=${config.jcdKey}`, (err, res, body) => {
      // filtre la donnée
      let query = JSON.parse(body).filter(stations => {
        // RegExp de notre state velibNum
        let VelibNumregex = new RegExp(nextProps.num, 'gi');
        // filtre la donnée pour match avec l'input de la state velibNum
        return stations.address.match(VelibNumregex)
        })

    this.setState({
        data : query,
        })
        console.log(this.state.data);
    })
  }

  handleModal=()=>{
     this.setState({ showModal: !this.state.showModal });
   }

  render() {

    return (
      <div className="Display">
        <ul className="List">
          {this.state.data.map((stations, index) => {
            return <div className="station">
                <li key={index} onClick={this.handleModal}>
                  {stations.name.slice(8)}
                  <div>
                    <p>
                      {stations.address}
                    </p>
                    <p>
                      Place total : {stations.bike_stands}
                    </p>
                    <p>
                      Emplacements disponible : {stations.available_bike_stands}
                    </p>
                    <p>
                      Vélibs disponible : {stations.available_bikes}
                    </p>
                  </div>
                </li>
              </div>;
          })}
        </ul>
      </div>
    );
  }
}

export default Display;
