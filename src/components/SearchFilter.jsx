import React, { useState } from "react";

const SearchFilter = ({ onFilter, filter, setFilter }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filter);
    if (modalOpen) {
      setModalOpen(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center p-4 space-x-4">
      <div className="flex items-center w-full md:w-1/2">
        <svg
          className="w-6 h-6 text-indigo-500 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          name="title"
          placeholder="Filter by title, companies, expertise..."
          className="w-full bg-transparent border-none focus:outline-none p-2 text-gray-900 dark:text-white"
          value={filter.title}
          onChange={handleChange}
        />
      </div>
      <div className="hidden md:flex items-center w-1/4 border-l border-r border-gray-200 dark:border-gray-700 px-4">
        <svg
          className="w-6 h-6 text-indigo-500 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <input
          type="text"
          name="location"
          placeholder="Filter by location..."
          className="w-full bg-transparent border-none focus:outline-none p-2 text-gray-900 dark:text-white"
          value={filter.location}
          onChange={handleChange}
        />
      </div>
      <div className="hidden md:flex items-center w-1/4 space-x-2">
        <input
          type="checkbox"
          name="isFullTime"
          id="fullTime"
          className="form-checkbox text-indigo-500 rounded-sm"
          checked={filter.isFullTime}
          onChange={handleChange}
        />
        <label
          htmlFor="fullTime"
          className="text-gray-900 dark:text-white font-bold"
        >
          Full Time Only
        </label>
        <button
          onClick={handleSubmit}
          className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Search
        </button>
      </div>
      {/* Mobile filter button */}
      <button
        onClick={() => setModalOpen(true)}
        className="block md:hidden bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"
          />
        </svg>
      </button>

      {/* Mobile Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-sm">
            <div className="flex items-center space-x-4 mb-4 border-b pb-4 dark:border-gray-700">
              <svg
                className="w-6 h-6 text-indigo-500 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                type="text"
                name="location"
                placeholder="Filter by location..."
                className="w-full bg-transparent border-none focus:outline-none p-2 text-gray-900 dark:text-white"
                value={filter.location}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="isFullTime"
                id="fullTimeModal"
                className="form-checkbox text-indigo-500 rounded-sm"
                checked={filter.isFullTime}
                onChange={handleChange}
              />
              <label
                htmlFor="fullTimeModal"
                className="text-gray-900 dark:text-white font-bold"
              >
                Full Time Only
              </label>
            </div>
            <button
              onClick={handleSubmit}
              className="mt-6 w-full bg-primary-500 hover:bg-primary-600 dark:text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
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
