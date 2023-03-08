import React from 'react';

const Cards = ({ company_name, company_logo, place, posted, job_des }) => {
  return (
    <div className='p-5 '>
      <div className='w-[275px] sm:w-[300px]  bg-[#FFFFFF] border-2 border-[#f6f8fc] shadow-2xl sans-serif'>
        <div className='p-2 flex justify-between'>
          <img src={company_logo} alt='/' className='w-20 rounded-full' />
          <div>
            <h1 className='font-bold text-md sm:text-xl'>{company_name}</h1>
            <p className='font-cabin text-sm text-slate-500'>{place}</p>
            <h4 className='bg-green-200 p-2 w-[40%] text-center'>status</h4>
          </div>
        </div>
        <div className='p-2 flex justify-between text-sm'>
          <h3 className='font-bold'>₹ 3-8 Lacs P.A.</h3>
          <p className='font-bold'>{place}</p>
          <h4 className='font-bold'>{posted}</h4>
        </div>
        <div className='p-2 text-sm'>
          <p className='font-bold'>Skills Requirements</p>
          <p>{job_des?.key_skills}</p>
          <p className='font-bold'> Experience Required</p>
          <p>{job_des?.experience}</p>

          <p>
            <span className='font-bold'>Role:</span>
            {job_des?.role_category}
          </p>
          <p>
            <span className='font-bold'>Role type:</span>{' '}
            {job_des?.employment_type}
          </p>
        </div>
        <div className='flex'>
          <button className='bg-[#f6f8fc] px-4 py-2 rounded-xl mx-auto font-bold  hover:bg-[#aaabae] duration-150 '>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
