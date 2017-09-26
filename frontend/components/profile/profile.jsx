import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import PhotoModal from './modal';
import Dropzone from 'react-dropzone';

let className = "hide";

const modalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.5)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    top             : '50px',
    left            : '300px',
    right           : '300px',
    bottom          : '50px',
    border          : '1px solid #ccc',
    padding         : '50px',
    overflow        : 'none',
    zIndex          : 11,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'

  }
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false, imageUrl: "", imageFile: null};
    this.deleteButton = this.deleteButton.bind(this);
    this.addPhotoClick = this.addPhotoClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    const reader = new FileReader();
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  addPhotoClick(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  handleSubmit() {
    const formData = new FormData();
    formData.append("photo[image]", this.state.imageFile);
    this.props.addPhoto(formData);
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
      <Modal
        isOpen={this.state.modalIsOpen}
        contentLabel="add-photo-modal"
        style = {modalStyle}>
        <a onClick={this.closeModal}>x</a>
        <Dropzone
          accept="image/*"
          onDrop={this.onImageDrop}
          className="dropzone">
          <p>Drop an image to submit or click to select a file to upload.</p>
          <img src={this.state.imageUrl}></img>
          <button type="submit" className="modal-submit"
            onClick={this.handleSubmit}>Submit
          </button>
        </Dropzone>
      </Modal>
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
