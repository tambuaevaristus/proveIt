import React, { useState} from "react";
import User from "./User";
import Link from "next/link";
import CustomModal from "@/components/Modal";

export default function UserList() {
  const [modal, setModal] = useState(false);
  return (
    <div className="mx-auto container lg:pr-5 my-10">
      <h4 className="mb-4 text-lg font-semibold text-gray-600">
        Members
      </h4>
        <button className="p-3 float-right my-4 text-white bg-blue-900 rounded-md hover:bg-white hover:text-blue-900 disabled:opacity-0" disabled={modal} onClick={(e) => {setModal(!modal)}}>Add Member</button>
        {modal && (
        <CustomModal setShowModal={setModal} />
        )}
      {modal ? (
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs z-10 blur-xl">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">status</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Team</th>
                <th className="px-4 py-3">Project</th>
                <th className="px-4 py-3">Time Tracking Status</th>

                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              <User name="Desmond Teko " status="active" role="Contributor" teamName="Cassvita team, Cimfest Team and ProveIt team" projects="Cassvita, Cimfest, ProveIt" profession="Software Engineer" />
              <User name="Evaristus Tambua " status="active" role="Admin" teamName="Cliqkets team and ProveIt team" projects="Cliqkets, ProveIt" profession="Software Engineer" />
              <User name="Gilbert Tima " status="active" role="Contributor" teamName="Cliqkets team, Cimfest Team and ProveIt team" projects="Cliqkets, Cimfest, ProveIt" profession="Software Engineer" />
              <User name="Miriam Vagansi " status="active" role="Contributor" teamName="Cimfest team and ProveIt team" projects="Cimfest, ProveIt" profession="Designer" />
              <User name="Akoneh Silas  " status="active" role="Contributor" teamName="Cliqkets team and Cimfest Team" projects="Cliqkets, Cimfest, " profession="Software Engineer"  />
              <User name="Foncham Bernard " status="active" role="Contributor" teamName="Cliqkets team and Cassvita team" projects="Cliqkets and Cassvita" profession="Designer"  />
              <User name="Estella Shembom " status="active" role="Contributor" teamName="ProveIt team" projects="ProveIt" profession="Software Engineer"  />
              <User name="Asonganyi Rouclec" status="active" role="Admin" teamName="Cassvita team" projects="Cassvita" profession="Software Engineer"  />
              <User name="Chu Edwin" status="active" role="Admin" teamName="Cassvita team, Itamba team" projects="Cassvita ProveIt" profession="Software Engineer"  />z
            </tbody>
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t  bg-gray-50 sm:grid-cols-9  ">
          <span className="flex items-center col-span-3">
            Showing 10 of 10
          </span>
          <span className="col-span-2"></span>
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
            
            </nav>
          </span>
        </div>
      </div>
      ):(
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs z-10 ">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">status</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Team</th>
                <th className="px-4 py-3">Project</th>
                <th className="px-4 py-3">Time Tracking Status</th>

                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
            </tbody>
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          <span className="flex items-center col-span-3">
            Showing 10 of 10
          </span>
          <span className="col-span-2"></span>
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              {/* <ul className="inline-flex items-center">
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    1
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    2
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                    3
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    4
                  </button>
                </li>
                <li>
                  <span className="px-3 py-1">...</span>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    8
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    9
                  </button>
                </li>
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul> */}
            </nav>
          </span>
        </div>
      </div>
      )}
    </div>
  );
}
