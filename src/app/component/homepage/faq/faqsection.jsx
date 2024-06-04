import React from "react";

import Question from "./question";
function Faqsection() {
  return (
    <div className=" bg-gray-100 flex flex-col items-center lg:items-start lg:flex-row  justify-center md:justify-normal gap-4 lg:gap-0 flex-wrap xl:flex-nowrap py-10">
      {/* left side div */}
      <div className="w-80 md:w-6/12 flex  flex-col items-center">
        <h1 className="font-serif text-xl  md:text-3xl font-[100] w-80 md:w-[30rem] tracking-wider">
          Frequently asked questions and answers
        </h1>
        <p className="w-80 md:w-[29.8rem] leading-5 text-xs  md:text-sm">
          Here you will find the most frequently asked questions. If you still
          have a question, you are welcome to send us an email
          <span className="font-[600]">Support@remember-well.com</span>Write or
          about<span className="font-[600]">Whatsapp</span>With usChat.
        </p>
      </div>

      {/* right side div */}
      <div className="w-80  md:w-7/12 lg:w-6/12 bg-yellow-100 flex flex-col items-center py-4 rounded-md md:rounded-none ">
       
        <Question
          width="9/12"
          question="What are dimensions?"
          answer="Each soul star is 5 x 5 cm."
        />
        <Question
          width="9/12"
          question="What is included?"
          answer="Each order contains a unique, weatherproof Remember Well soul star made of high-quality aluminium and a commemorative page."
        />
        <Question
          width="9/12"
          question="Does the soul star withstand snow, rain and cold?"
          answer="Yes, it is important that the soul star is glued to the tombstone in a dry state, then it can withstand the weather conditions mentioned without any problems."
        />
        <Question
          width="9/12"
          question="Does the soul star withstand snow, rain and cold?"
          answer="If you want to link several QR codes to a memorial page, you can simply order the desired number and link it to the same memorial page when setting up the individual soul stars."
        />
        <Question
          width="9/12"
          question="Does the soul star withstand snow, rain and cold?"
          answer="On the back of the soul star there is an adhesive film, so the soul star is stuck to the tombstone like a sticker. It is necessary to ensure that the surface of the tombstone is dry. So that the soul star can withstand all weather conditions, we use the patented adhesive film from 3M on the back."
        />
        <Question
          width="9/12"
          question="What is included?"
          answer="Each order contains a unique, weatherproof Remember Well soul star made of high-quality aluminium and a commemorative page."
        />
        <Question
          width="9/12"
          question="Does the soul star withstand snow, rain and cold?"
          answer="Yes, it is important that the soul star is glued to the tombstone in a dry state, then it can withstand the weather conditions mentioned without any problems."
        />
        <Question
          width="9/12"
          question="Does the soul star withstand snow, rain and cold?"
          answer="If you want to link several QR codes to a memorial page, you can simply order the desired number and link it to the same memorial page when setting up the individual soul stars."
        />
        <Question
          width="9/12"
          question="Does the soul star withstand snow, rain and cold?"
          answer="On the back of the soul star there is an adhesive film, so the soul star is stuck to the tombstone like a sticker. It is necessary to ensure that the surface of the tombstone is dry. So that the soul star can withstand all weather conditions, we use the patented adhesive film from 3M on the back."
        />

        {/* question 2 */}
        {/* question 3 */}
        {/* question 4 */}
        {/* question 5 */}
        {/* question 6 */}
      </div>
    </div>
  );
}

export default Faqsection;
