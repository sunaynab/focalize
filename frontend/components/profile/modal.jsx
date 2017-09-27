import React from 'react';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';
import modalStyle from './modal_style';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imageUrl: "", imageFile: null};
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

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

  handleSubmit() {
    const formData = new FormData();
    formData.append("photo[image]", this.state.imageFile);
    this.props.addPhoto(formData);
  }

  removeImage() {
    this.setState({imageUrl: "", imageFile: null});
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        contentLabel="add-photo-modal"
        style={modalStyle}
        onClick="disabled">
        <a className="close-modal" onClick={this.props.closeModal}>x</a>
        <Dropzone
          accept="image/*"
          onDrop={this.onImageDrop}
          className="dropzone">
          <p>Drop an image or click to select a file to upload. Click upload to add your photo to your profile.</p>
          <img src={this.state.imageUrl}></img>
        </Dropzone>
        <button type="submit" className="modal-submit"
          onClick={this.handleSubmit}>Submit
        </button>
        <a className="remove-image" onClick={this.removeImage}>Remove Image</a>
      </Modal>
    );
  }
}

export default PhotoModal;
