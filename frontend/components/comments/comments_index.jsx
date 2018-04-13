import React from 'react';
import CommentIndexItem from './comment_index_item';
import FormCommentContainer from './form_comment_container';

class CommentsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photo.id);
  }

  componentWillMount() {
    this.props.fetchPhoto(this.props.photo.id);
  }


  render() {
    return (
      <div className="comments-wrapper">
        <hr />
        <ul>
          {
            this.props.comments.map( (comment, i) => (
                <CommentIndexItem
                  comment={comment}
                  deleteComment={this.props.deleteComment}
                  currentUser={this.props.currentUser}
                  fetchPhoto={this.props.fetchPhoto}
                  key={`comment-${i}`}
                  />
            ))
          }
          <FormCommentContainer
            photoId={this.props.photo.id}
            />
        </ul>
      </div>
    );
  }
}

export default CommentsIndex;
