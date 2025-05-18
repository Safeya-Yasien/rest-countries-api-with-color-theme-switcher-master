import { useEffect, useState } from "react";

import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type TTheme = "light" | "dark";
// localstorage

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<TTheme>("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className="text-black dark:text-white flex items-center gap-1.5 cursor-pointer"
      value={theme}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FontAwesomeIcon icon={faMoon} />
      <span className="capitalize">{theme} Mode </span>
    </button>
  );
};
export default ThemeSwitcher;
