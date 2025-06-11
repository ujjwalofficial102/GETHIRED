import React, { useEffect } from "react";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { useParams } from "react-router-dom";
import { setAllApplicants } from "@/redux/applicationSlice";

const Applicants = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { applicants } = useSelector((store) => store.application);
  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/applicants/${id}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.success === true) {
          dispatch(setAllApplicants(res.data.applications));
        } else {
          console.log(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllApplicants();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="font-bold text-xl my-5">
          Applicants({applicants?.length})
        </h1>
        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicants;
