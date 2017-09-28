import React from 'react';
import {Link} from 'react-router-dom';

class Feed extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getPhotos();
  }

  componentWillReceiveProps(newProps){
    this.props = newProps;
  }

  photoLinks() {
    const links = this.props.photos.map(photo => (
      <div key = {`followingdiv${photo.id}`} className="photo-linkss-container">
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
    return (
      <div>
        {this.photoLinks()};
      </div>
    );
  }

}


export default Feed;
