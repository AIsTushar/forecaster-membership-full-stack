"use client";

import { useAuthStore } from "@/store/authStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Eclipses = () => {
  return (
    <>
      <div className="absolute w-[294px] h-[50px] top-[-20px] left-[-150px] bg-[rgba(40,153,68,1)] opacity-90 blur-2xl  rotate-[7.18deg] rounded-full" />
      <div className="absolute hidden lg:block w-[637px] h-[54px] top-[-16px] left-[790px] bg-[rgba(40,153,68,1)] rounded-full blur-xl opacity-50" />
    </>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, checkAuth, user } = useAuthStore();

  useEffect(() => {
    try {
      const checkingAuth = async () => {
        await checkAuth();
      };
      checkingAuth();
    } catch (error) {}
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 w-full h-36 py-8 px-6 lg:relative lg:px-12 text-white z-20">
      <Eclipses />
      <div className="flex items-center justify-between h-[72px] rounded-md py-4 px-6 bg-white/15 backdrop-blur-xl ">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Forecaster Logo"
            width={205}
            height={40}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-24 text-sm ">
          <Link href="#features">Features</Link>
          <Link href="/membership">Membership</Link>
          <Link href="#faq">FAQ</Link>
          {isAuthenticated ? (
            <Link href="/profile">
              <Image
                src="/default.jpg"
                alt="Profile picture"
                width={24}
                height={24}
                className="rounded-full"
              />
            </Link>
          ) : (
            <Link href="/auth/login">Sign in</Link>
          )}
        </nav>

        {/* Hamburger */}
        <button
          className="relative flex flex-col w-6 h-full items-center justify-center lg:hidden"
          onClick={handleClick}
        >
          <span
            className={`absolute h-0.5 w-full transition-all duration-300 bg-black dark:bg-white rounded-md ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>

          <span
            className={`absolute h-0.5 w-full transition-all duration-300 bg-black dark:bg-white rounded-md ${
              isOpen ? "opacity-0 translate-x-2" : "opacity-100"
            }`}
          ></span>

          <span
            className={`absolute h-0.5 w-full transition-all duration-300 bg-black dark:bg-white rounded-md ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full flex flex-col left-0 w-full h-[calc(100vh-72px)] bg-black px-12 z-50">
          <div className=" h-[240px] relative">
            <Image
              src="/photo.png"
              alt="Forecaster Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-6 mt-6 mb-16">
            <Link href="/" className="text-2xl leading-[100%]">
              Features
            </Link>

            <span className="h-[1px] w-full bg-white/20"></span>
            <Link href="/" className="text-2xl leading-[100%]">
              Membership
            </Link>

            <span className="h-[1px] w-full bg-white/20"></span>
            <Link href="/" className="text-2xl leading-[100%]">
              FAQ
            </Link>
            <span className="h-[1px] w-full bg-white/20"></span>
            <Link href="/auth/login" className="text-2xl leading-[100%]">
              Sign in
            </Link>
          </div>

          <button className="bg-gradient-to-r cursor-pointer flex gap-4 py-4 pl-8 pr-5 rounded-full from-[rgba(13,51,23,0.9)] to-[rgba(40,153,68,0.9)] border border-[#289944] shadow-[0px_0px_90px_0px_#289944B2]">
            Get Forecaster{" "}
            <Image src="GolfBall.svg" alt="Golf Ball" width={24} height={24} />
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
