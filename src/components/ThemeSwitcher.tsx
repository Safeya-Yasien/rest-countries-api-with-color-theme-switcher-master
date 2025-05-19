import { useEffect } from "react";

import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "@/store/app/hooks";
import { toggleTheme } from "@/store/theme/themeSlice";
import { faSun } from "@fortawesome/free-solid-svg-icons";

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

  const icon = theme === "light" ? faSun : faMoon;

  return (
    <button
      className="text-black dark:text-white flex items-center gap-1.5 cursor-pointer"
      value={theme}
      onClick={() => dispatch(toggleTheme())}
    >
      <FontAwesomeIcon icon={icon} />
      <span className="capitalize">{theme} Mode </span>
    </button>
  );
};
export default ThemeSwitcher;
