import React from "react";
import JobList from "../components/JobList";
import SearchFilter from "../components/SearchFilter";

const HomePage = ({ jobs, isLoading, error }) => {
  return (
    <div className="pt-1">
      {isLoading && (
        <p className="text-center text-lg dark:text-white">Loading jobs...</p>
      )}
      {error && <p className="text-center text-red-500 text-lg">{error}</p>}
      {!isLoading && !error && jobs.length === 0 && (
        <p className="text-center text-lg dark:text-white">
          No jobs found matching your criteria.
        </p>
      )}
      {!isLoading && !error && jobs.length > 0 && <JobList jobs={jobs} />}
    </div>
  );
};

export default HomePage;
