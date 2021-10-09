import { useEffect } from "react";

export const useInfiniteScroll: (arg0: {
  target: null;
  onIntersect: ([{ isIntersecting }]: any) => void;
}) => void = ({ target, onIntersect }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect);
    if (!target) {
      return;
    }

    observer.observe(target);

    return () => {
      observer?.disconnect();
    };
  }, [target, onIntersect]);
};
