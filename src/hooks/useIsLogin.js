// Imports
import { useEffect, useState } from "react";

// Hook Function
const useIsLoggedIn = () => {
  // Declarations
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!JSON.parse(localStorage.getItem("currentUser"))
  );

  // Functions
  const handleStorageChange = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setIsLoggedIn(!!currentUser);
  };

  // useEffect Hook
  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Return Hook Value
  return isLoggedIn;
};

// Export
export default useIsLoggedIn;
