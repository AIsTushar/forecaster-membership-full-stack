"use client";

import axios from "axios";
import { BadgeDollarSign } from "lucide-react";
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
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Payment Management
      </h2>

      {/* Saved Payment Methods */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700">
          Saved Payment Methods
        </h3>
        <div className="mt-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
            {/* Example Credit Card */}
            <div className="flex items-center space-x-3">
              <div className="bg-gray-700 p-2 rounded-lg">
                <BadgeDollarSign />
              </div>
              <div>
                <p className="font-semibold text-gray-700">**** 1234</p>
                <p className="text-sm text-gray-500">Expires 12/24</p>
              </div>
            </div>
            <button className="ml-auto cursor-pointer text-red-600 hover:text-red-800">
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700">Billing History</h3>
        <div className="mt-4 space-y-4">
          {/* Billing Record */}
          {user?.transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
            >
              <div>
                <p className="text-gray-700">
                  {transaction.description ||
                    "Membership Subscription - Premium"}{" "}
                </p>
                <p className="text-sm text-gray-500">
                  Paid on{" "}
                  {new Date(transaction.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                </p>
              </div>
              <div className="font-semibold text-gray-800">
                {transaction.amount
                  ? `$${transaction.amount.toFixed(2)}`
                  : "$0.00"}{" "}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button className="px-6 py-3 cursor-pointer text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          Update Payment Method
        </button>
      </div>
    </div>
  );
}

export default Page;
