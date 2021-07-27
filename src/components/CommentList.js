import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import CommentListItem from "./CommentListItem";
import getComments from "../api/comment";

const ListWrapper = styled.ul`
  margin: 33px auto;
  width: 500px;
`;

const LoadingBar = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    padding: 50px;
    background: #fff;
    border-radius: 50%;
  }
`;

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadComments = async () => {
      setLoading(true);
      const newComments = await getComments();
      setComments((prev) => [...prev, ...newComments]);
      setLoading(false);
    };

    loadComments();
  }, []);

  return (
    <>
      {loading && (
        <LoadingBar>
          <span>로딩중...</span>
        </LoadingBar>
      )}
      <ListWrapper>
        {comments.map((comment) => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </ListWrapper>
    </>
  );
};

export default CommentList;
