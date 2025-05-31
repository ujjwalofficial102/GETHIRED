import React from "react";
import LatestjobCards from "./LatestjobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-5 ">
        {randomJobs.slice(0, 6).map((item, index) => (
          <LatestjobCards key={index} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
