import React, { useEffect, useState, useRef, useCallback } from "react";
import styled from "@emotion/styled";
import CommentListItem from "./CommentListItem";
import getComments from "services/utils/commentAPI";
import { useInfiniteScroll } from "hooks/useInfiniteScroll";

interface CommentsProps {
  id: number;
  email: string;
  body: string;
}

const CommentList: React.FC = () => {
  const currentPage = useRef(1);

  const targetRef = useRef(null);

  const [comments, setComments] = useState<Array<CommentsProps>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const loadComment = useCallback(async ({ page } = {}) => {
    try {
      setLoading(true);
      const newComments = await getComments(page);
      setComments((prev) => [...new Set([...prev, ...newComments])]);
      setHasMore(newComments.length > 0);
      setLoading(false);
      return newComments;
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMoreComments = useCallback(async () => {
    if (comments.length > 0) {
      currentPage.current++;
      loadComment({
        page: currentPage.current,
      });
    } else if (!comments.length++) {
      setLoading(false);
    }
  }, [comments, loadComment]);

  useEffect(() => {
    loadComment();
    // eslint-disable-next-line
  }, []);

  useInfiniteScroll({
    target: targetRef.current,
    onIntersect: ([{ isIntersecting }]: any) => {
      if (isIntersecting && !loading && hasMore) {
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
          <CommentListItem key={comment.id} comment={comment} id={undefined} />
        ))}
        <div ref={targetRef} />
      </ListWrapper>
    </>
  );
};

export default CommentList;

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
