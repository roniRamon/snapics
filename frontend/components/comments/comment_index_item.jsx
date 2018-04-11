import React from 'react';
import { Link } from 'react-router-dom';


export default ({ comment, deleteComment, currentUser }) => (
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
          <button onClick={ () => deleteComment(comment.id) }
            className="delete-comment-button" >
            X
          </button>
        ) :
        ""
      }
    </li>
  </div>
);
