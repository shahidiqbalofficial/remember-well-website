"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

function Option({ title }) {
  const [selected, setselected] = useState(false);
  return (
    <div
      onClick={() => {
        setselected(!selected);
      }}
      className={`h-12 border ${
        selected ? `border-blue-500` : `border`
      } focus:border-blue-500 flex items-center w-fit px-4 gap-1 rounded-md`}
    >
      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
        <FaUser />
      </div>
      <h1 className="font-[500] text-gray-800">{title}</h1>
    </div>
  );
}

export default Option;
