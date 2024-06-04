"use client";

import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import Thirdform from "./thirdform";
import Secondform from "./secondform";
import Firstform from "./firstform";
import { FaArrowLeftLong } from "react-icons/fa6";
import Thankyou from "./thankyou";

const Stepper = () => {
  const [userfirstname, setuserfirstname] = useState("");
  const [userlastname, setuserlastname] = useState("");
  const [company, setcompanyname] = useState("");
  const [phonenumber, setphoneNumber] = useState("");
  const [emailnum, setemailNum] = useState("");

  const [step, setStep] = useState(1);

  // use form methods
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data) => {
    // You can do something with the form data here
    setuserfirstname(data.firstname);
    setuserlastname(data.lastname);
    setphoneNumber(data.phone);
    setemailNum(data.email);

    handleNext();
  };

  // handler of states started here

  const handleFname = (fname) => {
    console.log(fname.firstname);
    setuserfirstname(fname);
  };

  const handleLname = (lname) => {
    console.log(lname);
    setuserlastname(lname);
  };

  const handlePhone = (lname) => {
    console.log(lname);
    setphoneNumber(lname);
  };

  const handleEmail = (lname) => {
    console.log(lname);
    setemailNum(lname);
  };
  const handleCompany = (company) => {
    console.log(company);
    setcompanyname(company);
  };

  return (
    <div className="flex gap-2 flex-wrap px-2 items-center">
      <form
        className="w-80 md:w-8/12   mx-auto mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={`flex items-center justify-between ${
            step > 3 ? `hidden` : `block`
          }`}
        >
          <div className="flex-grow">
            <div className="relative">
              <div className="flex mb-2">
                <div
                  className={`w-1/3 h-2 rounded-full ${
                    step >= 1 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`w-1/3 h-2 rounded-full ${
                    step >= 2 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`w-1/3 h-2 rounded-full ${
                    step >= 3 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
              </div>
              <div className="absolute top-0 left-0 mt-4 ml-0 w-full flex justify-between">
                <div className="w-1/3 text-center text-xs text-gray-500">
                  <h1 className="font-[600]">Your Personal Details</h1>
                  <p>personal details for users</p>
                </div>
                <div className="w-1/3 text-center text-xs text-gray-500">
                  <h1 className="font-[600]">Your Company Details</h1>
                  <p>Company basic information</p>
                </div>
                <div className="w-1/3 text-center text-xs text-gray-500">
                  <h1 className="font-[600]">Your Company Details</h1>
                  <p>user role in the platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 md:mt-16">
          {step === 1 && (
            <div>
              <Firstform
                register={register}
                errors={errors}
                setFName={handleFname}
                setPhone={handlePhone}
                setEmail={handleEmail}
                setLName={handleLname}
              />
            </div>
          )}
          {step === 2 && (
            <div>
              <Secondform
                register={register}
                errors={errors}
                setCompany={handleCompany}
              />
            </div>
          )}
          {step === 3 && (
            <div>
              <Thirdform />
            </div>
          )}
          {step === 4 && (
            <div>
              <Thankyou />
            </div>
          )}
        </div>
        <div className="flex gap-3 w-[28rem] mx-auto px-4">
          <button
            className={`${
              step == 1 || step > 3 ? `hidden` : `block`
            } bg-gray-200 py-2 px-4 rounded-md text-sm`}
            onClick={() => {
              setStep((prev) => prev - 1);
            }}
          >
            <FaArrowLeftLong size={20} className="text-blue-500 " />
          </button>

          <input
            type="submit"
            className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
              step > 3 ? `hidden` : `block`
            }`}
            // onClick={handleNext}
            disabled={step === 4}
            value={step == 3 ? "confirm" : "next"}
          />
        </div>
      </form>
    </div>
  );
};

export default Stepper;
