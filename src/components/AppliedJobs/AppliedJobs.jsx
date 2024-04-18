import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = filter => {
    if(filter === 'all'){
        setDisplayJobs(appliedJobs);
    }else if(filter === 'remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs);
    }
    else if(filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobsIds.includes(job.id));

      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id); // alternating way
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    //   console.log(jobs, storedJobsIds, jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-2xl">Jobs I applied: {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
          <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
          <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
        </ul>
      </details>
      {displayJobs.map((job) => (
        <AppliedJob job={job}><span>{job.job_title} {job.company_name} : {job.remote_or_onsite}</span></AppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
