"use client";

import { useAuthStore } from "@/store/authStore";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

function Page() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        "https://forecaster-membership-full-stack.vercel.app/api/auth/me",
        {
          withCredentials: true,
        }
      );
      const data = response.data.user;
      console.log(data);
      setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="mb-12">
        <h1 className="text-3xl font-bold">Welcome back,{user?.name} </h1>
      </div>

      <div className="flex items-center gap-26">
        <div className="relative w-96 h-96">
          <Image
            src="/default.jpg"
            alt="Profile"
            className="h-full w-full rounded-full"
            fill
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">{user?.name}</h2>
          <p className="text-xl text-gray-400">{user?.email}</p>
          <div className="mt-8">
            <p className="text-lg">
              Joined :{" "}
              {new Date(user?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-lg">
              Current Plan:{" "}
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                {user?.membership?.tier}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
