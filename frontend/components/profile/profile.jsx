import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="profile-page">
      <div className="profile-image">Profile Picture</div>
      <span>Username:</span>
      <div className="stats">
        <span># followers</span>
        <span># following</span>
      </div>
      <button>Following Status</button>
      <div className="pictures grid">

      </div>
    </div>
    );
  }
}

export default Profile;
