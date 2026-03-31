import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // or "smooth" if you prefer
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;