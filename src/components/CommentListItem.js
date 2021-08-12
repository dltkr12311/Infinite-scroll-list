import React from "react";
import styled from "@emotion/styled";

const CommentListItem = ({ comment }) => {
  const { id, email, body } = comment;
  return (
    <ItemWraper>
      <Item>
        <em>Comment Id</em>
        <span>{id}</span>
      </Item>
      <Item>
        <em>Email</em>
        <span>{email}</span>
      </Item>
      <Item lineBreak>
        <em>Comment</em>
        <span>{body}</span>
      </Item>
    </ItemWraper>
  );
};

export default CommentListItem;

const ItemWraper = styled.li`
  padding: 20px;
  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  border-radius: 20px;

  & + & {
    margin-top: 14px;
  }

  p + p {
    margin-top: 12px;
  }
`;

const Item = styled.p`
  & > * {
    font-size: 18px;
  }

  em {
    margin-right: 12px;
    font-weight: bold;
    display: ${({ lineBreak }) => lineBreak && "block"};
  }
`;