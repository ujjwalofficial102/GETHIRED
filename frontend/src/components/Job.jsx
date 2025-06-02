import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "ihskdfhdskfdsf";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 transform transition-transform duration-300 hover:scale-105">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className={"rounded-full"} size={"icon"}>
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant={"outline"} size={"icon"}>
          <Avatar>
            <AvatarImage src="https://img.freepik.com/premium-vector/beautiful-unique-logo-design-ecommerce-retail-company_1287271-14561.jpg?semt=ais_hybrid&w=740" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          beatae magni iusto, unde reprehenderit consectetur nihil nobis
          possimus animi consequatur?
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
