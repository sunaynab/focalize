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
    let image = "http://res.cloudinary.com/daesquwob/image/upload/c_scale,h_1072/v1506031449/focalizelogo_e0vkma.png";
    if (this.props.loggedIn){
      span = (
        <div className="user-info">
          <span>Welcome, {this.props.currentUser.username}</span>
          <button className = "logout" onClick={this.handleClick}>Sign Out</button>
        </div>);
    }else if ((this.props.location.pathname === '/sign-in') || (this.props.location.pathname === '/sign-up')){
      span = (<span></span>);
    }else if (!(this.props.location.pathname === '/')){
      navBarClass = "navbar";
      image = "http://res.cloudinary.com/daesquwob/image/upload/c_scale,w_1034/v1506031449/focalizelogow_mg1lwt.png";
    }else{
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
