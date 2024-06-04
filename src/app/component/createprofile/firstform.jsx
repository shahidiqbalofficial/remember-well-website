"use client";
import React from "react";
import { useForm } from "react-hook-form";

function Firstform({
  register,
  errors,
  setFName,
  setLName,
  setPhone,
  setEmail,
}) {
  return (
    <div className="">
      <div className="w-80 md:w-[28rem]  mx-auto my-4 ">
        <p className="px-4 my-4">Step 1/3</p>
        <h1 className="text-xl px-4 font-[600] my-2">Basic Info</h1>
        <p className="text-sm  px-4 text-[gray]">
          Tell us a bit about to get started with you new <br />
          CRM account.
        </p>
        <div className="border mx-4 my-4"></div>
        {/* first name and last name */}
        <div className="mx-4">
          <div className="text-sm w-full flex justify-between items-center">
            <div>
              First name
              <div className="py-2  rounded-md border">
                <input
                  className="outline-none px-2 text-xs w-full"
                  placeholder="John"
                  type="text"
                  {...register("firstname", {
                    required: "First name is required!",
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
                    setFName(e.target.value);
                  }}
                />
              </div>
              {/* Error message */}
              <div className="my-2">
                <p className="text-xs text-red-500 ">
                  {errors.firstname?.message}
                </p>
              </div>
            </div>
            <div>
              Last name
              <div className="py-2 rounded-md border">
                <input
                  className="outline-none px-2 text-xs w-full"
                  placeholder="Marsh"
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}
                  {...register("lastname", {
                    required: "Last name is required!",
                    minLength: {
                      value: 2,
                      message: "Minimum length will be 2",
                    },
                    pattern: {
                      value: /^[A-Z][a-z]*$/,
                      message: "First latter must be upper case",
                    },
                  })}
                  type="text"
                  id=""
                />
              </div>
              {/* Error message */}
              <div className="my-2">
                <p className="text-xs text-red-500 ">
                  {errors.lastname?.message}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email address */}
        <div className="mx-4 my-2 ">
          Email
          <div className="py-2 border my-1 rounded-md">
            <input
              className="outline-none px-2 text-xs w-full"
              placeholder="johndoel123@gmail.com"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email!",
                },
              })}
            />
          </div>
          {/* error message */}
          <div className="my-2">
            <p className="text-xs text-red-500 ">{errors.email?.message}</p>
          </div>
        </div>
        {/* phone number */}
        <div className="mx-4 my-2">
          Phone number
          <div className="py-2 border my-1  rounded-md ">
            <input
              className="outline-none px-2 text-xs w-full"
              placeholder="9857849321"
              type="number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              {...register("phone", {
                required: "phone number is required",
                minLength: {
                  value: 11,
                  message: "Minimum length will be 11",
                },
                maxLength: {
                  value: 12,
                  message: "maximum number will be 12",
                },
                min: {
                  value: 0,
                  message: "Number will be start from Positive number",
                },
              })}
            />
          </div>
          {/* error message */}
          <div className="my-2">
            <p className="text-xs text-red-500 ">{errors.phone?.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstform;
