import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      return;
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success === true) {
        toast.success(res.data.message);
        dispatch(setUser(res.data.user));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

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
          {loading ? (
            <Button type="button" className="w-full my-2 cursor-not-allowed">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </Button>
          ) : (
            <Button type="submit" className="w-full my-2 cursor-pointer">
              Log In
            </Button>
          )}

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
