import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import JobDetailsPage from "./pages/JobDetails";
import useDarkMode from "./hooks/useDarkMode";
import useFetchJobs from "./hooks/useFetchJobs";

export const ThemeContext = createContext();

const App = () => {
  const { jobs, isLoading, error } = useFetchJobs();
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const [filter, setFilter] = useState({
    title: "",
    location: "",
    isFullTime: false,
  });

  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const { title, location, isFullTime } = filter;
    const filtered = jobs.filter((job) => {
      const titleMatch = job.position
        .toLowerCase()
        .includes(title.toLowerCase());
      const locationMatch = job.location
        .toLowerCase()
        .includes(location.toLowerCase());
      const contractMatch = isFullTime ? job.contract === "Full Time" : true;
      return titleMatch && locationMatch && contractMatch;
    });
    setFilteredJobs(filtered);
  }, [filter, jobs]);

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <Router>
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans antialiased text-gray-900 dark:text-gray-100">
          <Header
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
            filter={filter}
            setFilter={setFilter}
            onFilter={handleFilter}
          />
          <main className="relative z-10">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    jobs={filteredJobs}
                    isLoading={isLoading}
                    error={error}
                  />
                }
              />
              <Route path="/job/:id" element={<JobDetailsPage jobs={jobs} />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
