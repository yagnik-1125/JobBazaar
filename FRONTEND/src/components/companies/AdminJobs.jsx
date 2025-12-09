import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import AdminJobsTable from './AdminJobsTable'
import { setSearchJobByName } from '@/redux/jobSlice'

function AdminJobs() {
  useGetAllAdminJobs();
    const [input,setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setSearchJobByName(input))
    })
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10 '>
                <div className='flex items-center justify-between my-5'>
                    <Input
                        className='w-fit'
                        placeholder='Enter Name'
                        onChange={(e)=>setInput(e.target.value)}
                    />
                    <Button onClick={()=> navigate('/admin/jobs/create')} className='cursor-pointer' >New Jobs</Button>
                </div>
                <div>
                    <AdminJobsTable/>
                </div>

            </div>
        </div>
    )
}

export default AdminJobs