import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="shadow-sm bg-white dark:bg-blue-900 z-50">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center py-8">
          {/* Title */}
          <h1 className="text-xl font-extrabold text-black dark:text-white">
            Where in the world?
          </h1>
          {/* Dark mode icon */}
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
export default Header;
