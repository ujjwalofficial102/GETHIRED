import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { Badge } from "../ui/badge";

const shortListingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  const statusHandler = async (status, id) => {
    try {
      const res = await axios.put(
        `${APPLICATION_API_END_POINT}/updatestatus/${id}`,
        { status },
        { withCredentials: true }
      );
      if (res.data.success === true) {
        toast.success(res.data.message);
        console.log(res.data);
      } else {
        toast.error(res.data.message);
        console.log(res.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
      console.log(error);
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of recent applied users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className={"text-right"}>status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants?.length > 0 &&
            applicants.map((item) => (
              <TableRow key={item?._id}>
                <TableCell>{item?.applicant?.fullname}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                <TableCell className={"text-blue-600"}>
                  <a target="_blank" href={item?.applicant?.profile?.resume}>
                    {item?.applicant?.profile?.resumeOriginalName || (
                      <span className="text-black">NA</span>
                    )}
                  </a>
                </TableCell>
                <TableCell>{item?.createdAt?.split("T")[0]}</TableCell>
                <TableCell className={"text-right"}>
                  {item?.status === "accepted" && (
                    <Badge className="bg-green-600">
                      {item?.status.toUpperCase()}
                    </Badge>
                  )}
                  {item?.status === "rejected" && (
                    <Badge className="bg-red-600">
                      {item?.status.toUpperCase()}
                    </Badge>
                  )}
                  {item?.status === "pending" && (
                    <Badge className="bg-orange-400">
                      {item?.status.toUpperCase()}
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger className="cursor-pointer">
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className={"w-30"}>
                      {shortListingStatus.map((status, index) => (
                        <div
                          onClick={() => statusHandler(status, item?._id)}
                          key={index}
                          className="flex w-fit items-center my-2 cursor-pointer"
                        >
                          <span>{status}</span>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
