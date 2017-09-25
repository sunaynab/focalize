import React from 'react';
import {Link} from 'react-router-dom';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPhoto(this.props.photoId);
  }

  render(){
    return(
      <div className="photo animated fadeInUp">
        <img className= "picture" src={this.props.photo.image_url} onClick={this.props.history.goBack}></img>
        <Link className="profile-info" to={`users/${this.props.user.id}`}>
          <div className="profile-image">
            <img src={this.props.user.image_url}></img>
          </div>
          <span>{this.props.user.username}</span>
        </Link>
      </div>
    );
  }
}

export default PhotoDetail;
