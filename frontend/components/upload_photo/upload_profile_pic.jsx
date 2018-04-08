import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'r0qpmgcb';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dhyya9rw1/upload';


class UploadProfilePic extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        uploadedFileCloudinaryUrl: '',
      };
  }

  onImageDrop(file) {
    this.setState({
      uploadedFile: file[0]
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

          const user = { img_url: this.state.uploadedFileCloudinaryUrl,
            id: this.props.currentUser.id};
            this.props.updateUser(user).then(
              this.props.history.push(`/propfile/${this.props.currentUser.id}`)
            );
        }
    });


  }

  render(){
    return (
      <Dropzone
        multiple={false}
        accept="image/*"
        onDrop={this.onImageDrop.bind(this)}
        className="dropzone-profile-pic">
        <img src={this.props.currentUser.img_url} />
      </Dropzone>
    );
  }

}

export default UploadProfilePic;
