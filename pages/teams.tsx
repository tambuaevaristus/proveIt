import Team from '@/components/Team'
import Link from 'next/link'
import React from 'react'

export default function teams() {
  return (
    <div className="mx-auto container lg:pr-5 my-10">
      <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Members
      </h4>
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
        <Link href="/add_member" className="p-3 float-right my-4 text-white bg-blue-500 rounded-md">Add Team</Link>
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50 ">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Members</th>
                <th className="px-4 py-3">Projects</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
                <Team name="Team ProveIt" members="Eva, Desmond, Mirriam, Gilbert" projects="proveIt, Casvita, "/>
            </tbody>
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9 ">
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
  )
}
