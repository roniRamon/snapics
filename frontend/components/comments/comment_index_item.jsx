import React from 'react';
import { Link } from 'react-router-dom';


export default ({ comment }) => (
  <div className="comment-div-container">
    <li>
      <img src={comment.authorImg} />
      <p>
        <span className="user-name-comment">
          {comment.authorName}
        </span>
        {comment.body}
      </p>
    </li>
  </div>
);
