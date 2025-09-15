import React from "react";
import SearchFilter from "./SearchFilter";

const Header = ({
  isDarkMode,
  toggleDarkMode,
  filter,
  setFilter,
  onFilter,
}) => {
  return (
    <header className="relative w-full bg-indigo-500 dark:bg-slate-900 overflow-hidden rounded-bl-3xl pb-1">
      <div className="container mx-auto flex items-start justify-between p-6 md:p-8 lg:p-10">
        <h1 className="text-white text-3xl font-bold font-heading">devjobs</h1>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <span className="text-white">🌞</span>
          <div
            onClick={toggleDarkMode}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              isDarkMode ? "bg-white" : "bg-gray-400"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                isDarkMode
                  ? "translate-x-6 bg-indigo-500"
                  : "translate-x-0 bg-white"
              }`}
            ></div>
          </div>
          <span className="text-white">🌙</span>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-10">
        <SearchFilter
          onFilter={onFilter}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </header>
  );
};

export default Header;
