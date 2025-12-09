import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_URL } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get(`${APPLICATION_URL}/get`,{withCredentials:true});
                // console.log(res.data.data); 
                dispatch(setAllAppliedJobs(res.data.data));

            } catch (error) {
                console.log(error);
            }
        };

        fetchAppliedJobs();
    }, []);
};

export default useGetAppliedJobs;
