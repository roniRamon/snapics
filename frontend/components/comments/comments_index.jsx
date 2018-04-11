import React from 'react';
import CommentIndexItem from './comment_index_item';


class CommentsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }

  render() {
    return (
      <div className="comments-wrapper">
        <ul>
          {
            this.props.comments.map( comment => (
                <CommentIndexItem
                  comment={comment}
                  key={`comment-${comment.id}`}
                  />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default CommentsIndex;

// go over ever array of comments
// dispaly the comments
