import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { Loader2 } from "lucide-react";

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: "",
    companyId: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { companies } = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success === true) {
        toast.success(res.data.message);
        console.log(res.data);
        navigate("/admin/jobs");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const selectChangeHandler = (value) => {
    setInput({ ...input, companyId: value });
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-screen my-5">
        <form
          onSubmit={submitHandler}
          className="p-6 max-w-4xl border border-gray-200 shadow-lg rounded-md"
        >
          <h1 className="text-center mb-6 text-2xl font-bold">
            Register a New Job
          </h1>
          <div className="grid grid-cols-2 gap-2 space-x-2">
            <div>
              <Label>Title</Label>
              <Input
                type={"text"}
                name="title"
                placeholder="e.g. Frontend Develper"
                value={input.title}
                onChange={changeEventHandler}
                className={
                  "focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                }
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type={"text"}
                name="description"
                placeholder="job description"
                value={input.description}
                onChange={changeEventHandler}
                className={
                  "focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                }
              />
            </div>
            <div>
              <Label>Requirements</Label>
              <Input
                type={"text"}
                name="requirements"
                placeholder="e.g. python, javascript"
                value={input.requirements}
                onChange={changeEventHandler}
                className={
                  "focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                }
              />
            </div>
            <div>
              <Label>Salary</Label>
              <Input
                type={"number"}
                min="0"
                name="salary"
                step="any"
                placeholder="e.g. 8 (in LPA)"
                value={input.salary}
                onChange={changeEventHandler}
                className={
                  "focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                }
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type={"text"}
                name="location"
                placeholder="e.g. Mumbai"
                value={input.location}
                onChange={changeEventHandler}
                className={
                  "focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                }
              />
            </div>
            <div>
              <Label>Job Type</Label>
              <Input
                type={"text"}
                name="jobType"
                placeholder="e.g. Full-Time"
                value={input.jobType}
                onChange={changeEventHandler}
                className={
                  "focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                }
              />
            </div>
            <div>
              <Label>Experience</Label>
              <Input
                type={"number"}
                min="0"
                name="experience"
                step="any"
                placeholder="e.g. 2 (in years)"
                value={input.experience}
                onChange={changeEventHandler}
                className={
                  "focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                }
              />
            </div>
            <div>
              <Label>Position(s)</Label>
              <Input
                type={"number"}
                min="0"
                name="position"
                placeholder="e.g. 4 (vacancies)"
                value={input.position}
                onChange={changeEventHandler}
                className={
                  "focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                }
              />
            </div>
            {companies?.length > 0 && (
              <div className="col-span-2">
                <Label>Company</Label>
                <div className="mt-1">
                  <Select onValueChange={selectChangeHandler}>
                    <SelectTrigger
                      className={
                        "w-full cursor-pointer focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                      }
                    >
                      <SelectValue placeholder="Select a company" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Companies</SelectLabel>
                        {companies?.map((company) => (
                          <SelectItem
                            key={company._id}
                            className={"cursor-pointer"}
                            value={company._id}
                          >
                            {company.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
          {companies?.length === 0 && (
            <p className="text-xs text-red-600 font-bold text-center mt-4">
              *Please register a company first, before posting a job
            </p>
          )}
          {loading === false ? (
            <Button
              type={companies?.length === 0 ? "button" : "submit"}
              className={"w-full mt-2 cursor-pointer"}
            >
              Post New Job
            </Button>
          ) : (
            <Button type="button" className={"w-full mt-2 cursor-not-allowed"}>
              <Loader2 className=" h-4 w-4 animate-spin" />
            </Button>
          )}

          <Button
            variant={"outline"}
            type="button"
            className={"w-full mt-2 cursor-pointer"}
            onClick={() => navigate("/admin/jobs")}
          >
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
