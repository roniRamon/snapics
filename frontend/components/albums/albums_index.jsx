import React from 'react';
import AlbumsIndexItem from './albums_index_item';
import AddAlbumContainer from './new_album_container';

class AlbumsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    if ( this.props.user == undefined ) {
      return (
        <div>
          <div className="loading-image-container" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>;
          </div>
        </div>
      );
    }

    return (
      <div>
        <section className="user-album-index-container">
          {
            this.props.currentUser.id === this.props.user.id ?
              <AddAlbumContainer /> :
              ""
          }

          <ul className="user-albums-index">
            {
              this.props.albums.map( (albumObj) => (
                <AlbumsIndexItem
                  album={albumObj}
                  key={`album-${albumObj.id}`}
                  />
              ))
            }
          </ul>
        </section>
      </div>
    );
  }
}

export default AlbumsIndex;
