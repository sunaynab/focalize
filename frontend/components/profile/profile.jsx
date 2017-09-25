import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import PhotoModal from './modal';

let className = "hide";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserPhotos(this.props.userId);
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params !== newProps.match.params){
      this.props.getUserPhotos(newProps.userId);
    }
  }

  photoLinks() {
    const links = this.props.photos.map(photo => (
        <Link key={`photo${photo.id}`}className="zoom" to={`/photos/${photo.id}`}>
          <img src={photo.image_url}></img>
        </Link>
    ));

    return links;
  }

  render() {
    return (
    <div className="profile-page">
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
