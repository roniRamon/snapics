import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbum } from '../../actions/albums_actions';

class ShowPageAlbum extends React.Component {

  componentDidMount(){
      this.props.fetchAlbum(this.props.albumId);
    }

  componentWillMount(){
    this.props.fetchAlbum(this.props.albumId);
  }

    render(){
      if(this.props.album == undefined || this.props.albumId == undefined){
        return <section >Loading...</section>;
      }
      return (
          <div className="photo-album-item-wrap">
            <Link to={`/album/${this.props.albumId}`}>
              <li>
                <div>
                  {
                    this.props.album.photos.length > 0 ?
                      <img src={ this.props.photos[this.props.album.photos[0]].imageUrl } /> :
                      <img src="http://res.cloudinary.com/dhyya9rw1/image/upload/v1523300185/space-2638126_640.jpg" />
                  }
                </div>
                <p>
                  <span>{ this.props.album.title }</span>
                  <br/>
                  { this.props.album.photos.length == 1 ?
                    this.props.album.photos.length + " Photo" :
                    this.props.album.photos.length + " Photos"
                  }
                </p>
              </li>
            </Link>
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
  album: state.entities.albums[ownProps.albumId],
  albumId: ownProps.albumId,
  userId: ownProps.userId,
  photos: state.entities.photos,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPageAlbum);
