import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const randomJobs = [1, 2, 3];

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {allJobs.map((job, index) => (
            <div key={job._id}>
              <Job job={job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
