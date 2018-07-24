import React from 'react';
import PhotoIndexItem from './photos_index_item';

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagName: "",
    };
  }

  componentDidMount(){
    this.props.fetchAllPhotos();
  }

  handleInput() {
    return (e) => (
      this.setState({tagName: e.target.value})
    );
  }

  render() {
    let filteredPhotos = this.props.photos.filter(
      photo => {
        return photo.title.indexOf(this.state.tagName) !== -1;
      }
    );
    return (
      <div className="photos_index_div">
        <h1>Explore</h1>
          <form>
            <input
              type="text"
              value={this.state.tagName}
              onChange={this.handleInput()}
              placeholder="Search..."
              className="search-bar-input"
              />
          </form>
        <section className="photos_index_container">
          <ul className="photos_index">
            {
              filteredPhotos.map( (photo, i) => <PhotoIndexItem photo={photo} key={`photo-${i}`} />)
            }
          </ul>
        </section>
      </div>
    );
  }
}


export default PhotosIndex;
