import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiDocumentText } from "react-icons/hi";

type props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function CustomModal({ setShowModal }: props) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [team, setTeam] = useState("");
  const [role, setRole] = useState("");
  const [position, setPosition] = useState("");
  const [timeTrackingStatus, setTimeTrackingStatus] = useState("");
  const [error, setError] = useState("");

  let userId: string = '455i45i4645034034';
  let activities: Array<string> = [];
  let projects: Array<string> = [];

  const showLogs = async (e: any) => {

    e.preventDefault()

    const user = {name, email, phoneNumber, workingHours, team, role, position, timeTrackingStatus, userId, activities, projects}

    const response = await fetch("https://prove-it-api.onrender.com/api/general/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        'Content-Type': "application/json",
      }
    })

    const json = await response.json();

    if(!response.ok) {
      setError(json.error)
    }
    if(response.ok) {
      setName("")
      setEmail("")
      setPhoneNumber("")
      setWorkingHours("")
      setTeam("")
      setRole("")
      setPosition("")
      setTimeTrackingStatus("")
      console.log("New user created", json)
    }
  };

  return (
    <div className="modal z-20 absolute">
      <div className="w-[800px] bg-white mx-52 rounded-xl my-[-20px] items-center">
        <div className="flex items-center justify-between rounded-t-xl bg-blue-900 px-8 pt-4 pb-4">
          <h3 className="h11 text-left text-white font-semibold">
            Add team members
          </h3>
          <button className="" onClick={() => setShowModal(false)}>
            <AiOutlineClose className="text-white text-2xl" size={25} />
          </button>
        </div>
        <div className="my-5 text-left px-8">
          <h2 className="font-semibold my-1">
            Add team members to track their productivity
          </h2>
          <div className="flex items-center gap-1">
            <h5>Creating teams keeps you organized. Add new teams in</h5>
            <h5 className="text-blue-900 font-semibold">Settings</h5>
            <FaLongArrowAltRight className="mt-2 text-blue-900 font-semibold" />
            <h5 className="text-blue-900 font-semibold">Teams</h5>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 px-8">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            autoComplete="full-names-1"
            className="block w-[92%] rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-2 ring-inset ring-blue-900 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="professional-email-1"
            className="block w-[92%] rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-2 ring-inset ring-blue-900 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            placeholder="Phone number"
            autoComplete="professional-number-1"
            className="block w-[92%] rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-2 ring-inset ring-blue-900 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <input
            type="text"
            name="working-hours"
            id="working-hours"
            placeholder="Working hours"
            autoComplete="working-hours-1"
            className="block w-[92%] rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-2 ring-inset ring-blue-900 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            value={workingHours}
            onChange={(e) => {
              setWorkingHours(e.target.value);
            }}
          />
          <div className="relative after:content-['▼'] after:text-[1.25rem] after:top-[6px] after:right-[40px] after:absolute">
            <select
              id="status"
              name="status"
              autoComplete="status-name"
              className="block w-[400px] rounded-md border-0 py-3 text-gray-600 shadow-sm ring-2 ring-inset ring-blue-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 bg-white -webkit-appearance:none appearance-none"
              onChange={(e) => {
                setRole(e.target.value);
              }}
              value={role}
            >
              <option>Status</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="relative after:content-['▼'] after:text-[1.25rem] after:top-[6px] after:right-[40px] after:absolute">
            <select
              id="team"
              name="team"
              autoComplete="team-name"
              className="block w-[400px] rounded-md border-0 py-3 text-gray-600 shadow-sm ring-2 ring-inset ring-blue-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 bg-white -webkit-appearance:none appearance-none"
              onChange={(e) => {
                setTeam(e.target.value);
              }}
              value={team}
            >
              <option>Select a team</option>
              <option value="Cliqkets" className="hover:bg-blue-900">Cliqkets</option>
              <option value="Cassvita">Cassvita</option>
              <option value="Itamba">Itamba</option>
              <option value="CIMFEST">CIMFEST</option>
            </select>
          </div>
          <div className="relative after:content-['▼'] after:text-[1.25rem] after:top-[6px] after:right-[40px] after:absolute">
            <select
              id="role"
              name="role"
              autoComplete="role-name"
              className="block w-[400px] rounded-md border-0 py-3 text-gray-600 shadow-sm ring-2 ring-inset ring-blue-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 bg-white -webkit-appearance:none appearance-none"
              onChange={(e) => {
                setPosition(e.target.value);
              }}
              value={position}
            >
              <option>Choose role in team</option>
              <option value="Lead-engineer">Lead Engineer</option>
              <option value="Lead-designer">Lead Designer</option>
              <option value="Software-engineer">Software Engineer</option>
              <option value="Graphic-designer">Graphic Designer</option>
            </select>
          </div>
          <div className="relative after:content-['▼'] after:text-[1.25rem] after:top-[6px] after:right-[40px] after:absolute">
            <select
              id="time-tracking-status"
              name="time-tracking-status"
              autoComplete="time-tracking-status"
              className="block w-[400px] rounded-md border-0 py-3 text-gray-600 shadow-sm ring-2 ring-inset ring-blue-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2 bg-white -webkit-appearance:none appearance-none"
              onChange={(e) => {
                setTimeTrackingStatus(e.target.value);
              }}
              value={timeTrackingStatus}
            >
              <option>Monitoring state</option>
              <option value="True">True</option>
              <option value="False">False</option>
            </select>
          </div>
          <div></div>
          {/* <div></div> */}
          <div>
            <h3 className="text-left">Import from:</h3>
            <div className="flex items-center justify-between gap-5">
              <button className="rounded-lg uppercase border-2 border-blue-900 text-center px-5 py-2 text-sm hover:bg-blue-900 hover:text-white">
                Slack
              </button>
              <button className="rounded-lg uppercase border-2 border-blue-900 text-center px-5 py-2 text-sm hover:bg-blue-900 hover:text-white">
                <div className="flex items-center gap-1">
                  <FcGoogle size={20} /> Workspace
                </div>
              </button>
              <button className="rounded-lg uppercase border-2 border-blue-900 text-center px-3 py-2 text-sm hover:bg-blue-900 hover:text-white">
                <div className="flex items-center gap-1">
                  Csv <HiDocumentText size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <p
          className="w-full pt-10 pb-6
            "
        >
          <hr />
        </p>
        <div className="grid grid-cols-2 gap-10">
          <div></div>
          <div className="items-center justify-end gap-6 flex mx-8">
            <button
              className="rounded-lg uppercase border-2 border-blue-900 text-center px-3 py-2 text-sm hover:bg-blue-900 hover:text-white"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <div className="flex items-center gap-1">Close</div>
            </button>
            <button
              className="rounded-lg uppercase border-2 border-blue-900 text-center px-3 py-2 text-sm hover:bg-blue-900 hover:text-white"
              onClick={(e) => {
                showLogs(e);
              }}
            >
              <div className="flex items-center gap-1">Add User</div>
            </button>
          </div>
        </div>
        <div className="flex gap-x-3 px-8 pb-10">
          <div className="flex h-6 items-center">
            <input
              id="invite"
              name="invite"
              type="checkbox"
              className="h-4 w-4 rounded border-blue-900 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-500">
              Send invite email to team members
            </label>
          </div>
        </div>
      </div>
      {/* </Modal> */}
    </div>
  );
}
