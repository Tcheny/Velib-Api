import React, { Component } from 'react';
import ReactModal from 'react-modal';
import request from 'request';
import Modal from './Modal';

import config from '../config';

class Display extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : [],
      showModal: false
    };
  }

  componentWillReceiveProps(nextProps) {
    request(`https://api.jcdecaux.com/vls/v1/stations?contract=paris&apiKey=${config.jcdKey}`, (err, res, body) => {
      let query = JSON.parse(body).filter(stations => {
        let regex = new RegExp(nextProps.name, 'gi');
        return stations.address.match(regex)
        })

    this.setState({
        data : query
        })
      console.log(this.state.data[0]);
    })
  }

  handleModal=()=>{
     this.setState({ showModal: !this.state.showModal });
   }

  render() {
    // let noNum = new RegExp(/[\d-]/, 'g')
    return (
      <div className="Display">
        <ul className="List">
          {this.state.data.map((stations, index) => {
            return(
              <div className="station">
                <li key={index} onClick={this.handleModal}> {stations.name.slice(8)}
                  <Modal
                    openModal={this.state.showModal}
                    address={stations.address}
                    place={stations.bike_stands}
                    emplacement={stations.available_bike_stands}
                    disponible={stations.available_bikes}
                    closeModal={this.handleModal}/>
                </li>
              </div>

            )
          })}
        </ul>

      </div>
    );
  }

}

export default Display;
