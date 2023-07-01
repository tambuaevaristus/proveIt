import { useRouter } from 'next/router';
import React from 'react'

// export default function PopupModal() {
//   return (
//     <div>

// <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown header <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>


// <div id="dropdownInformation" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
//     <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
//       <div>Bonnie Green</div>
//       <div className="font-medium truncate">name@flowbite.com</div>
//     </div>
//     <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
//       <li>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
//       </li>
//       <li>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
//       </li>
//       <li>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
//       </li>
//     </ul>
//     <div className="py-2">
//       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
//     </div>
// </div>

//     </div>
//   )
// }

type props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    onConfirm: any;
  };
  export default function PopupModal({ setShowModal, onConfirm }: props) {
    const router = useRouter();
    return (
      <div className="modal">
        <div className="w-[800px] bg-white mx-52 rounded-xl my-48 items-center">
          <div className="flex items-center justify-between rounded-t-xl bg-blue-900 px-8 pt-4 pb-4">
            <h3 className="h11 text-left text-white font-semibold">
              Project Name
            </h3>
            <div>

 <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown header <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>


 <div id="dropdownInformation" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
     <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
       <div>Bonnie Green</div>
      <div className="font-medium truncate">name@flowbite.com</div>
     </div>
     <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
       </li>
     <li>
         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
       </li>
       <li>
         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
       </li>
     </ul>
     <div className="py-2">      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
     </div>
 </div>

     </div>
          </div>
         
          
          <div className="grid grid-cols-2 gap-10">
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
                  onConfirm(e);
                  setShowModal(false);
                }}
              >
                <div className="flex items-center gap-1">Invite</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
