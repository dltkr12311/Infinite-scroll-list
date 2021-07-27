import React, { useState } from "react";
import styled from "@emotion/styled";

import CommentListItem from "./CommentListItem";

const dummyData = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
];

const ListWrapper = styled.ul`
  margin: 33px auto;
  width: 500px;
`;

const CommentList = () => {
  const [comments, setComments] = useState(dummyData);

  return (
    <ListWrapper>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </ListWrapper>
  );
};

export default CommentList;
