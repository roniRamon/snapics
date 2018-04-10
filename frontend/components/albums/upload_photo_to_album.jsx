import React from 'react';
import Modal from 'react-modal';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid';


class UploadPhotoToAlbum extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      albumId: "",
      photoId: "",
      showModal: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImg = this.handleImg.bind(this);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
      this.props.fetchAllPhotos();
  }

  componentWillMount() {
    this.props.fetchAllPhotos();
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleSubmit(e) {
    event.preventDefault();
    this.props.createAlbumPhoto(this.state.albumId, this.state.photoId).then(
      res => this.setState({ showModal: false })
    );
  }

  handleImg(e) {
      this.setState({ photoId: e.target.value,
                      albumId: this.props.album.id});
  }


  render (){
    if(this.props.album == undefined){
      return <section >Loading...</section>;
    }
    return (
      <div>
        {
          this.props.currentUser.id === this.props.album.ownerId ? (
            <p onClick={this.handleOpenModal} className="fa-pencil">
              Edit Album <FontAwesomeIcon icon={faPencilAlt}
              />
            </p>
          ) : (
            ''
          )
        }
        <Modal
          isOpen={this.state.showModal}
          className="upload-photo-form photo-album-upload"
          onRequestClose={() => this.setState({showModal: false})}
        >
        <button onClick={this.handleCloseModal}
          className="upload-photo-close-modal">
          X
        </button>
          <h2>Select a Photo</h2>
          <form onSubmit={this.handleSubmit}
            className="form-to-add-photo-to-album">
            <ul>
                {
                  Object.values(this.props.photos).map( photo => {
                    if (photo.ownerId === this.props.currentUser.id){

                    return (
                      <li key={`li-photo-album-${photo.id}`}>
                        <label key={`label-photo-album-${photo.id}`}
                          className="select-photo-add-to-album">
                          <input
                            type="radio"
                            value={photo.id}
                            name="photo"
                            checked={this.state.photoId == photo.id}
                            onChange={this.handleImg}/>
                          <img src={this.props.photos[photo.id].imageUrl}
                               key={`select-photo-album-${photo.id}`}
                            />
                        </label>
                      </li>
                    );
                  }
                  })
                }
              </ul>
              <div className="fixed-button-botton">
                <input type="submit" value="Add to Album"/>
              </div>
          </form>
      </Modal>
    </div>
      );
    }

}


export default UploadPhotoToAlbum;
