import React from 'react';
import Modal from 'react-modal';

const modalStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.4)'
  },
  content : {
    top                        : '10px',
    left                       : '10px',
    right                      : '10px',
    bottom                     : '10px',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
    padding                    : '20px'
  }
};

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        isOpen={this.props.clicked}
        onRequestClose={this.props.onRequestClose}
        contentLabel="Modal"
        style={modalStyles}>
        <div className="photo"
          onClick={this.props.onClick}>
          <div className="profile-info">
            <div className="profile-image">
              <img src={this.props.user.image_url}></img>
            </div>
              <span>{this.props.user.username}</span>
          </div>
            <img className="picture" src={this.props.photo.image_url}></img>
        </div>
      </Modal>
    );
  }
}

export default PhotoModal;
