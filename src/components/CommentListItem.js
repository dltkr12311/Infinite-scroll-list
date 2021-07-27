import React from "react";

const CommentListItem = ({ comment }) => {
  const { postId, email, body } = comment;

  return (
    <li>
      <p>
        <em>Comment Id</em>
        <span>{postId}</span>
      </p>
      <p>
        <em>Email</em>
        <span>{email}</span>
      </p>
      <p>
        <em>Comment</em>
        <span>{body}</span>
      </p>
    </li>
  );
};

export default CommentListItem;
