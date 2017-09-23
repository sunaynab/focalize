import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserPhotos(this.props.userId);
  }

  photoLinks() {
    const links = this.props.photos.map(photo => (
      <ul>
        <Link to={`/photos/${photo.id}`}>
          <img src={photo.image_url}></img>
        </Link>
      </ul>
    ));

    return links;
  }

  render() {
    return (
    <div className="profile-page">
      <div className="profile-image">Profile Picture</div>
      <span></span>
      <div className="stats">
        <span># followers</span>
        <span># following</span>
      </div>
      <button>Following Status</button>
      <div className="pictures-grid">
        {this.photoLinks()}
      </div>
    </div>
    );
  }
}

export default Profile;
