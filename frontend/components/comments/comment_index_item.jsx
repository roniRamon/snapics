import React from 'react';
import { Link } from 'react-router-dom';


class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    const photo = this.props.comment.authorId;

    this.props.deleteComment(this.props.comment.id).then(
      (res) => this.props.fetchPhoto(photo)
    );
  }

  render(){
    if(this.props.comment === undefined){
      return (
        <div>
          <div className="loading-image-container" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>;
          </div>
        </div>
      );
    }
    const {comment, currentUser } = this.props;
    return (
      <div className="comment-div-container">
        <li className="comment-li">
          <Link to={`/profile/${comment.authorId}`}>
            <img src={comment.authorImg} />
          </Link>
          <p>
            <Link to={`/profile/${comment.authorId}`}
                 className="user-name-comment">
              {comment.authorName}
            </Link>
            <br />
            {comment.body}
          </p>
          {
            comment.authorId === currentUser.id ? (
              <button onClick={this.handleDelete}
                className="delete-comment-button" >
                X
              </button>
            ) :
            ""
          }
        </li>
      </div>
    );
  }
}

 export default CommentIndexItem;
