import React from "react";

import { TiMessageTyping } from "react-icons/ti";

function FeatureOpt() {
  return (
    <div className="w-80 flex items-center justify-center flex-col gap-2">
      <div className="bg-yellow-100 flex items-center justify-center rounded-full w-14 h-14">
        <TiMessageTyping size={20} />
      </div>
      <p className="text-center font-serif">Unlimited storage space</p>
      <p className="text-center">
        Keep every precious memory of your loved ones safe
      </p>
    </div>
  );
}

export default FeatureOpt;
