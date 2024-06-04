"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import Modal from "react-modal";

function Post({ pic }) {
  const [modalIsopen, setmodalIsopen] = useState(false);
  return (
    <div className="border rounded-xl w-60 h-44 relative">
      {/* view div */}
      <div className="flex items-center gap-1 absolute bottom-4 left-4">
        <FaEye size={10} className="text-slate-400" />
        <p className="text-xs text-slate-400">5,201 views</p>
      </div>
      {/* process div */}
      <div className="bg-yellow-300 cursor-pointer w-6 rounded-full h-6 flex items-center justify-center absolute bottom-3 right-4">
        <IoIosPlay />
      </div>
      <img
        src={pic}
        className="w-full h-full rounded-xl bg-blue-900"
        onClick={() => {
          setmodalIsopen(true);
        }}
        alt=""
      />

      <Modal
        className="w-80 md:w-6/12 h-80 md:h-96 mx-auto my-36 p-4 border rounded-md"
        isOpen={modalIsopen}
        onRequestClose={() => setmodalIsopen(false)}
      >
        <img src={pic} className="w-full h-full rounded-md" alt="" />
        <button
          className="absolute font-[600] text-red-500 right-6 top-5"
          onClick={() => setmodalIsopen(false)}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Post;
