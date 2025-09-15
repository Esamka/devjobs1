import React from "react";

const JobDetails = ({ job }) => {
  if (!job) return null;

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10 mb-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-6">
          <div
            className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center rounded-lg"
            style={{ backgroundColor: job.logoBackground }}
          >
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="rounded-full w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold dark:text-white">
              {job.company}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              {job.website.replace("https://", "")}
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <a
            href={job.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 dark:bg-gray-700 text-primary-500 font-bold py-3 px-6 rounded-lg hover:bg-primary-100 transition-colors duration-200"
          >
            Company Site
          </a>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {job.postedAt} • {job.contract}
            </p>
            <h1 className="text-3xl font-bold mt-2 dark:text-white">
              {job.position}
            </h1>
            <p className="text-primary-500 font-bold mt-1">{job.location}</p>
          </div>
          <a
            href={job.apply}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
          >
            Apply Now
          </a>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
          {job.description}
        </p>

        <h3 className="text-xl font-bold mt-8 dark:text-white">Requirements</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
          {job.requirements.content}
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-4 space-y-2">
          {job.requirements.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-bold mt-8 dark:text-white">
          What You Will Do
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
          {job.role.content}
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-4 space-y-2">
          {job.role.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 p-4 shadow-top">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold dark:text-white">
              {job.position}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">{job.company}</p>
          </div>

          <a
            href={job.apply}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
