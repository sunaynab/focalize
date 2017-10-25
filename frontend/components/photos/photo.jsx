import React from 'react';
import {Link} from 'react-router-dom';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPhoto(this.props.photoId);
  }

  render(){
    const id = this.props.match.params;
    let user;
    if (this.props.user[this.props.userId] === undefined){
      user = {};
    }else{
      user = this.props.user[this.props.userId];
    }
    return(
      <div className="photo animated fadeInUp">
        <img className= "picture" src={this.props.photo.image_url} onClick={this.props.history.goBack}></img>
        <Link className="profile-info" to={`/users/${this.props.userId}`}>
          <div className="profile-image">
            <img src={user.image_url}></img>
          </div>
          <span>{user.username}</span>
        </Link>
      </div>
    );
  }
}

export default PhotoDetail;
