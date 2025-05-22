import { useEffect } from "react";

import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

import { toggleTheme } from "@/store/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/store/app/hooks";

const ThemeSwitcher = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const icon = nextTheme === "dark" ? faMoon : faSun;

  return (
    <button
      className="text-black dark:text-white flex items-center gap-1.5 cursor-pointer"
      value={theme}
      onClick={() => dispatch(toggleTheme())}
    >
      <FontAwesomeIcon icon={icon} />
      <span className="capitalize">{nextTheme} Mode </span>
    </button>
  );
};
export default ThemeSwitcher;
