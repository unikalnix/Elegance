import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  
  const handleResize = () => {
    if (window.innerWidth <= breakpoint) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isMobile;
};

export default useIsMobile;
