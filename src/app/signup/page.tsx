'use client';
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

const SignupPage = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  })

  const onSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const username = form.get("username") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    

    setUser({username, email, password});
    console.log("User stored in state:", { username, email, password });
  }
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={onSignup}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Username</label>
          <input
            type="text"
            name="username"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
        <Link href='/login'>Go to login</Link>
      </form>
    </div>
  );
};

export default SignupPage;
