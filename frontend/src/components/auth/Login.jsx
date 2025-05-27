import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center items-center max-w-7xl mx-auto h-10/12">
        <form
          action=""
          className="w-1/2 border border-gray-300 p-5 rounded-lg "
        >
          <h1 className="font-bold text-xl mb-5 text-center">Log In</h1>
          <div>
            <div className="my-4 space-y-1">
              <Label>Email</Label>
              <Input type="email" placeholder="johndoe@gmail.com" />
            </div>

            <div className="my-4 space-y-1">
              <Label>Password</Label>
              <Input type="password" placeholder="Enter Password" />
            </div>
            <div className="">
              <Label>Role</Label>
              <div className="flex gap-8">
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
          </div>

          <Button type="submit" className="w-full my-2">
            Log In
          </Button>
          <div className="text-sm flex justify-center">
            <span className="flex gap-1">
              Don't have an account?
              <Link to="/signup" className="text-blue-600 hover:underline ">
                Signup
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
