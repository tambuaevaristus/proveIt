import React from "react";
import { useRouter } from "next/router";
import { Fragment, useRef, useState } from "react";

import CustomModal from "@/components/Modal";

export default function add_member() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button
        className="rounded-lg uppercase border-2 border-blue-900 text-center px-3 py-2 text-sm my-32 ml-[200px]"
        onClick={(e) => {setModal(!modal)}}
      >
        <div className="flex items-center gap-1">Invite</div>
      </button>
      {modal && (
        <CustomModal setShowModal={setModal} onConfirm={() => {setModal(false)}} />
      )}
    </div>
  );
}
