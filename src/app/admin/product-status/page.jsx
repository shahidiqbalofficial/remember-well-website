"use client";

import React, { useState, useRef, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import userdata from "@/userdata";
import Modal from "react-modal";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import QRCode from "react-qr-code";
import { saveAs } from "file-saver";

import { useForm } from "react-hook-form";

function Page() {
  const [selectedEmail, setSelectedEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrshow, setQrshow] = useState(false);

  // use form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const qrCodeRef = useRef(null);

  const openModal = (email) => {
    console.log("Open modal first value ", email);
    handleSelectedEmail(email);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEmail("Closed modal empty values assign");
    setIsModalOpen(false);
  };

  const downloadFile = () => {
    if (qrCodeRef.current) {
      const svgElement = qrCodeRef.current.querySelector("svg");

      // Convert SVG to XML string
      const svgXml = new XMLSerializer().serializeToString(svgElement);

      // Create a Blob from the SVG XML
      const svgBlob = new Blob([svgXml], {
        type: "image/svg+xml;charset=utf-8",
      });

      // Convert SVG Blob to PNG Blob
      const svgUrl = URL.createObjectURL(svgBlob);

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      const image = new Image();
      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);

        // Convert canvas to PNG Blob
        canvas.toBlob((blob) => {
          // Trigger the download
          saveAs(blob, "code.png");
        });
      };

      image.src = svgUrl;
    }
  };

  useEffect(() => {
    console.log("Useffect result:", selectedEmail);
    // Clear the QR display when modal is closed
    if (!isModalOpen) {
      setQrshow(false);
    }
  }, [isModalOpen, selectedEmail]);

  const handleSelectedEmail = (e) => {
    setSelectedEmail(e);
    console.log("Handle selected value", selectedEmail);
  };

  return (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="md:w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th
                scope="col"
                className="text-[10px] md:text-sm px-2 md:px-6 py-3"
              >
                Name
              </th>
              <th
                scope="col"
                className="text-[10px] md:text-sm px-2 md:px-6 py-3"
              >
                Status
              </th>
              <th
                scope="col"
                className="text-[10px] md:text-sm px-2 md:px-6 py-3"
              >
                Email
              </th>
              <th
                scope="col"
                className="text-[10px] md:text-sm px-2 md:px-6 py-3"
              >
                Generate QR
              </th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((item, index) => (
              <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                <th
                  scope="row"
                  className="flex items-center  px-2 md:px-6 py-4 text-gray-900 whitespace-nowrap"
                >
                  <img
                    src={item.pic}
                    className="w-6 h-6 md:w-10 md:h-10 rounded-full object-cover"
                    alt=""
                  />
                  <div className="ps-1 md:ps-3">
                    <div className="text-[10px] md:text-base md:font-semibold">
                      {item.name}
                    </div>
                    <div className="text-[9px] md:text-sm font-normal text-gray-500">
                      {item.subname}
                    </div>
                  </div>
                </th>
                <td className="px-2 md:px-6 py-4">
                  {item.status === "paid" ? (
                    <div className="bg-emerald-200 px-1 md:px-2 flex md:gap-1 items-center rounded-xl md:py-1 w-fit">
                      <GoDotFill className="text-emerald-600" />
                      <p className="text-[8px] md:text-xs text-emerald-600">
                        {item.status}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-yellow-200 px-1 md:px-2 flex md:gap-1 items-center rounded-xl md:py-1 w-fit">
                      <GoDotFill className="text-yellow-600" />
                      <p className="text-[8px] md:text-xs text-yellow-600">
                        {item.status}
                      </p>
                    </div>
                  )}
                </td>
                <td className="px-2 md:px-6 py-4 text-[10px] md:text-sm">
                  {item.email}
                </td>
                <td className="px-2 md:px-6 py-4">
                  <button
                    onClick={() => openModal(item.email)}
                    className="font-medium text-blue-600 hover:underline text-[10px] md:text-[16px]"
                  >
                    {item.button_code}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="w-80 md:w-96 mx-auto bg-white rounded-md shadow-sm border my-10"
      >
        <div className="flex w-full  items-center justify-between p-1">
          <MdOutlineQrCodeScanner size={25} />
          <button
            className="border rounded-md py-[10px] px-2"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <RxCross2 />
          </button>
        </div>
        <h1 className="font-[600] md:text-lg text-center">
          Create your new QR code
        </h1>
        <p className="text-xs md:text-sm text-center">
          Lorem ipsum dolor sit consectetur, adipisicing elit.
        </p>
        {qrshow ? (
          <>
            {" "}
            <div className="flex justify-center my-4" ref={qrCodeRef}>
              <QRCode value={selectedEmail} size={150} />
            </div>
            <button
              onClick={downloadFile}
              className="bg-white  px-1 py-1 flex justify-center items-center mx-auto text-sm text-blue-400  underline"
            >
              Download PNG
            </button>
          </>
        ) : (
          <div className="flex justify-center my-4">
            <img
              src={"/code.png"}
              width={500}
              height={500}
              className="w-36 h-36"
            />
          </div>
        )}

        <div className="mx-2 my-6 text-[9px]  md:text-sm text-[gray] flex justify-center items-center gap-1  md:gap-4">
          <div className="border-t w-28"></div>
          Generate Code
          <div className="border-t w-28"></div>
        </div>

        {/* input field */}
        <form
          action=""
          onSubmit={handleSubmit((data) => {
            console.log(data.search);
            setSelectedEmail(data.search);

            setQrshow(true);
          })}
        >
          <div className="border w-72 md:w-80 rounded-md py-1 mx-auto mt-4 active:border-blue-400 ">
            <input
              type="text"
              defaultValue={selectedEmail}
              className="w-full outline-none rounded-md px-2 py-1 text-xs"
              {...register("search", {
                required: "Text field is empty",
                minLength: {
                  value: 3,
                  message: "minimum length is 3",
                },
              })}
            />
          </div>
          {/* Error message */}
          <div className="mt-6 mx-8">
            <p className="text-xs text-red-500 ">{errors.search?.message}</p>
          </div>
          <div className="border w-full my-4"></div>
          <div className="bg-blue-500 cursor-pointer mx-auto my-6 py-2 rounded-md text-white w-72 md:w-80 text-sm flex justify-center">
            <input
              type="submit"
              className="cursor-pointer"
              value="Generate code"
            />
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Page;
