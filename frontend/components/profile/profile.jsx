import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import PhotoModal from './modal';

let className = "hide";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
    this.state = {modalIsOpen: "false"};
  }

  componentDidMount() {
    this.props.getUserPhotos(this.props.userId);
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params !== newProps.match.params){
      this.props.getUserPhotos(newProps.userId);
    }
  }

  deleteButton(photoId){
    if(parseInt(this.props.match.params.userId) === this.props.currentUser.id){
      return (
        <button className="delete-button" onClick={() => this.props.deletePhoto(photoId)}>X</button>
      );
    }
  }

  addPhotoClick(){

  }

  photoLinks() {
    let deleteButton;
    if (this.props.photos.length !== 0){
      deleteButton = this.deleteButton;
    }
    const links = this.props.photos.map(photo => (
      <div className="photo-links">
        <Link key={`photo${photo.id}`}className="zoom" to={`/photos/${photo.id}`}>
          <img src={photo.image_url}></img>
        </Link>
          {deleteButton(photo.id)}
      </div>
    ));

    return links;
  }

  render() {
    return (
    <div className="profile-page">
      <Modal
        isOpen={this.state.modalIsOpen}
        onHide={this.close}></Modal>
      <div className="submit-photo-div">
        <button className="submit-button"></button>
      </div>
      <div className="profile-page-image">
        <img src={this.props.user.image_url}></img>
      </div>
      <span className= "name">{this.props.user.username}</span>
      <div className="stats">
        <span># followers</span><span># following</span>
      </div>
      <button className="following-button">Following Status</button>
      <div className="pictures-grid">
        {this.photoLinks()}
      </div>
    </div>
    );
  }
}

export default Profile;
