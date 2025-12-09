import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';
import { setSearchJob } from '@/redux/jobSlice';
import useGetJobs from '@/hooks/useGetJobs';


function Browse() {
    useGetJobs();
    const dispatch = useDispatch();
    const { allJobs } = useSelector(store => store.job);
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchJob(""))
        }
    },[])
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job} />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Browse   