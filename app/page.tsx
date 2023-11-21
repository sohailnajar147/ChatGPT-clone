import React from "react";

function page() {
  return (
    <div className=" text-[#565869] h-screen flex flex-col justify-between items-center p-3  ">
      <div className="text-white mr-auto cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium  hover:bg-black/10 radix-state-open:bg-black/20">
        chatGPT 3.5
      </div>
      <h1 className="font-medium text-3xl text-white">
        how can i help you today?
      </h1>

      <div className="grid grid-cols-2 grid-rows-2 gap-3">
        <div className="infoText">
          <p className="text-white">Explain nostalgia</p>
          <p>for what to do with kids art</p>
        </div>
        <div className="infoText">
          <p className="text-white">Explain nostalgia</p>
          <p>for what to do with kids art</p>
        </div>
        <div className="col-start-2 row-start-2 infoText">
          <p className="text-white">Explain nostalgia</p>
          <p>for what to do with kids art</p>
        </div>
        <div className="col-start-1 row-start-2 infoText">
          <p className="text-white">Explain nostalgia</p>
          <p>for what to do with kids art</p>
        </div>
      </div>
    </div>
  );
}

export default page;
