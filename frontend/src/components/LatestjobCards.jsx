import React from "react";
import { Badge } from "./ui/badge";

const LatestjobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer transform transition-transform duration-300 hover:scale-105">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet.
        </p>
      </div>
      <div className="flex gap-1 items-center mt-4">
        <Badge className={"text-blue-700 font-bold "} variant="ghost">
          Position
        </Badge>
        <Badge className={"text-[#F83002] font-bold "} variant="ghost">
          Part Time
        </Badge>
        <Badge className={"text-[#7209B7] font-bold "} variant="ghost">
          12LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestjobCards;
