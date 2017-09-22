import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.submitForm(user).then(() => (this.props.history.push('/')));
  }

  navLink() {
    if (this.props.formType === 'sign-in') {
      return (<div className="Links"><span>Sign In</span><Link to="/sign-up">Create New Account</Link></div>);
    } else {
      return (<div className="Links"><Link to="/sign-in">Sign In</Link><span>Create New Account</span></div>);
    }
  }

  demoLogin() {
    this.setState({username: "demoUser"});
    this.setState({password: "demosarecool"});
    this.handleSubmit();
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
    <div className={`fullpage-${this.props.formType}`}>
      <div className={`${this.props.formType}-images`}>
        <img className= "sign-in-img" src="http://res.cloudinary.com/daesquwob/image/upload/v1506032460/sign_in_circles_po8xaf.png"></img>
        <img className= "sign-up-img" src="http://res.cloudinary.com/daesquwob/image/upload/v1506037296/new_account_circles_tkoygq.png"></img>
      </div>
      <div className={`${this.props.formType}-form-container`}>
        <form onSubmit={this.handleSubmit} className={`${this.props.formType}-form-box`}>
          <br/>
          {this.navLink()}
          {this.renderErrors()}
          <div className={`${this.props.formType}-form`}>
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className={`${this.props.formType}-input`}
                placeholder="USERNAME"
              />
            <br/>
              <input type="text"
                className="email-input"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="EMAIL"
                />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className={`${this.props.formType}-input`}
                placeholder="PASSWORD"
              />
            <br/>
            <div className="submit">
              <input type="submit" value={this.props.formType}/>
              <button className="demoLogin" onClick={this.demoLogin}>guest login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default withRouter(SessionForm);
