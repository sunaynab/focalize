import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.props = newProps;
  }


  handleClick(e) {
    e.preventDefault();
    this.props.logOut().then(() => this.props.history.push('/sign-in'));
  }

  render () {
    let span;
    let navBarClass = "navbar-home";
    const matcher = new RegExp('photos\/.*');
    let image = "http://res.cloudinary.com/daesquwob/image/upload/c_scale,h_1072/v1506031449/focalizelogo_e0vkma.png";
    if (this.props.loggedIn){
      // signed-in
      span = (
        <div className="user-info">
          <Link className="username" to={`/users/${this.props.currentUser.id}`}>Welcome, {this.props.currentUser.username}</Link>
          <a className = "logout" onClick={this.handleClick}>Sign Out</a>
        </div>);
      navBarClass = "navbar";
      if (matcher.test(this.props.location.pathname)){
        navBarClass = "hidden";
      }
    }else if ((this.props.location.pathname === '/sign-in') || (this.props.location.pathname === '/sign-up')){
      // sign-in/sign-up page
      span = (<span></span>);
    }else{
      // homepage not signed in
      span = (<span>
        <Link to='/sign-in'>Sign In</Link>
        <Link to='/sign-up'>Create New Account</Link>
      </span>);
    }

    return (
      <div className={navBarClass}>
        <Link to="/" className="header-link">
          <img src={image}></img>
        </Link>
        {span}
      </div>
    );
  }
}

export default NavBar;
