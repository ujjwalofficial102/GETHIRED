import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/alljobs`, {
          withCredentials: true,
        });
        if (res.data.success === true) {
          console.log(res.data);
          dispatch(setAllJobs(res.data.jobs));
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
        console.log(error);
      }
    };
    fetchAllJobs();
  }, []);
};

export default useGetAllJobs;
