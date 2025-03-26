import { useEffect, useState } from "react";

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!JSON.parse(localStorage.getItem("currentUser"))
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      setIsLoggedIn(!!currentUser);
    };

    // Listen for storage updates (cross-tab and same-tab)
    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return isLoggedIn;
};

export default useIsLoggedIn;
