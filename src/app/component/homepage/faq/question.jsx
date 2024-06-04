"use client";
import React, { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

function Question({ question, answer, width }) {
  const [show, setshow] = useState(false);
  return (
    <div
      className={`w-80 px-2 md:px-0 md:w-${width}`}
      onClick={() => setshow(!show)}
    >
      <h1 className="font-[500] text-sm md:text-lg flex items-center justify-between">
        {question}
        <button className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center">
          {show ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
        </button>{" "}
      </h1>
      {show ? (
        <p className="text-xs md:text-sm tracking-wider my-2">{answer}</p>
      ) : (
        ""
      )}

      <div className="w-full border-t border-gray-400 my-4"></div>
    </div>
  );
}

export default Question;
