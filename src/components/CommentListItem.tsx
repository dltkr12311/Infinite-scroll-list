import React, { Key } from "react";
import styled from "@emotion/styled";

export interface CommentProps {
  id: Key | null | undefined;
  comment: {
    id: number;
    email: string;
    body: string;
  };
}

interface ComponentsProps {
  lineBreak: boolean;
}

const CommentListItem: React.FC<CommentProps> = ({ comment }) => {
  const { id, email, body } = comment;
  return (
    <ItemWraper>
      <Item lineBreak={false}>
        <em>Comment Id</em>
        <span>{id}</span>
      </Item>
      <Item lineBreak={false}>
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

const Item = styled.p<ComponentsProps>`
  & > * {
    font-size: 18px;
  }

  em {
    margin-right: 12px;
    font-weight: bold;
    display: ${({ lineBreak }) => lineBreak && "block"};
  }
`;
