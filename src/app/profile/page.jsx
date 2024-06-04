"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaCircle } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import { IoIosListBox } from "react-icons/io";
import Post from "../component/profile/post";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { IoImageOutline } from "react-icons/io5";
import { IoIosPricetag } from "react-icons/io";

function Profile() {
  const [modalIsopen, setmodalIsopen] = useState(false);
  const inputRef = useRef(null);
  const [imgurl, setimgurl] = useState("/picture.jpg");
  // State to hold the input value
  const [inputValue, setInputValue] = useState("");

  const [tags, setTags] = useState([
    "#MediterraneanVibes",
    "#OverwaterBungalows",
    "#TropicalEscape",
    "#MajesticViews",
    "#NatureWonders",
  ]);

  // Function to handle adding a new tag
  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, `#${inputValue.trim()}`]);
      setInputValue("");
    }
  };

  // use form methods
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handlethumbnailChange = (e) => {
    setimgurl(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="relative">
      {/* background container */}
      <div className="h-72 w-full bg-blue-600"></div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center w-10/12 mx-auto">
        {/* image conatainer */}
        <div className="w-56 h-56 border-violet-500 rounded-lg p-1 border m-1 absolute md:left-[6.3rem] top-36">
          <Image
            src={"/profile.jpg"}
            width={500}
            height={500}
            className="w-full h-full rounded-lg object-cover"
          />
          <div className="flex items-center justify-between rounded-lg px-1 py-1 absolute backdrop-blur-md bottom-1 ">
            <p className="text-sm flex items-center">
              <FaCircle className="text-yellow-300" /> 90% completed
            </p>{" "}
            <button className="bg-pink-600 absolute -right-[5.4rem] px-2 text-white rounded-lg py-1 text-sm font-[600]">
              Update
            </button>
          </div>
        </div>

        <div className="lg:ml-[14.9rem] mt-28 lg:mt-0">
          <h1 className="flex items-center justify-center md:justify-normal text-lg font-[500] gap-1">
            Maren Troff <FcApproval />{" "}
          </h1>
          <p className="flex items-center gap-1 text-xs text-[gray]">
            {" "}
            <span className="font-[600]">12K</span> Followers
            <LuDot /> <span className="font-[600]">56</span> following <LuDot />{" "}
            <span className="font-[600]">320</span> post
          </p>
          <p className="text-sm text-[gray]">Founder of MT Design Agency</p>
        </div>
        <button
          onClick={() => {
            setmodalIsopen(true);
          }}
          className="bg-pink-500 px-2 py-1 text-sm rounded-md text-white h-fit mt-6 md:mt-0"
        >
          +Create new
        </button>
      </div>

      {/* now post section */}
      <div className="w-80 md:w-10/12  mx-auto rounded-xl border mt-10">
        <div className="flex items-center gap-2 px-6 py-4">
          <IoIosListBox size={20} /> <p className="font-[600]">POSTS</p>
        </div>
        <div className="border-t mx-6"></div>
        <div className="mx-6 my-4 flex flex-wrap gap-3 ">
          <Post pic="https://images.unsplash.com/photo-1681486648957-f90fac2e1ea1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Post pic="https://images.unsplash.com/photo-1506355683710-bd071c0a5828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Post pic="https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Post pic="https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Post pic="https://images.unsplash.com/photo-1509099395498-a26c959ba0b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJpdmVyfGVufDB8fDB8fHww" />
          <Post pic="https://images.unsplash.com/photo-1520769490916-8c754d52b8e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" />
          <Post pic="https://images.unsplash.com/photo-1526990367436-624045ec85c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Post pic="https://images.unsplash.com/photo-1528732262645-b06fa3a79c9e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
      <Modal
        className="md:w-10/12 lg:w-9/12  border rounded-xl my-2 px-4 mx-auto bg-white mb-80"
        isOpen={modalIsopen}
        onRequestClose={() => setmodalIsopen(false)}
      >
        <form
          className="flex flex-wrap md:flex-nowrap gap-2 h-full"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          {/* left div */}
          <div className="md:w-8/12  py-2">
            {/* title */}
            <div className="text-sm w-full flex items-center gap-1 text-gray-400 py-2 px-2">
              <h1>Title</h1>
              <div className=" border w-full rounded-md py-1">
                <input
                  type="text"
                  className="outline-none bg-transparent px-2 w-full text-xs"
                  placeholder="Green Nature"
                  {...register("title", {
                    required: "Hotel name is required!",
                    minLength: {
                      value: 2,
                      message: "Minimum length will be 2",
                    },
                  })}
                />
              </div>
            </div>
            {/* error message */}
            <div className="mx-10">
              <p className="text-xs text-red-500">{errors.title?.message}</p>
            </div>
            {/* Discription */}
            <div className="text-sm w-full flex items-center gap-1 text-gray-400 py-2 px-2">
              Discription{" "}
              <div className=" border w-full rounded-md py-1">
                <textarea
                  {...register("description", {
                    required: "Post description is required!",
                    minLength: {
                      value: 5,
                      message: "Minimum length will be 5",
                    },
                  })}
                  className="w-full outline-none px-2"
                  id=""
                ></textarea>
              </div>
            </div>
            {/* error message */}
            <div className="mx-20">
              <p className="text-xs text-red-500">
                {errors.description?.message}
              </p>
            </div>
            {/* section where picture display */}
            <div className=" my-2 mx-2 h-80 border rounded-xl">
              <Image
                src={imgurl}
                width={500}
                height={500}
                alt="Image"
                className="w-full h-full rounded-xl"
              />
            </div>

            <div>
              {/* image input section */}
              <div className="py-1 w-full md:w-80 mx-2   bg-white  gap-3  h-auto md:h-20 my-1 flex items-center">
                <div
                  onClick={handleImageClick}
                  className="w-40 h-[5.4rem]  bg-gray-200 rounded-xl flex justify-center items-center"
                >
                  <IoImageOutline size={30} />
                </div>

                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  ref={inputRef}
                  className="hidden"
                  onChange={handlethumbnailChange}
                />

                {/* error message */}
                <div className="text-xs text-red-500">
                  {errors.image?.message}
                </div>
              </div>
            </div>
          </div>
          {/* {right div} */}
          <div className=" px-2 h-full w-full md:w-auto">
            {/* tag input here */}
            <div className="border md:w-72 h-[27rem] rounded-xl mt-4 bg-gray-100 relative">
              <h1 className="text-xl font-[700] text-white p-2">ALP</h1>
              {tags.map((tag, index) => (
                <p
                  className="text-xs leading-4 px-2  font-[600] text-blue-500"
                  key={index}
                >
                  {tag}
                </p>
              ))}
              {/* buttons */}
              <div className="absolute bottom-2 left-2 flex items-center gap-2">
                <input
                  type="text"
                  className="outline-none border rounded-md px-1 text-xs py-1 flex-1"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  onClick={handleAddTag}
                  className="text-xs font-[400] text-[gray] border flex gap-2 items-center justify-center bg-white px-2 py-1 rounded-md"
                >
                  {" "}
                  <IoIosPricetag color="gray" /> Add tag
                </button>
              </div>
            </div>
            {/* post related buttons */}
            <div className="text-xs flex gap-3 items-center justify-center py-10 ">
              <input
                type="submit"
                value="post"
                className="bg-black border cursor-pointer text-white rounded-xl px-3 py-1 font-[400]"
              />

              <button
                onClick={() => setmodalIsopen(false)}
                className="border cursor-pointer border-black rounded-xl px-3 py-1 font-[400]"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Profile;
