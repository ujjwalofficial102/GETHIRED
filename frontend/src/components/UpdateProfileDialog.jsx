import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="block text-right">
                  Name
                </Label>
                <Input id="name" name="name" className="col-span-3"></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="block text-right">
                  Email
                </Label>
                <Input id="email" name="email" className="col-span-3"></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber" className="block text-right">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  className="col-span-3"
                ></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="block text-right">
                  Bio
                </Label>
                <Input id="bio" name="bio" className="col-span-3"></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="block text-right">
                  Skills
                </Label>
                <Input id="skills" name="skills" className="col-span-3"></Input>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="block text-right">
                  resume
                </Label>
                <Input
                  type="file"
                  id="file"
                  name="file"
                  accept="application/pdf"
                  className="col-span-3 cursor-pointer"
                ></Input>
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button
                  type="button"
                  className="w-full my-2 cursor-not-allowed"
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin " />
                </Button>
              ) : (
                <Button type="submit" className="w-full my-2 cursor-pointer">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
