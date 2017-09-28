import React from 'react';
import { Link } from 'react-router-dom';

class Links extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let feed;
    let following;
    if (this.props.path === '/feed'){
      feed = "active-link";
      following = "inactive-link";
    }else if (this.props.path === '/following'){
      feed = "inactive-link";
      following = "active-link";
    }

    return (
      <div className="feed-links-bar">
        <div className="feed-links">
          <Link to='/following' className={following}>FOLLOWING</Link>
          <Link to="/feed" className={feed}>FEED</Link>
        </div>
      </div>
    );
  }
}

export default Links;
