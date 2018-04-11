import React from 'react';

class FormComment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }

  handleInput() {
    return (e) => (
      this.setState({body: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createComment({
      body: this.state.body,
      author_id: this.props.currentUser.id,
      photo_id: this.props.photo.id
    }).then(
      (res) => this.props.addComment(res)
    );
  }

  render() {
    return (
        <div className="comment-div-container">
          <li className="comment-form-li">
            <span>
              <img src={this.props.currentUser.img_url} />
            </span>
            <form onSubmit={this.handleSubmit}>
              <div className="comment-form-textarea-container">
                <textarea
                  value={this.state.body}
                  onChange={this.handleInput()}
                  placeholder="Add a Comment"
                  />
              </div>
              <input type="submit"
                className="create-comment-button"
                value="Comment"
                />
            </form>
          </li>
      </div>
    );
  }

}

export default FormComment;
