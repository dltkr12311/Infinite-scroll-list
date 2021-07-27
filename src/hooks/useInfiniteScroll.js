import { useEffect } from "react";

export const useInfiniteScroll = ({ target, onIntersect }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect);

    if (!target) {
      return;
    }

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [target, onIntersect]);
};
