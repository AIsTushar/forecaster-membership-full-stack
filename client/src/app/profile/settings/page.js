"use client";

import Input from "@/components/Input";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

function Page() {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const { changePassword, isLoading, logout } = useAuthStore();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        "https://forecaster-membership-full-stack.vercel.app/api/auth/me",
        {
          withCredentials: true,
        }
      );
      const data = response.data.user;
      setUser(data);
      setUser(data);
      setName(data?.name || "");
      setEmail(data?.email || "");
    };
    fetchUser();
  }, []);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    try {
      changePassword(password, confirmPassword);
      logout();
      router.push("/auth/login");
      console.log(password, confirmPassword);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="max-w-md w-full bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
              Account Settings
            </h2>

            <form>
              <Input
                icon={User}
                type="text"
                placeholder="Full Name"
                value={name}
              />

              <Input
                icon={Mail}
                type="email"
                placeholder="Email Address"
                value={email}
                disabled
              />

              <button
                className="w-full cursor-pointer py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                type="submit"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>

      <span className="block h-px bg-gray-300"></span>

      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="max-w-md w-full bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
              Change Password
            </h2>

            <form onSubmit={handlePasswordChange}>
              <Input
                icon={Lock}
                type="password"
                placeholder="Current Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Input
                icon={Lock}
                type="password"
                placeholder="New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                className="w-full cursor-pointer py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                type="submit"
              >
                {isLoading ? <Loader className="animate-spin" /> : "Save"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
