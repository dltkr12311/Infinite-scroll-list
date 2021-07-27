import React, { useEffect, useState, useRef, useCallback } from "react";
import styled from "@emotion/styled";
import CommentListItem from "./CommentListItem";
import getComments from "../api/comment";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

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
  const currentPage = useRef(1);

  const targetRef = useRef(null);

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadComment = useCallback(async ({ page } = {}) => {
    try {
      setLoading(true);
      const newComments = await getComments(page);
      setComments((prev) => [...prev, ...newComments]);

      setLoading(false);
      return newComments;
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadComment();
  }, []);

  const loadMoreComments = useCallback(async () => {
    if (comments.length > 0) {
      currentPage.current++;
      const data = await loadComment({
        page: currentPage.current,
      });
      setComments([...comments, ...data]);
    }
  }, [comments, loadComment]);

  useInfiniteScroll({
    target: targetRef.current,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && !loading) {
        loadMoreComments();
      }
    },
  });

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
        <div ref={targetRef} />
      </ListWrapper>
    </>
  );
};

export default CommentList;
