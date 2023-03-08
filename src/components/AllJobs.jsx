import React, { useEffect, useState } from 'react';
import Cards from './AllJobs/Cards';
import { getJobs } from '../utils/HandleServer';
const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getJobs(setJobs);
  }, []);
  console.log(jobs);

  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3'>
      {jobs.map((job) => {
        return <Cards job={job} />;
      })}
    </div>
  );
};

export default AllJobs;
