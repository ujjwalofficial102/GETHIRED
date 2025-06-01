import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./job";

const randomJobs = [1, 2, 3];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({randomJobs.length})
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {randomJobs.map((item, index) => (
            <div key={index}>
              <Job />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
