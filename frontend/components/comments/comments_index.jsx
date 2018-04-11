import React from 'react';
import CommentIndexItem from './comment_index_item';
import FormCommentContainer from './form_comment_container';

class CommentsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }

  addComments(newComment) {
    this.setState({comments: [...this.state.comments, newComment]});
}

  render() {
    return (
      <div className="comments-wrapper">
        <hr />
        <ul>
          {
            this.props.comments.map( comment => (
                <CommentIndexItem
                  comment={comment}
                  deleteComment={this.props.deleteComment}
                  currentUser={this.props.currentUser}
                  key={`comment-${comment.id}`}
                  />
            ))
          }
          <FormCommentContainer
            photoId={this.props.photoId}
            addComment={ this.addComments }
            />
        </ul>
      </div>
    );
  }
}

export default CommentsIndex;

// go over ever array of comments
// dispaly the comments
