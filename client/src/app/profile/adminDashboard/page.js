"use client";
import { Edit, MoreVertical, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Page() {
  const handleDelete = async (userId) => {};
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const toggleDropdown = (eventId) => {
    setOpenDropdownId(openDropdownId === eventId ? null : eventId);
  };
  const users = [
    {
      id: 1,
      profileImage: "/default.jpg",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      profileImage: "/default.jpg",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      profileImage: "/default.jpg",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "User",
      status: "Active",
    },
  ];
  return (
    <div className=" w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="min-h-screen p-6">
          <h1 className="mb-6 text-2xl font-bold ">My Users</h1>
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <table className="min-w-full">
              <thead className="bg-gray-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  uppercase">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider  uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-black">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="transition-colors hover:bg-gray-50"
                  >
                    {/* User Image */}
                    <td className="px-3 py-1">
                      <Image
                        src={user.profileImage}
                        alt={user.name}
                        width={16}
                        height={16}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    </td>

                    {/* User Name */}
                    <td className="px-6 py-4">
                      <p className="text-md">{user.name}</p>
                    </td>

                    {/* User Email */}
                    <td className="px-6 py-4">
                      <p className="text-md">{user.email}</p>
                    </td>

                    {/* User Role */}
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800">
                        {user.role}
                      </span>
                    </td>

                    {/* User Status */}
                    <td className="px-6 py-4">
                      {user.status === "Active" ? (
                        <span className="rounded-full bg-green-100 px-2 py-1 text-sm font-medium text-green-800">
                          Active
                        </span>
                      ) : (
                        <span className="rounded-full bg-red-100 px-2 py-1 text-sm font-medium text-red-800">
                          Inactive
                        </span>
                      )}
                    </td>

                    {/* Actions (Edit/Delete) */}
                    <td className="px-6 py-4">
                      <div className="dropdown-container relative">
                        <button
                          onClick={() => toggleDropdown(user.id)}
                          className="rounded-full p-2 hover:bg-gray-200"
                        >
                          <MoreVertical className="h-5 w-5 text-gray-600" />
                        </button>
                        {openDropdownId === user.id && (
                          <div className="absolute -top-12 -left-22 z-10 mt-2 w-24 rounded-lg border border-gray-200 bg-white shadow-lg">
                            <Link
                              href="#"
                              className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                              <Trash className="mr-2 h-4 w-4" />
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
