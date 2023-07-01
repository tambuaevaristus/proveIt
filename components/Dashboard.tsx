import React from "react";
import { BsBuildingCheck } from "react-icons/bs";
import { FaAudible, FaBuffer, FaHandsHelping, FaUsers } from "react-icons/fa";

import { FiUsers } from "react-icons/fi";
import { PieChart } from "react-minimal-pie-chart";

export default function Dashboard() {
  return (
    <div>
      <div className="grid gap-6 mb-8 mt-20 containter  md:grid-cols-2 xl:grid-cols-3">
        <div className=" text-[] p-4 bg-[#E5EFFC] rounded-lg shadow-xs">
          <p className="text-[35] font-bold">MEMBERS</p>
          <div className="flex gap-5 mt-2">
            <FaUsers size={45} className="text-[#1843C8] mt-1" />
            <p className="font-bold text-[35px]">25</p>
          </div>
        </div>
        <div className=" text-[] p-4 bg-[#E5EFFC] rounded-lg shadow-xs">
          <p className="text-[35] font-bold">GENERAL PROJECTS</p>
          <div className="flex gap-5 mt-2">
            <FaAudible size={45} className="text-[#1843C8] mt-1" />
            <p className="font-bold text-[35px]">25</p>
          </div>
        </div>
        <div className=" text-[] p-4 bg-[#E5EFFC] rounded-lg shadow-xs">
          <p className="text-[35] font-bold">CLIENTS</p>
          <div className="flex gap-5 mt-2">
            <FaHandsHelping size={45} className="text-[#1843C8] mt-1" />
            <p className="font-bold text-[35px]">15</p>
          </div>
        </div>
        <div className=" text-[] p-4 bg-[#E5EFFC] rounded-lg shadow-xs">
          <p className="text-[35] font-bold">TEAMS</p>
          <div className="flex gap-5 mt-2">
            <FiUsers size={45} className="text-[#1843C8] mt-1" />
            <p className="font-bold text-[35px]">25</p>
          </div>
        </div>
        <div className=" text-[] p-4 bg-[#E5EFFC] rounded-lg shadow-xs">
          <p className="text-[35] font-bold">TOP ASSIGNED PROJECTS</p>
          <div className="flex gap-5 mt-2">
            <FaBuffer size={45} className="text-[#1843C8] mt-1" />
            <p className="font-bold text-[35px]">25</p>
          </div>
        </div>
        <div>
          <div className=" text-[] p-4 bg-[#E5EFFC] rounded-lg shadow-xs">
            <p className="text-[35] font-bold">COMPLETED PROJECTS</p>
            <div className="flex gap-5 mt-2">
              <BsBuildingCheck size={45} className="text-[#1843C8] mt-1" />
              <p className="font-bold text-[35px]">25</p>
            </div>
          </div>
        </div>

      </div>
        <div className="grid gap-6 mb-8 mt-20 containter  md:grid-cols-2 xl:grid-cols-3">
          <div className=" text-[] p-4 shadow-lg rounded-lg shadow-xs">
            <p className="text-[35] font-bold">Productivity Bar</p>
            <div className="flex gap-5 mt-2">
              <BsBuildingCheck size={45} className="text-[#1843C8] mt-1" />
              <p className="font-bold text-[35px]">25</p>
            </div>
          </div>

          <div className=" text-[] p-4 shadow-lg rounded-lg shadow-xs">
            <p className="text-[35] font-bold">Top Project Progress</p>
            <div className="flex gap-5 mt-2">
              <BsBuildingCheck size={45} className="text-[#1843C8] mt-1" />
              <p className="font-bold text-[35px]">25</p>
            </div>
          </div>

          <div className=" text-[] p-4 shadow-lg rounded-lg shadow-xs">
            <p className="text-[35] font-bold">Daily Work Progress</p>
            <div className="flex gap-5 mt-2">
              <BsBuildingCheck size={45} className="text-[#1843C8] mt-1" />
              <p className="font-bold text-[35px]">25</p>
            </div>
          </div>
        </div>
    </div>
  );
}
