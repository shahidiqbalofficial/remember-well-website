import React from "react";
import Happycard from "./happycard";
import Responsive from "./happyslider";

function Happycustomer() {
  return (
    <div className="h-[32rem] lg:h-[90vh] ">
      <h1 className="text-2xl md:text-4xl px-12 font-[100] tracking-wider font-serif py-4 md:py-8">
        Happy customers
      </h1>
      <p className="pb-8 px-12 text-xs md:text-lg">
        Our goal is to have satisfied customers. We are committed to responding
        to the wishes of every <br /> customer and constantly improving our
        service.
      </p>

      <div className="mx-auto">
        <Responsive />
      </div>
    </div>
  );
}

export default Happycustomer;
