import React from 'react';
import {Link} from 'react-router-dom';
import PhotoModal from './photo_modal';
import ProfilePhotoModal from './profile_photo_modal';
let className = "hide";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imageModalIsOpen: false, profileModalIsOpen: false};
    this.addPhotoClick = this.addPhotoClick.bind(this);
    this.closeImageModal = this.closeImageModal.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.addProfileImageClick = this.addProfileImageClick.bind(this);
    this.closeProfileModal = this.closeProfileModal.bind(this);
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
      <div key={`div${photo.id}`} className="photo-links grid-item">
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
    this.setState({imageModalIsOpen: true});
  }

  closeImageModal(){
    this.setState({imageModalIsOpen: false});
  }

  addProfileImageClick() {
    this.setState({profileModalIsOpen: true});
  }

  closeProfileModal() {
    this.setState({profileModalIsOpen: false});
  }



  // render

  render() {
    let submitPhoto;
    let profilePhotoModal;
    if(parseInt(this.props.match.params.userId) === this.props.currentUser.id){
      submitPhoto = (
        <div className="submit-photo">
          <button className="new-photo" onClick={this.addPhotoClick}>+</button>
          <span>Submit Photo</span>
        </div>
      );
      profilePhotoModal = (<ProfilePhotoModal profileModalIsOpen={this.state.profileModalIsOpen}
        closeProfileModal={this.closeProfileModal}
        addProfilePhoto={this.props.addProfilePhoto}
        currentUser={this.props.currentUser}
        />);
    }
    return (
    <div className="profile-page">
      {submitPhoto}
      <PhotoModal imageModalIsOpen={this.state.imageModalIsOpen}
        closeImageModal={this.closeImageModal}
        addPhoto={this.props.addPhoto}/>
      {profilePhotoModal}
      <div className="profile-page-image">
        <a onClick={this.addProfileImageClick}>
          <img src={this.props.user.image_url}></img>
        </a>
      </div>
      <span className= "name">{this.props.user.username}</span>
      <div className="stats">
        <span># followers</span><span># following</span>
      </div>
      <button className="following-button">Following Status</button>
      <div className="pictures-grid grid">
        {this.photoLinks()}
      </div>
    </div>
    );
  }
}

export default Profile;
