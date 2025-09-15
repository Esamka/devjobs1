import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <Link to={`/job/${job.id}`}>
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col cursor-pointer transition-transform duration-200 hover:scale-105">
        <div
          className="absolute -top-6 rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: job.logoBackground }}
        >
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="rounded-full w-full h-full object-contain"
          />
        </div>

        <div className="mt-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {job.postedAt} • {job.contract}
          </p>

          <h3 className="text-lg font-bold mt-2 text-gray-900 dark:text-white hover:text-primary-500 transition-colors duration-200">
            {job.position}
          </h3>

          <p className="text-gray-500 dark:text-gray-400 mt-1">{job.company}</p>

          <p className="text-primary-500 font-bold mt-4">{job.location}</p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
