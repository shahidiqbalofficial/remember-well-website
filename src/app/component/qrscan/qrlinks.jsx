import React from "react";
import { TbTrendingUp } from "react-icons/tb";
import { FiLoader } from "react-icons/fi";
import { LiaDotCircleSolid } from "react-icons/lia";
function QrLinks({ title }) {
  let icon;
  switch (title) {
    case "Customized Zen":
      icon = <FiLoader size={20} />;
      break;
    case "On-Demand Serenity":
      icon = <LiaDotCircleSolid size={20} />;
      break;
    default:
      icon = <TbTrendingUp size={20} />;
  }
  return (
    <div className=" px-4 py-2 flex items-center justify-center border-black gap-2 w-fit">
      {icon} <h1 className="font-[500]">{title}</h1>
    </div>
  );
}

export default QrLinks;
