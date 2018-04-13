import React from 'react';

class FormTag extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tagName: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);

}

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }

  handleInput() {
    return (e) => (
      this.setState({tagName: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const photo = this.props.photo.id;
      this.props.createTag({
        tagName: this.state.tagName,
        photoId: photo
        }).then( (res) => this.props.fetchPhoto(photo))
        .then( (res) => this.setState({tagName: ""})
      );
  }

  render() {
    return (
      <div className="tag-form-div-container">
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="tag-form-input-container">
              <input
                type="text"
                value={this.state.tagName}
                onChange={this.handleInput()}
                placeholder="  Add a Tag"
                />
            </div>
            <input type="submit"
              className="create-tag-button"
              value="Add Tag"
              />
          </form>
        </div>
      </div>
    );
  }

}

export default FormTag;
