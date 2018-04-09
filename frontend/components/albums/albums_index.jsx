import React from 'react';
import AlbumsIndexItem from './albums_index_item';

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
      return <section >Loading...</section>;
    }

    return (
      <div>
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
      </div>
    );
  }
}

export default AlbumsIndex;
