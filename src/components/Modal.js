import React, { Component } from 'react';
import ReactModal from 'react-modal';

class Modal extends Component {

  render() {
    return <div>
        <ReactModal isOpen={this.props.openModal}>
          {this.props.isVelib && (<div className="description">
              <div className="details">
                <div>
                  <div>Adresse</div>
                  <div>{this.props.address}</div>
                </div>
                <div>
                  <div>Place total</div>
                  <div>{this.props.place}</div>
                </div>

                <div>
                  <div>Emplacements disponible</div>
                  <div>{this.props.emplacement}</div>
                </div>
                <div>
                  <div>Vélibs disponible</div>
                  <div>{this.props.disponible}</div>
                </div>
              </div>
            </div>)}
          <button onClick={this.props.closeModal}>Close</button>
        </ReactModal>
      </div>;
  }

}

export default Modal;
