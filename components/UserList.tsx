import React from "react";
import User from "./User";
import Link from "next/link";

export default function UserList() {
  return (
    <div className="mx-auto container lg:pr-5 my-10">
      <h4 className="mb-4 text-lg font-semibold text-gray-600">
        Members
      </h4>
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
        <Link href="/add_member" className="p-3 float-right my-4 text-white bg-blue-500 rounded-md">Add Member</Link>
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
    </div>
  );
}
