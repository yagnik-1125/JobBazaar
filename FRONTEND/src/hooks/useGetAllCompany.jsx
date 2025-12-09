import { setCompanies } from '@/redux/companySlice'
import { COMPANY_URL} from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const uesGetAllCompany = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`${COMPANY_URL}/get`,{withCredentials:true});
                if(res.data.success){
                    // console.log(res.data.companies);
                    dispatch(setCompanies(res.data.companies));
                }

            } catch (error) {
                console.log(error);
                
            }
        }
        fetchCompanies();
    },[])
}

export default uesGetAllCompany