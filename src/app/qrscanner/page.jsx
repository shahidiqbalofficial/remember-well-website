"use client";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import Osbutton from "../component/common/osbutton";
import QrLinks from "../component/qrscan/qrlinks";
import Qrcode from "../component/qrscan/qrcode";
import { useRouter } from "next/navigation";

function Qrscanner() {
  const router = useRouter();
  return (
    <div className="md:h-[100vh] flex items-center flex-wrap md:flex-nowrap">
      {/* left side container */}
      <div className="w-80 md:w-7/12 bg-sky-200 border h-full mx-auto md:mx-0">
        <div
          className="flex items-center mx-3 py-2 gap-2 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <IoArrowBack /> <h1 className="underline">Back to Home</h1>
        </div>

        {/* center heading */}
        <div className="flex flex-col gap-5 my-28">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl md:text-3xl text-center font-[700]">
              Lorem, ipsum dolor.
            </h1>
            <h1 className="text-xl md:text-3xl text-center font-[700]">
              {" "}
              Lorem ipsum dolor sit.jf
            </h1>
          </div>
          <p className="text-center md:w-96 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, quidem? Ame
          </p>

          {/* buttons */}
          <div className="flex gap-2 flex-wrap items-center justify-center mx-auto">
            <Osbutton title="Android" />
            <Osbutton title="Apple" />
            <Osbutton title="Window" />
          </div>
          <div className="border mx-[5.1rem] my-4 border-gray-400"></div>
          {/* links */}
          <div className="flex items-center justify-center flex-wrap gap-2 md:gap-8">
            <QrLinks title="On-Demand Serenity" />
            <QrLinks title="Customized Zen" />
            <QrLinks title="Track Tranquility" />
          </div>
        </div>
      </div>

      {/* right side container */}
      <div className="mx-auto w-80 md:w-5/12 h-full bg-yellow-100 flex flex-col justify-center items-center py-16 md:py-0">
        <Qrcode size={230} value="www.google.com" />
        <p className="text-sm my-2 w-52 text-justify">
          Scan this code to validate to google.com from the mobile{" "}
          <span className="font-[600] underline">Know more</span>
        </p>
      </div>
    </div>
  );
}

export default Qrscanner;
