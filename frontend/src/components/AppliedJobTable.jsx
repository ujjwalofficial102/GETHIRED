import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  return (
    <div>
      {allAppliedJobs?.length === 0 ? (
        <span>You haven't applied any job yet.</span>
      ) : (
        <Table>
          <TableCaption>A list of your applied jobs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Job Role</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allAppliedJobs?.map((item) => (
              <TableRow key={item?._id}>
                <TableCell>{item?.createdAt?.split("T")[0]}</TableCell>
                <TableCell>{item?.job?.title}</TableCell>
                <TableCell>{item?.job?.company?.name}</TableCell>
                <TableCell className="text-right">
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AppliedJobTable;
