import React from 'react';
import { Link } from 'react-router-dom';

class Following extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getPhotos();
  }

  componentWillReceiveProps(newProps){
    this.props = newProps;
  }

  userLinks() {
    const links = this.props.photos.map(photo => (
      <div key = {`followingdiv${photo.id}`} className="user-links">
        <div key={`followinguserinfo${photo.id}`} className= "user-i">

        </div>
        <div key={`followphotodiv${photo.id}`} className="photo-linkss">
          <Link key={`followphoto${photo.id}`}className="pics" to={`/photos/${photo.id}`}>
            <img key={`followpic${photo.id}`} src={photo.image_url}></img>
          </Link>
        </div>
      </div>
    ));

    return links;
  }

  render() {
    return(
      <div className="following">
        <div className="user-information">
          <Link to={`users/${this.props.currentUser.id}`} className ="profile-link">
            <img className="profile-pic" src={this.props.currentUser.image_url}></img>
            <h2>{this.props.currentUser.username}</h2>
          </Link>
          <div className="user-statistics">
            <h2>{this.props.numFollowing}</h2>
            <span>FOLLOWERS</span>
            <h2>{this.props.numFollowers}</h2>
            <span>FOLLOWING</span>
          </div>
        </div>
        <div className="following-feed">
          {this.userLinks()}
        </div>
      </div>
    );
  }
}

export default Following;
