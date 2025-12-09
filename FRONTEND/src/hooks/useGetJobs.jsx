import { setAllJobs } from '@/redux/jobSlice'
import { JOBS_URL } from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetJobs = () => {
    const dispatch = useDispatch();
    const {searchJob} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOBS_URL}/get`,{withCredentials:true});
                dispatch(setAllJobs(res.data.data));

            } catch (error) {
                console.log(error);
                
            }
        }
        fetchAllJobs();
    },[])
}

export default useGetJobs