"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";

function Secondform({ register, errors, setCompany }) {
  return (
    <div>
      <div className="w-80 md:w-[28rem] mx-auto my-4 ">
        <p className="px-4 my-4">Step 2/3</p>
        <h1 className="text-xl px-4 font-[600] my-2">Company details</h1>
        <p className="text-sm  px-4 text-[gray]">
          Tell us about your organization. it help us toilor your <br />
          CRM Experiance
        </p>
        <div className="border mx-4 my-4"></div>

        {/* Company name */}
        <div className="mx-4 my-2 ">
          Company name
          <div className="py-2 border my-1 rounded-md">
            <input
              className="outline-none px-2 text-xs w-full"
              placeholder="Asapa pvt ltd"
              type="text"
              {...register("companyname", {
                required: "Company name is required!",
                minLength: {
                  value: 2,
                  message: "Minimum length will be 2",
                },
                pattern: {
                  value: /^[A-Z][a-z]*$/,
                  message: "First latter must be upper case",
                },
              })}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
          </div>
          <p className="text-xs text-red-500 ">{errors.companyname?.message}</p>
        </div>
        {/* Company size */}
        <div className="mx-4 my-2 ">
          Company size
          <div className="flex gap-4 items-center justify-between text-sm my-2">
            <div className="flex flex-col gap-1 items-center justify-center">
              <input
                className="w-4 h-4"
                type="radio"
                name="name"
                id=""
                value="small"
                defaultChecked
              />
              small
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <input
                className="w-4 h-4"
                type="radio"
                name="name"
                id=""
                value="medium"
              />
              Medium
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <input
                className="w-4 h-4"
                type="radio"
                name="name"
                id=""
                value="large"
              />
              large
            </div>
          </div>
        </div>

        {/* industry */}
        <div className="mx-4">
          Industory
          <div className="py-2 border my-1 rounded-md">
            <select
              className="outline-none w-full px-2 bg-transparent"
              name="cars"
              id="cars"
            >
              <option defaultChecked value="pak">RS</option>
              <option value="ind">IND</option>
              <option value="jpn">JPN</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>
        {/* next and previous button */}
      </div>
    </div>
  );
}

export default Secondform;
