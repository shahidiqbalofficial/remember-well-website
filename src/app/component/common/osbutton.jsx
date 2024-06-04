import React from "react";
import { FaWindows, FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Osbutton({ title }) {
  let icon;
  switch (title) {
    case "Apple":
      icon = <FaApple size={15}/>;
      break;
    case "Windows":
      icon = <FaWindows size={15}/>;
      break;
    default:
      icon = <IoLogoGooglePlaystore size={15} />;
  }
  return (
    <div className="border rounded-2xl px-4 py-1 flex items-center justify-center border-black gap-2 w-fit">
      {icon} <h1 className="font-[500]">{title}</h1>
    </div>
  );
}

export default Osbutton;
