import React from "react";
import { SiVisa } from "react-icons/si";

function Footer() {
  return (
    <div className="md:h-[90vh]  bg-[#000000d1] p-10 ">
      <div className="w-80 md:w-full md:h-80 flex flex-wrap ">
        {/* left side div */}
        <div className="w-8/12  h-full flex flex-col gap-8 my-3">
          <h1 className="font-[500] text-xl font-serif text-white">
            Remember Well
          </h1>
          <h1 className="font-[500] text-3xl font-serif text-white">
            Register so you don't miss any promotions
          </h1>
          <form action="" className="border flex py-3 px-4 w-80 md:w-96">
            <input
              className="bg-transparent flex-1 outline-none border-none text-white"
              placeholder="E-mail"
              type="email"
              name=""
              required
              id=""
            />{" "}
            <input
              className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center"
              type="submit"
              value=">"
            />
          </form>
        </div>

        {/* right side div */}
        <div>
          <ul className="flex flex-col gap-4 font-[500] my-3 text-gray-200">
            <li>Affiliate program</li>
            <li>Wholesale</li>
            <li>Private Label</li>
            <li>Conditions</li>
            <li>data protection</li>
            <li>imprint</li>
            <li>Right of withdrawal</li>
          </ul>
        </div>
      </div>

      {/* country and languages */}
      <div className="text-white flex items-center gap-4">
        <div className="flex items-center gap-1">
          <label htmlFor="cars" className="flex items-center gap-1">
            {" "}
            <img
              className="w-4 h-4 rounded-full"
              src="https://static.toiimg.com/thumb/msid-65021879,width-400,resizemode-4/65021879.jpg"
              alt=""
            />
            Pakistan PKR
          </label>

          <select
            className=" w-fit outline-none font-[600] bg-transparent"
            name="cars"
            id="cars"
          >
            <option value="pak" className="font-[600] text-black">
              RS
            </option>
            <option value="ind" className="text-black">
              IND
            </option>
            <option value="jpn" className="text-black">
              JPN
            </option>
            <option value="usa" className="text-black">
              USA
            </option>
          </select>
        </div>
        {/* languages */}

        <select
          className="w-fit outline-none font-[600] bg-transparent"
          name="cars"
          id="cars"
        >
          <option value="volvo" className="font-[600] text-black">
            English
          </option>
          <option className="text-black" value="saab">
            Urdu
          </option>
          <option className="text-black" value="mercedes">
            Hindi
          </option>
          <option className="text-black" value="audi">
            Punjabi
          </option>
        </select>
      </div>

      {/* ending section */}
      <div className="flex flex-wrap items-center justify-between mt-16">
        {/* left side */}
        <p className="text-gray-200">
          &copy;2024, Remember Well. Powered by Shopify
        </p>
        <div className="flex flex-wrap my-3 md:my-0 items-center gap-3">
          <div className="bg-white w-fit px-2 py-1 rounded-sm">
            <SiVisa className="text-blue-950" size={20} />
          </div>
          <div className="bg-white w-fit px-2 py-1 rounded-sm">
            <SiVisa className="text-blue-950" size={20} />
          </div>
          <div className="bg-white w-fit px-2 py-1 rounded-sm">
            <SiVisa className="text-blue-950" size={20} />
          </div>
          <div className="bg-white w-fit px-2 py-1 rounded-sm">
            <SiVisa className="text-blue-950" size={20} />
          </div>
          <div className="bg-white w-fit px-2 py-1 rounded-sm">
            <SiVisa className="text-blue-950" size={20} />
          </div>
          <div className="bg-white w-fit px-2 py-1 rounded-sm">
            <SiVisa className="text-blue-950" size={20} />
          </div>
          <div className="bg-white w-fit px-2 py-1 rounded-sm">
            <SiVisa className="text-blue-950" size={20} />
          </div>
          <div className="bg-white w-fit px-2 py-1 rounded-sm">
            <SiVisa className="text-blue-950" size={20} />
          </div>
          <div className="bg-white w-fit px-2 py-1 rounded-sm">
            <SiVisa className="text-blue-950" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
