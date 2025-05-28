import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "student",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!input.fullname || !input.email || !input.password) {
      console.log("empty field");
      return;
    }
    console.log(input);
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-300 p-5 rounded-lg my-4"
        >
          <h1 className="font-bold text-xl text-center">Sign Up</h1>
          <div>
            <div className="my-4 space-y-1">
              <Label>Full Name</Label>
              <Input
                type="text"
                value={input.fullname}
                name="fullname"
                onChange={changeEventHandler}
                placeholder="John doe"
              />
            </div>
            <div className="my-4 space-y-1">
              <Label>Email</Label>
              <Input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="my-4 space-y-1">
              <Label>Phone Number</Label>
              <Input
                type="number"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
                placeholder="9876543210"
              />
            </div>
            <div className="my-4 space-y-1">
              <Label>Password</Label>
              <Input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Enter Password"
              />
            </div>
            <div className="">
              <Label>Role</Label>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-1">
                  <Input
                    id="r1"
                    type="radio"
                    value="student"
                    onChange={changeEventHandler}
                    name="role"
                    className="cursor-pointer"
                    checked={input.role === "student"}
                  />

                  <Label className="cursor-pointer" htmlFor="r1">
                    Student
                  </Label>
                </div>
                <div className="flex items-center space-x-1">
                  <Input
                    id="r2"
                    type="radio"
                    value="recruiter"
                    onChange={changeEventHandler}
                    name="role"
                    className="cursor-pointer"
                    checked={input.role === "recruiter"}
                  />
                  <Label className="cursor-pointer" htmlFor="r2">
                    Recruiter
                  </Label>
                </div>
              </div>
            </div>
            <div className=" my-2 space-y-1">
              <Label>Profile Image</Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                name="file"
                className="cursor-pointer"
              />
            </div>
          </div>

          <Button type="submit" className="w-full my-2 cursor-pointer">
            Sign Up
          </Button>
          <div className="text-sm flex justify-center">
            <span className="flex gap-1">
              Already have an account?
              <Link to="/login" className="text-blue-600 hover:underline ">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
