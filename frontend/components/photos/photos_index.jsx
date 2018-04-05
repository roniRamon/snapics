import React from 'react';
import PhotoIndexItem from './photos_index_item';

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    //cancel background image set on body scss
    document.body.style.backgroundImage = 'none';
  }

  componentWillUnmount(){
    //cancel background image set on body scss
    document.body.style.backgroundImage = "url(http://res.cloudinary.com/dhyya9rw1/image/upload/v1522873327/tree-3097419_1280.jpg)";
  }

  componentDidMount(){
    this.props.fetchAllPhotos();
  }

  render() {
    return (
      <div className="photos_index_div">
        <h1>Explore</h1>
        <section className="photos_index_container">
          <ul className="photos_index">
            {
              this.props.photos.map( (photo, i) => <PhotoIndexItem photo={photo} key={`photo-${i}`} />)
            }
          </ul>
        </section>
      </div>
    );
  }
}


export default PhotosIndex;
