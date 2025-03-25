"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  BadgeCheck,
  DollarSign,
  Home,
  LogOutIcon,
  Settings,
  UserCheck,
} from "lucide-react";
import clsx from "clsx";
import { useAuthStore } from "@/store/authStore";

function SideNav() {
  const pathname = usePathname();
  const { logout, isLoading, user } = useAuthStore();
  const router = useRouter();

  const admin = user?.isAdmin;

  console.log(admin);

  const handleLogout = async () => {
    if (isLoading) return;
    try {
      await logout();
      router.push("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className=" h-full w-64 bg-white/15 p-6 shadow-lg rounded-md min-h-[80vh]">
      {/* Navigation Links */}
      <nav className="space-y-2">
        {navLinks.map(({ href, Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex items-center text-white rounded-lg p-2 hover:text-black hover:bg-gray-100",
              { "bg-gray-200 !text-black": pathname === href }
            )}
          >
            <Icon className="mr-3 h-5 w-5" />
            {label}
          </Link>
        ))}

        {admin && (
          <Link
            href="/profile/adminDashboard" // Replace with your admin route
            className={clsx(
              "flex items-center text-white rounded-lg p-2 hover:text-black hover:bg-gray-100",
              {
                "bg-gray-200 !text-black":
                  pathname === "/profile/adminDashboard",
              }
            )}
          >
            <UserCheck className="mr-3 h-5 w-5" />
            Admin Dashboard
          </Link>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center text-white rounded-lg p-2 hover:text-black hover:bg-gray-100 w-full"
          disabled={isLoading}
        >
          <LogOutIcon className="mr-3 h-5 w-5" />
          {isLoading ? "Logging out..." : "Logout"}
        </button>
      </nav>
    </div>
  );
}

const navLinks = [
  { href: "/profile", Icon: Home, label: "Dashboard" },
  { href: "/profile/membership", Icon: BadgeCheck, label: "Membership" },
  {
    href: "/profile/billing",
    Icon: DollarSign,
    label: "Billing & Payments",
  },
  { href: "/profile/settings", Icon: Settings, label: "Settings" },
];

export default SideNav;
