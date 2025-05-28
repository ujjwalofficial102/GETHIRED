import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      console.log("empty field");
      return;
    }
    console.log(input);
  };
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center items-center max-w-7xl mx-auto h-10/12">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-300 p-5 rounded-lg "
        >
          <h1 className="font-bold text-xl mb-5 text-center">Log In</h1>
          <div>
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
              <div className="flex gap-8">
                <div className="flex items-center space-x-1">
                  <Input
                    id="r1"
                    type="radio"
                    name="role"
                    value="student"
                    onChange={changeEventHandler}
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
                    name="role"
                    value="recruiter"
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                    checked={input.role === "recruiter"}
                  />
                  <Label className="cursor-pointer" htmlFor="r2">
                    Recruiter
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full my-2 cursor-pointer">
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
