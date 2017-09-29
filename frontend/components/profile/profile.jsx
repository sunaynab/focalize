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
    this.unfollow = this.unfollow.bind(this);
    this.follow = this.follow.bind(this);
  }

  // photos

  componentWillMount() {
    this.props.getUserPhotos(this.props.userId);
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params !== newProps.match.params){
      this.props.getUserPhotos(newProps.userId);
    }
  }

  deleteButton(photoId){
    if(parseInt(this.props.userId) === this.props.currentUser.id){
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

  //following

  unfollow() {
    this.props.unfollowUser(this.props.userId);
    this.props.getUserPhotos(this.props.userId);
  }

  follow() {
    this.props.followUser(this.props.userId);
    this.props.getUserPhotos(this.props.userId);
  }

  followingStatus() {
    if (parseInt(this.props.userId) !== this.props.currentUser.id){
      if (this.props.user.current_user_follows === "true"){
        return(
          <button onClick={this.unfollow} className="following-button true">Following</button>
        );
      }else{
        return(
          <button onClick={this.follow} className="following-button false">Follow</button>
        );
      }
    }
  }



  // render

  render() {
    let submitPhoto;
    let profilePhotoModal;
    let status = "disabled";
    if(parseInt(this.props.userId) === this.props.currentUser.id){
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
      status = "active";
    }
    return (
    <div className="profile-page">
      {submitPhoto}
      <PhotoModal imageModalIsOpen={this.state.imageModalIsOpen}
        closeImageModal={this.closeImageModal}
        addPhoto={this.props.addPhoto}/>
      {profilePhotoModal}
      <div className="profile-page-image">
        <a className={status} onClick={this.addProfileImageClick}>
          <img src={this.props.user.image_url}></img>
        </a>
      </div>
      <span className= "name">{this.props.user.username}</span>
      <div className="stats">
        <span><strong>{this.props.numFollowers}</strong> followers</span>
        <span className="divider">|</span>
        <span><strong>{this.props.numFollowing}</strong> following</span>
      </div>
        {this.followingStatus()}
      <div className="pictures-grid grid">
        {this.photoLinks()}
      </div>
    </div>
    );
  }
}

export default Profile;
