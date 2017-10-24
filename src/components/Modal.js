import React, { Component } from 'react';
import ReactModal from 'react-modal';

class Modal extends Component {
  constructor(props){
        super();
        this.state = {
            address : props.address,
            availableBikeStands: props.place,
            available_bikes: props.emplacement,
            bikeStands: props.disponible,
        }
    }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.openModal}
        >
          <div className='description'>
            <div className='details'>
              <div>
                <div>Adresse</div>
                <div>{this.state.address}</div>
              </div>
              <div>
                <div>Place total</div>
                <div>{this.state.bikeStands}</div>
              </div>

              <div>
                <div>Emplacements disponible</div>
                <div>{this.state.availableBikeStands}</div>
              </div>
              <div>
                <div>Vélibs disponible</div>
                <div>{this.state.available_bikes}</div>
              </div>
            </div>
          </div>
          <button onClick={this.props.closeModal.bind(this)}>Close</button>
        </ReactModal>
      </div>
    );
  }

}

export default Modal;
