import React from "react";
import { useParams } from "react-router-dom";
import JobDetails from "../components/JobDetails";

const JobDetailsPage = ({ jobs }) => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id.toString() === id);

  if (!job) {
    return (
      <div className="pt-20 text-center text-lg dark:text-white">
        Job not found.
      </div>
    );
  }

  return <JobDetails job={job} />;
};

export default JobDetailsPage;
