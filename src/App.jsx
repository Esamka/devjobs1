import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import JobDetailsPage from "./pages/JobDetails";
import useDarkMode from "./hooks/useDarkMode";
import useFetchJobs from "./hooks/useFetchJobs";
import ThemeContext from "./context/ThemeContext";
import FilterContext from "./context/FilterContext";

const App = () => {
  const { jobs, isLoading, error } = useFetchJobs();
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const [filter, setFilter] = useState({
    title: "",
    location: "",
    isFullTime: false,
  });

  const filteredJobs = useMemo(() => {
    const { title, location, isFullTime } = filter;
    return jobs.filter((job) => {
      const titleMatch = job.position
        .toLowerCase()
        .includes(title.toLowerCase());
      const locationMatch = job.location
        .toLowerCase()
        .includes(location.toLowerCase());
      const contractMatch = isFullTime ? job.contract === "Full Time" : true;
      return titleMatch && locationMatch && contractMatch;
    });
  }, [filter, jobs]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <Router>
          <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans antialiased text-gray-900 dark:text-gray-100">
            <Header />
            <main className="relative z-10 pt-6 md:pt-10 lg:pt-12">
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
                <Route
                  path="/job/:id"
                  element={<JobDetailsPage jobs={jobs} />}
                />
              </Routes>
            </main>
          </div>
        </Router>
      </FilterContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
