
import { setAllAdminJobs } from '@/redux/jobSlice'
import { JOBS_URL } from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllAdminJobs = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                // console.log(2);
                
                const res = await axios.get(`${JOBS_URL}/adminjobs`, { withCredentials: true });
                // console.log(res.data.data);

                dispatch(setAllAdminJobs(res.data.data));                

            } catch (error) {
                console.log(error);

            }
        }
        fetchAllAdminJobs();
    }, [])
}

export default useGetAllAdminJobs