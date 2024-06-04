import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import Herocheck from "./happy/heroquestion/herocheck";
import { FaCcAmazonPay } from "react-icons/fa";
import FeatureOpt from "./featureopt";
import Question from "./faq/question";
import HeroCarasol from "./happy/heroquestion/herocarsol";

function Hero() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-16 md:gap-0 bg-gray-100">
      {/* left side */}
      <div className="w-80 md:mx-auto lg:mx-0 md:w-6/12 h-full lg:h-[60vh] ">
        
          <HeroCarasol/>
        
      </div>
      {/* right side */}
      <div className="w-80 mx-auto lg:mx-0 md:w-6/12">
        <p className="text-gray-400 text-sm md:text-xl my-4">Remember Well</p>
        <h1 className="text-xl md:text-3xl font-[400] tracking-normal font-serif">
          Soul Star - QR Code for <br />
          Headstones
        </h1>
        <div className="flex items-center gap-1 my-2">
          <FaStar className="text-yellow-300 text-sm md:text-xl" />
          <FaStar className="text-yellow-300 text-sm md:text-xl" />
          <FaStar className="text-yellow-300 text-sm md:text-xl" />
          <FaStar className="text-yellow-300 text-sm md:text-xl" />
          <FaStar className="text-yellow-300 text-sm md:text-xl" />
          <p className="text-xs md:text-lg">(64)</p>
        </div>
        <h1 className="flex items-baseline text-xs md:text-lg gap-2">
          Rs.21,900.00
          <div className="text-[10px] md:text-xs text-[gray] relative">
            Rs.32,900.00{" "}
            <div className="w-20 border-t border-[gray] absolute top-2 "></div>
          </div>
        </h1>
        <p className="text-gray-400 text-sm md:text-lg">Plus VAT</p>
        <div className="w-[32rem] border my-4"></div>

        {/* now teck section started here */}
        <div className="flex flex-col gap-3 my-3">
          <Herocheck />
          <Herocheck />
          <Herocheck />
        </div>
        {/* buttons section */}
        <div className="flex flex-wrap gap-2 md:gap-5">
          <button className="w-80 bg-yellow-100 text-xs md:text-lg font-[600] md:font-bold md:w-[15.4rem] h-14">
            Add to card
          </button>
          <div>
            <button className="bg-violet-900 font-[500] text-white w-80 md:w-[15.4rem] h-12 flex gap-2 items-end justify-center text-xs md:text-lg">
              buy with{" "}
              <span className="font-mono font-bold text-sm md:text-lg">
                Shop
              </span>{" "}
              <FaCcAmazonPay color="white" size={20} />
            </button>
            <p className="underline text-center py-2 text-xs md:text-lg">
              More payment options
            </p>
          </div>
        </div>

        {/* notification */}
        <div className="flex justify-between w-80 md:w-[32rem] bg-gray-200 px-2 py-2 border rounded-md">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" className="w-6 h-6" />
            <p className="text-xs md:text-sm">
              Insurance against theft and weather damage <br />
              Rs.2,500.00
            </p>
          </div>
          {/* right side div */}

          <img
            className="w-10 md:w-14 h-10 md:h-20"
            src="https://remember-well.com/cdn/shop/products/shipping-protection-v2.png?v=1707661050"
            alt=""
          />
        </div>
        {/* notification 2 */}
        <div className="flex items-center w-80 md:w-[32rem] bg-gray-100 gap-2 px-2 py-4 rounded-md my-2">
          <FaHeart size={15} />
          <p className="text-[10px] md:text-xs font-[500]">
            Purchased more than 2,187 times in the last 2 months
          </p>
        </div>

        {/* now plus minus section started */}
        <div>
          <h1 className="text-2xl md:text-4xl font-[100] font-serif">
            Everything at a glance
          </h1>
          <div className="my-3 border-t border-[gray] w-80 md:w-[32rem]"></div>
          <Question
            question="Opportunities for memories?"
            width="[32rem]"
            answer="Design your memorial page with a biography, images and videos. Use comments to share memories and exchange ideas. Other people can also publish contributions on the memorial page."
          />
          <Question
            width="[32rem]"
            question="Unlimited Storage space?"
            answer="Enjoy unlimited storage so all your memories have a place."
          />
          <Question
            width="[32rem]"
            question="Private and public mode?"
            answer="Enjoy unlimited storage so all your memories have a place."
          />
          <Question
            width="[32rem]"
            question="Security in the event of theft and damage"
            answer="Enjoy unlimited storage so all your memories have a place."
          />
          <Question
            width="[32rem]"
            question="One time payment for lifetime services"
            answer="Enjoy unlimited storage so all your memories have a place."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
