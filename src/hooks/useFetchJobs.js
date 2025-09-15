import { useState, useEffect } from "react";
import fakeJobs from "../data/jobs";

const useFetchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        setJobs(fakeJobs);
        setError(null);
      } catch (err) {
        setError("Failed to fetch jobs.");
      } finally {
        setIsLoading(false);
      }
    }, 500);
  }, []);

  return { jobs, isLoading, error };
};

export default useFetchJobs;
