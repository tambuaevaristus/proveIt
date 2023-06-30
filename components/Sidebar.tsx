import React, { useState } from "react";
import { BiHelpCircle, BiHome, BiLogOut, BiUser } from "react-icons/bi";

import { BsCreditCard2Front } from "react-icons/bs";
import Navbar from "./Navbar";
import Link from "next/link";
import userSlice from "@/slice/userSlice";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Sidebar({ isNavOpen }: any) {
  const userInfo = useSelector((state: RootState) => state.user);
  console.log(userInfo)
  return (
    <div>
      <div className={isNavOpen ? "block lg:block" : "lg:block hidden"}>
        <div className="fixed left-0 mt-[60px] z-20 p-5 h-screen overflow-y-auto bg-white md:block">
          <div className="py-4 text-gray-500 dark:text-gray-400">
          
            <ul className="mt-6">
              <li className="relative px-6 py-3">
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                  href="/"
                >
                  <BiHome size={20} />

                  <span className="ml-4">Dashboard</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/Timesheet"
                >
                  <BiUser size={20} />
                  <span className="ml-4">Timesheet</span>
                </Link>
              </li>
              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/reports"
                >
                  <BsCreditCard2Front size={20} />
                  <span className="ml-4">Reports</span>
                </Link>
              </li>
              <li className="relative px-6 py-3">
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="chart"
                >
                 <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/members"
                >
                  <BsCreditCard2Front size={20} />
                  <span className="ml-4">Members</span>
                </Link>
                </a>
              </li>
              <li className="relative px-6 py-3">
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="charts.html"
                >
                  <BiHelpCircle size={20} />
                  <span className="ml-4">Setting</span>
                </a>
              </li>{" "}
              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="signin"
                >
                  <BiLogOut size={20} />
                  <span className="ml-4">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
