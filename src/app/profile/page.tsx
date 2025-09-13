"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {useState} from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser] = useState("nothing")
  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successfull");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserProfile = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setUser(res.data.data._id)
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h2>It is a profile</h2>
      <hr />
      <h3>Profile page</h3>
      <h2>{user === "nothing" ? "Nothing" : <Link href={`/profile/${user}`}>{user}</Link>}</h2>
      <hr />
      <button
        onClick={onLogout}
        className="mt-4 p-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Logout
      </button>

      <button
        onClick={getUserProfile}
        className="mt-4 p-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Get User
      </button>
    </div>
  );
};

export default ProfilePage;
