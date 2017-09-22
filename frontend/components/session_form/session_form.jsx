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

  componentWillReceiveProps(newProps) {
    if(this.props.match.path !== newProps.match.path){
      this.props.clearErrors();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  submit() {
    const user = this.state;
    this.props.submitForm(user).then(() => (this.props.history.push('/following')));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.submit();
  }

  navLink() {
    if (this.props.formType === 'sign-in') {
      return (<div className="Links"><span>Sign In</span><Link to="/sign-up" onClick={this.clearErrors}>Create New Account</Link></div>);
    } else {
      return (<div className="Links"><Link to="/sign-in" onClick={this.clearErrors}>Sign In</Link><span>Create New Account</span></div>);
    }
  }

  demoLogin() {
    this.setState({username: "demoUser"});
    this.setState({password: "demosarecool"});
    this.submit();
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
    let fadeIn = "fadeInRight";
    if (this.props.formType === "sign-in"){
      fadeIn = "fadeInLeft";
    }

    return (
    <div className={`fullpage-${this.props.formType}`}>
      <div className={`${this.props.formType}-images`}>
        <img className="sign-in-img animated fadeInRight" src="http://res.cloudinary.com/daesquwob/image/upload/v1506032460/sign_in_circles_po8xaf.png"></img>
        <img className="sign-up-img animated fadeInLeft" src="http://res.cloudinary.com/daesquwob/image/upload/v1506037296/new_account_circles_tkoygq.png"></img>
      </div>
      <div className={`${this.props.formType}-form-container animated ${fadeIn}`}>
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
              <button className="demoLogin" onClick={this.demoLogin}>guest sign-in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default withRouter(SessionForm);
