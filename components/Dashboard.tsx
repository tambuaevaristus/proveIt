import React from "react";
import { BsBuildingCheck } from "react-icons/bs";
import { FaAudible, FaBuffer, FaHandsHelping, FaUsers } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { PieChart } from "react-minimal-pie-chart";
import ScreenShots from "./ScreenShots";
import { BiUserPlus } from "react-icons/bi";

export default function Dashboard() {
  return (
    <div className=" mb-8 mt-10 containter mx-auto">
    <div className="w-1/3 mx-auto">
      <BiUserPlus size={100} className="text-[#1843C8] mx-auto "/>
      <p className=" text-gray-600 my-3 text-center">ProveIt Dashboard shows an overview of the tracked time, and Data of your employees, To start Add your Employees</p>
      <button className="text-white bg-[#1843C8] p-3 rounded-md flex gap-2 mx-auto">Add Employee</button>
    </div>
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

        <div className=" text-[] p-5 shadow-lg rounded-lg shadow-xs">
          <p className="text-[35] font-bold">Top Project Progress</p>
          <div className="flex gap-4 mt-2">
            <div className="p-2">
              <PieChart
                data={[
                  { title: "One", value: 10, color: "#1843C8" },
                  { title: "Two", value: 55, color: "#E5EFFC" },
                ]}
              />

              <p className="font-bold">Casvita</p>
            </div>
            <div className="p-2">
              <PieChart
                data={[
                  { title: "One", value: 17, color: "#1843C8" },
                  { title: "Two", value: 15, color: "#E5EFFC" },
                ]}
              />
              <p className="font-bold">Bohikor</p>
            </div>
            <div className="p-2">
              <PieChart
                data={[
                  { title: "One", value: 10, color: "#1843C8" },
                  { title: "Two", value: 15, color: "#E5EFFC" },
                ]}
              />
              <p className="font-bold">Cliqets</p>
            </div>
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

      <h2 className="font-bold mt-20">Employees Last Screen Shot</h2>
      <div className=" mb-8 mt-5 shadow-xl flex gap-3">
        <div className="w-40 h-40 brder-1">
          <img width="100%" className="h-[100px]" src="/file.jpg" alt="" />
          <h3 className="my-2 font-bold">Evas Screen</h3>
        </div>
        <div className="w-40 h-40 brder-1">
          <img width="100%" className="h-[100px]" src="/1.png" alt="" />
          <h3 className="my-2 font-bold">Benards Screen</h3>
        </div>
        <div className="w-40 h-40 brder-1">
          <img width="100%" className="h-[100px]" src="/file.jpg" alt="" />
          <h3 className="my-2 font-bold">Desmonds Screen</h3>
        </div>
        <div className="w-40 h-40 brder-1">
          <img width="100%" className="h-[100px]" src="/2.png" alt="" />
          <h3 className="my-2 font-bold">Miriams Screen</h3>
        </div>
        <div className="w-40 h-40 brder-1">
          <img width="100%" className="h-[100px]" src="/3.png" alt="" />
          <h3 className="my-2 font-bold">Desmonds Screen</h3>
        </div>
        <div className="w-40 h-40 brder-1">
          <img width="100%" className="h-[100px]"  src="/file.jpg" alt="" />
          <h3 className="my-2 font-bold">Evas Screen</h3>
        </div>
        <div className="w-40 h-40 brder-1">
          <img width="100%" className="h-[100px]" src="/4.png" alt="" />
          <h3 className="my-2 font-bold">Evas Screen</h3>
        </div>
      </div>
    </div>
  );
}
