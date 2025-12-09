import { setSingleCompany } from '@/redux/companySlice'
import { COMPANY_URL} from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetCompany = (companyID) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_URL}/get/${companyID}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setSingleCompany(res.data.company));
                }

            } catch (error) {
                console.log(error);
                
            }
        }
        fetchSingleCompany();
    },[companyID,dispatch])
}

export default useGetCompany