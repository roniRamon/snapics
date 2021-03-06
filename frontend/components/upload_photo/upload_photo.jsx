import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Modal from 'react-modal';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/fontawesome-free-solid';


const CLOUDINARY_UPLOAD_PRESET = 'r0qpmgcb';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dhyya9rw1/upload';


class UploadPhoto extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: '',
      imageName: '',
      title: '',
      description: '',
      ownerId: this.props.currentUser.id,
      showModal: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    this.props.clearPhotoError();
  }

  handleOpenModal () {
    this.setState({ showModal: true });
    this.props.clearPhotoError();
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  onImageDrop(file) {
    //Loading gif add
    let loadingEl = document.getElementById("drag-drop");
    loadingEl.innerHTML = "";
    let imageEl = document.createElement("img");
    imageEl.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
    imageEl.setAttribute("id", "loading-image");
    loadingEl.appendChild(imageEl);
    let imageDropZoneEl = document.getElementById("image-dropzone-id");
    imageDropZoneEl.style.display = "none";

    this.setState({
      uploadedFile: file[0],
    });

    this.handleImageUpload(file[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
        if(err) {
          console.log(err);
        }

        if (response.body.secure_url !== "") {
          this.setState({
            uploadedFileCloudinaryUrl: response.body.secure_url,
            imageName: response.body.public_id + "." + response.body.format,
          });
        }
    });

    //Loading gif remove
    let imageEl = document.getElementById("loading-image");
    let loadingEl = document.getElementById("drag-drop");
    loadingEl.removeChild(imageEl);
    loadingEl.innerHTML = "Drop an image or click to select a file to upload.";
    let imageDropZoneEl = document.getElementById("image-dropzone-id");
    imageDropZoneEl.style.display = "block";

  }

  handleInput(type) {
    return (e) => (
      this.setState({ [type]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let photo = {
      img_url: this.state.uploadedFileCloudinaryUrl,
      owner_id: this.state.ownerId,
      title: this.state.title,
      description: this.state.description,
    };
    this.props.createPhoto(photo).then(
      () => this.handleCloseModal()
    );
  }

  renderErrors(){
    return (
      <div className="err-messages">
        {
          this.props.errorsPhoto.map( (err, index) => (
            <p key={`err-photo-${index}`}>{err}</p>
        ))
        }
      </div>
    );
  }

  render (){
    return (
      <div>
        <FontAwesomeIcon icon={faCloudUploadAlt}
          onClick={this.handleOpenModal}
          className="fa-cloude"
          />
        <Modal
          isOpen={this.state.showModal}
          className="upload-photo-form"
          onRequestClose={() => this.setState({showModal: false})}
        >
        <button onClick={this.handleCloseModal}
          className="upload-photo-close-modal">
          X
        </button>
          <h2>Upload a Photo</h2>
          <form onSubmit={this.handleSubmit}>
              <ul>
                <li>
                  <input
                    type="text"
                    value={this.state.title}
                    placeholder="  Photo Title"
                    onChange={this.handleInput('title')}
                    id="title"
                    />
                </li>
                <li>
                  <textarea
                    value={this.state.description}
                    onChange={this.handleInput('description')}
                    id="description"
                    placeholder="  Photo Description"
                    />
                </li>
                <li>
                  <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>
                    <p id="drag-drop">Drop an image or click to select a file to upload.</p>
                  </Dropzone>
                  <img className="image-dropzone" id="image-dropzone-id"
                    src="http://res.cloudinary.com/dhyya9rw1/image/upload/v1522967154/polaroid.png" />
                </li>
                <li>
                  <br/>
                  {this.state.uploadedFileCloudinaryUrl === '' ?  null :
                    this.state.imageName
                  }
                </li>
              </ul>
              {this.renderErrors()}
              <input type="submit" value="Upload"/>
          </form>
      </Modal>
    </div>
      );
    }

}


export default UploadPhoto;
