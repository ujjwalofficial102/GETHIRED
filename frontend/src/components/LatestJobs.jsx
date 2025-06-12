import React from "react";
import LatestjobCards from "./LatestjobCards";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LatestJobs = () => {
  const { allJobs } = useSelector((state) => state.job);

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-5 ">
        {allJobs?.length === 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => <LatestjobCards key={job?._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
