import React from 'react';
import PhotoIndexItem from './photos_index_item';

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);
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
