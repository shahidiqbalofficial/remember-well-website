import React from "react";
import Option from "./option";
import { FaArrowLeftLong } from "react-icons/fa6";

function Thirdform() {
  return (
    <div>
      <div className="w-80 md:w-[28rem] mx-auto my-4 ">
        <p className="px-4 my-4">Step 3/3</p>
        <h1 className="text-xl px-4 font-[600] my-2">User role</h1>
        <p className="text-sm  px-4 text-[gray]">
          Define your role within the organization to access the right tools.
        </p>
        <div className="border mx-4 my-4"></div>
        {/* options */}
        <div className="flex items-center gap-4 flex-wrap mx-4">
          <Option title="Sales Manager" />
          <Option title="Super Admin" />
          <Option title="Admin" />
          <Option title="Marketing manager" />
          <Option title="Customer support" />
          <Option title="Data Analyst" />
          <Option title="Other" />
        </div>
        {/* Confirm and previous button */}
      </div>
    </div>
  );
}

export default Thirdform;
