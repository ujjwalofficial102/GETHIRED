import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  const jobId = job?._id;

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  };
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 transform transition-transform duration-300 hover:scale-105">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className={"rounded-full"} size={"icon"}>
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant={"outline"} size={"icon"}>
          <Avatar>
            <AvatarImage
              src={
                job?.company?.logo
                  ? job.company.logo
                  : "https://img.freepik.com/premium-vector/beautiful-unique-logo-design-ecommerce-retail-company_1287271-14561.jpg?semt=ais_hybrid&w=740"
              }
            />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex gap-1 items-center mt-4">
        <Badge className={"text-blue-700 font-bold "} variant="ghost">
          {job?.position} Position
        </Badge>
        <Badge className={"text-[#F83002] font-bold "} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209B7] font-bold "} variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 flex-wrap mt-5">
        <Button
          className="cursor-pointer"
          variant="outline"
          onClick={() => navigate(`/description/${jobId}`)}
        >
          Details
        </Button>
        <Button className="bg-[#7209B7] hover:bg-[#7209d7] cursor-pointer">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
