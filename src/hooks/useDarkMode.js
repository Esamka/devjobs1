import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode !== null) {
      return JSON.parse(storedMode);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
