import axios from 'axios';

const baseUrl = 'http://localhost:4000';

export const getJobs = async (setJobs) => {
  axios.get(baseUrl + '/getJobs').then(({ data }) => {
    console.log(data);
    setJobs(data);
  });
};
