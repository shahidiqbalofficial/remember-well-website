import React from "react";

function Herocheck() {
  return (
    <div className="w-80  md:w-[32rem] border-2 h-16 md:h-24 flex justify-between items-center px-2">
      {/* left side */}
      <div className="flex items-center gap-2">
        <input className="md:w-6 md:h-6" type="radio" name="" id="" />
        <div className="">
          <div className="flex items-center gap-1">
            <h1 className="text-sm md:text-lg">1 Pack </h1>{" "}
            <p className="text-[10px] md:text-xs px-2 py-1 bg-gray-200 w-fit">1 profile</p>
          </div>
          <p className="text-gray-400 text-xs md:text-lg">Standard price</p>
        </div>
      </div>
      {/* right side */}
      <div>
        <h1 className="text-sm md:text-xl font-[400]">Rs. 21,900.00</h1>
        <div className="relative">
          <h1 className="text-xs md:text-sm text-gray-400">Rs. 32,900.00</h1>
          <div className="border-t w-24 border-[gray] absolute top-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Herocheck;
