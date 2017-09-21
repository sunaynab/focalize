import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps){
    debugger;
    this.props = newProps;
  }

  handleClick () {
    this.props.logOut(this.props.currentUser).then(() => this.props.history.push('/'));
  }

  render () {
    let span;
    if (this.props.loggedIn){
      span = (
        <div className="user info">
          <span>Welcome, {this.props.currentUser.username}</span>
          <button onClick={this.handleClick}>LogOut</button>
        </div>);
    }else {
      span = (<span></span>);
    }
    return (
      <div>
        <Link to="/" className="header-link">
          <h1>focalize</h1>
        </Link>
        {span}
      </div>
    );
  }
}


export default NavBar;
