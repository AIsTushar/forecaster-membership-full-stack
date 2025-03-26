"use client";

import axios from "axios";
import { CalendarSync, CircleCheck, Gift, Users, X } from "lucide-react";
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
      setUser(data);
    };
    fetchUser();
  }, []);

  console.log(user);

  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {/* <!-- Header --> */}
      <div class="bg-gradient-to-r from-green-600 to-green-300 p-6 text-white">
        <h1 class="text-2xl font-bold">Your Membership</h1>
        <p class="opacity-90">Manage your subscription and benefits</p>
      </div>

      {/* <!-- Content --> */}
      <div class="p-6 space-y-6">
        {/* <!-- Current Tier --> */}
        <div class="flex items-start">
          <div class="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
            <Users className="text-black" />
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-medium text-gray-900">
              Current Membership Tier
            </h3>
            <div class="mt-1">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                {user?.membership?.tier}
              </span>
            </div>
          </div>
        </div>

        {/* <!-- Subscription Status --> */}
        <div class="flex items-start">
          <div class="flex-shrink-0 bg-green-100 p-3 rounded-lg">
            <Gift className="text-black" />
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-medium text-gray-900">
              Subscription Status
            </h3>
            <div class="mt-1">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {user?.membership?.status}
              </span>
            </div>
          </div>
        </div>

        {/* <!-- Next Renewal Date --> */}
        <div class="flex items-start">
          <div class="flex-shrink-0 bg-yellow-100 p-3 rounded-lg">
            <CalendarSync className="text-black" />
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-medium text-gray-900">Next Renewal Date</h3>
            <p class="mt-1 text-gray-600">
              {new Date(user?.membership?.renewalDate).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </p>
          </div>
        </div>

        {/* <!-- Membership Benefits --> */}
        {user?.membership?.status ? (
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-3">
              Membership Benefits
            </h3>
            <ul class="space-y-2 text-black">
              <li class="flex items-center gap-3">
                <CircleCheck className="text-green-500" />
                <span>“Evil” mode </span>
              </li>
              <li class="flex items-cente gap-3">
                {user?.membership?.status !== "BASIC" ? (
                  <CircleCheck className="text-green-500" />
                ) : (
                  <X className="text-red-500" />
                )}
                <span>“Coach” modes</span>
              </li>
              <li class="flex items-center gap-3">
                {user?.membership?.status !== "BASIC" ? (
                  <CircleCheck className="text-green-500" />
                ) : (
                  <X className="text-red-500" />
                )}
                <span>Basic analytics</span>
              </li>
              <li class="flex items-center gap-3">
                {user?.membership?.status === "PREMIUM" ? (
                  <CircleCheck className="text-green-500" />
                ) : (
                  <X className="text-red-500" />
                )}
                <span>All feedback modes</span>
              </li>
              <li class="flex items-center gap-3">
                {user?.membership?.status === "PREMIUM" ? (
                  <CircleCheck className="text-green-500" />
                ) : (
                  <X className="text-red-500" />
                )}
                <span>Advanced analytics</span>
              </li>
            </ul>
          </div>
        ) : null}

        {/* <!-- Action Buttons --> */}
        <div class="flex space-x-4 pt-4">
          <button class="flex-1 cursor-pointer bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out">
            Upgrade Plan
          </button>
          <button class="flex-1 cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out">
            Cancel Membership
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
