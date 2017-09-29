import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Links from './links';

class Following extends React.Component {
  constructor(props){
    super(props);
    this.unfollow = this.unfollow.bind(this);
    this.follow = this.follow.bind(this);
  }

  componentWillMount(){
    this.props.fetchUsers();
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params !== newProps.match.params){
      this.props.fetchUsers();
    }
  }

  userLinks() {
    if (this.props.usersAndPhotos=== undefined){
      return (<div></div>);
    }
    const links = this.props.usersAndPhotos.map(user => {
      const photo = Object.values(user.photos)[0];
      return (
      <div key = {`followingdiv${user.id}`} className="user-links">
        <div key={`followinguserinfo${user.id}`} className= "user-i">
          <Link to={`/users/${user.id}`}>
            <div className="profile-circle">
              <img src={user.image_url}></img>
            </div>
            {user.username}
          </Link>
          {this.followingStatus(user)}
        </div>
        <div key={`followphotodiv${photo.id}`} className="photo-linkss">
          <Link key={`followphoto${photo.id}`}className="pictures" to={`/photos/${photo.id}`}>
            <img key={`followpic${photo.id}`} src={photo.image_url}></img>
          </Link>
        </div>
      </div>
      );
    }
  );

    return links;
  }

  unfollow(user) {
    this.props.unfollowUser(user.id);
  }

  follow(user) {
    this.props.followUser(user.id);
  }

  followingStatus(user) {
    if (user.current_user_follows === "true"){
      return(
        <button onClick={() => this.unfollow(user)} className="following-button true">Following</button>
      );
    }else{
      return(
        <button onClick={() => this.follow(user)} className="following-button false">Follow</button>
      );
    }
  }

  render() {
    return(
      <div className="following">
        <Links path={"/following"}/>
        <div className="user-information">
          <Link to={`users/${this.props.currentUser.id}`} className ="profile-link">
            <div className="circle">
              <img className="profile-pic" src={this.props.currentUser.image_url}></img>
            </div>
            <h1 className="user-name">{this.props.currentUser.username}</h1>
          </Link>
          <div className="user-statistics">
            <h2 className ="num">{this.props.numFollowers}</h2>
            <span className="labels-span">FOLLOWERS</span>
            <h2 className ="num">{this.props.numFollowing}</h2>
            <span className="labels-span">FOLLOWING</span>
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
