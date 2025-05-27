import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-300 p-5 rounded-lg my-4"
        >
          <h1 className="font-bold text-xl text-center">Sign Up</h1>
          <div>
            <div className="my-4 space-y-1">
              <Label>Full Name</Label>
              <Input type="text" placeholder="John doe" />
            </div>
            <div className="my-4 space-y-1">
              <Label>Email</Label>
              <Input type="email" placeholder="johndoe@gmail.com" />
            </div>
            <div className="my-4 space-y-1">
              <Label>Phone Number</Label>
              <Input type="number" placeholder="9876543210" />
            </div>
            <div className="my-4 space-y-1">
              <Label>Password</Label>
              <Input type="password" placeholder="Enter Password" />
            </div>
            <div className="">
              <Label>Role</Label>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-1">
                  <Input
                    id="r1"
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                    defaultChecked
                  />

                  <Label className="cursor-pointer" htmlFor="r1">
                    Student
                  </Label>
                </div>
                <div className="flex items-center space-x-1">
                  <Input
                    id="r2"
                    type="radio"
                    name="role"
                    value="recruiter"
                    className="cursor-pointer"
                  />
                  <Label className="cursor-pointer" htmlFor="r2">
                    Recruiter
                  </Label>
                </div>
              </div>
            </div>
            <div className=" my-2 space-y-1">
              <Label>Profile Image</Label>
              <Input accept="image/*" type="file" className="cursor-pointer" />
            </div>
          </div>

          <Button type="submit" className="w-full my-2">
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
