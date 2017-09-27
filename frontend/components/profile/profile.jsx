import React from 'react';
import {Link} from 'react-router-dom';
import PhotoModal from './modal';


let className = "hide";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};
    this.addPhotoClick = this.addPhotoClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }

  // photos

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
        <button className="delete-button" key={`del${photoId}`} onClick={() => this.props.deletePhoto(photoId)}>X</button>
      );
    }
  }

  photoLinks() {
    let deleteButton;
    if (this.props.photos.length !== 0){
      deleteButton = this.deleteButton;
    }
    const links = this.props.photos.map(photo => (
      <div key={`div${photo.id}`} className="photo-links">
        <Link key={`photo${photo.id}`}className="zoom" to={`/photos/${photo.id}`}>
          <img key={`pic${photo.id}`}src={photo.image_url}></img>
        </Link>
          {deleteButton(photo.id)}
      </div>
    ));

    return links;
  }

  //Modal

  addPhotoClick(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  // render

  render() {
    const addPhoto = this.props.addPhoto;
    const currentUser = this.props.currentUser;
    const imageFile = this.state.imageFile;
    return (
    <div className="profile-page">
      <div className="submit-photo">
        <button className="new-photo" onClick={this.addPhotoClick}>+</button>
        <span>Submit Photo</span>
      </div>
      <PhotoModal modalIsOpen={this.state.modalIsOpen}
        closeModal={this.closeModal}/>
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
