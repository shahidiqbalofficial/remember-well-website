import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import Link from "next/link";
function Navbar() {
  return (
    <div className="flex py-3 items-center justify-between px-4 bg-gray-100">
      {/* left side div */}
      <div>
        <img
          src="//remember-well.com/cdn/shop/files/Star_Black.gif?v=1711936511&width=1220"
          alt=""
          className="w-48 md:w-60 h-[60px] md:h-[70px]"
        />
      </div>

      {/* middle div */}
      <div className="text-lg font-[600] lg:flex gap-4 hidden ">
        <Link href={"/"}>Home Page</Link>
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/create-profile"}>Create Profile</Link>
        <Link href={"/qrscanner"}>Qr Scanner</Link>
      </div>

      {/* right side */}
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-1 ">
          <label htmlFor="cars" className="flex items-center gap-1">
            {" "}
            <img
              className="w-4 h-4 rounded-full"
              src="https://static.toiimg.com/thumb/msid-65021879,width-400,resizemode-4/65021879.jpg"
              alt=""
            />
            PKR
          </label>

          <select
            className="w-fit outline-none font-[600] bg-transparent"
            name="cars"
            id="cars"
          >
            <option value="pak" className="font-[600]">
              RS
            </option>
            <option value="ind">IND</option>
            <option value="jpn">JPN</option>
            <option value="usa">USA</option>
          </select>
        </div>
        {/* languages */}

        <select
          className="hidden lg:block w-fit outline-none font-[600] bg-transparent"
          name="cars"
          id="cars"
        >
          <option value="volvo" className="font-[600]">
            English
          </option>
          <option value="saab">Urdu</option>
          <option value="mercedes">Hindi</option>
          <option value="audi">Punjabi</option>
        </select>
        <button className="mx-2">
          <FaShoppingCart size={20} />
        </button>
      </div>

      {/* popup */}
      {/* <div className="bg-white w-96 h-96 rounded-md position-fixed ">

      </div> */}
    </div>
  );
}

export default Navbar;
