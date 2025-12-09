import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { APPLICATION_URL } from '@/utils/constant'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setApplicants } from '@/redux/applications'

function Applicants() {
    const params = useParams();
    const dispatch = useDispatch();
    const {applicants} = useSelector((state) => state.application);
    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_URL}/${params.id}/applicants`,{withCredentials:true});
                // console.log(res.data);
                dispatch(setApplicants(res.data.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchApplicants();
    }, [])
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto'>
            <h1 className='font-bold text-xl my-5'>Applicants ({applicants?.length})</h1>
            <ApplicantsTable />
        </div>
    </div>
  )
}

export default Applicants