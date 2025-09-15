import React, { useState } from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  const [page, setPage] = useState(1);
  const jobsPerPage = 9;

  const displayedJobs = jobs.slice(0, page * jobsPerPage);
  const hasMoreJobs = displayedJobs.length < jobs.length;

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      {hasMoreJobs && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default JobList;
