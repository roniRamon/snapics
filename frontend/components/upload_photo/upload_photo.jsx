import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'r0qpmgcb';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dhyya9rw1/upload';


class UploadImage extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.photo;

  }

  onImageDrop(file) {
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
            uploadedFileCloudinaryUrl: response.body.secure_url
          });
        }
    });

  }

  render (){
    return (
      <div>
        <form>
            <ul>
              <li>
                <label htmlFor="title">Title: </label>
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.handleInput('title')}
                  id="title"
                  />
              </li>
              <li>
                <textarea
                  value={this.state.description}
                  onChange={this.handleInput('description')}
                  id="description"
                  />
              </li>
              <li>
                <Dropzone
                  multiple={false}
                  accept="image/*"
                  onDrop={this.onImageDrop.bind(this)}>
                  <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>
              </li>
            </ul>
        </form>
      </div>
      );
    }

}


export default UploadImage;
