import React, { useContext, useState } from "react";
import FilterContext from "../context/FilterContext";

const SearchFilter = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const defaultFilter = { title: "", location: "", isFullTime: false };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center p-4 space-x-4">
      {/* Title */}
      <div className="flex items-center w-full md:w-1/2">
        <input
          type="text"
          name="title"
          placeholder="Filter by title, companies, expertise..."
          value={filter.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Location */}
      <div className="hidden md:flex items-center w-1/4 border-l border-r border-gray-200 dark:border-gray-700 px-4">
        <input
          type="text"
          name="location"
          placeholder="Filter by location..."
          value={filter.location}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div className="hidden md:flex items-center w-1/4 space-x-2">
        <input
          type="checkbox"
          name="isFullTime"
          id="fullTime"
          checked={filter.isFullTime}
          onChange={handleChange}
          className="form-checkbox text-indigo-500 rounded-sm"
        />
        <label htmlFor="fullTime" className="dark:text-white font-bold">
          Full Time Only
        </label>

        <button
          onClick={() => setFilter(defaultFilter)}
          className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Reset
        </button>
      </div>

      {/* Mobile Modal */}
      <button
        onClick={() => setModalOpen(true)}
        className="block md:hidden bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-lg"
      >
        Filter
      </button>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-sm">
            <input
              type="text"
              name="location"
              placeholder="Filter by location..."
              value={filter.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white mb-4"
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="isFullTime"
                id="fullTimeModal"
                checked={filter.isFullTime}
                onChange={handleChange}
                className="form-checkbox text-indigo-500 rounded-sm"
              />
              <label
                htmlFor="fullTimeModal"
                className="dark:text-white font-bold"
              >
                Full Time Only
              </label>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
