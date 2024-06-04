import React from "react";

function MemorialPage({title,num,desc,pic}) {
  return (
    <div className="bg-white-100 my-4">
      <h1 className="text-2xl md:text-4xl font-serif font-[100] text-center my-10">
        {num}.{")"} {title}
      </h1>
      <p className="text-center text-xs md:text-sm text-gray-500 my-4">
        {desc}
      </p>
      <div className="flex justify-center">
        <img src={pic} alt="" />
      </div>
    </div>
  );
}

export default MemorialPage;
