import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollToTopProps } from "../types";

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;
