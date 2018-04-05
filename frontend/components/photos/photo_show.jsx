import React from 'react';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photo.id);
  }

  componentWillMount(){
    document.body.style.backgroundImage = 'none';
  }

  componentWillUnmount(){
    document.body.style.backgroundImage = "url(http://res.cloudinary.com/dhyya9rw1/image/upload/v1522873327/tree-3097419_1280.jpg)";
  }

  render() {
    return (
      <div>
        Test
      </div>
    );
  }

}

export default PhotoShow;
