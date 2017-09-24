import React from 'react';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPhoto(this.props.photoId);
  }

  render(){
    return(
      <div></div>
    );
  }
}

export default PhotoDetail;
