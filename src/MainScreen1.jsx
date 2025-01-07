import React from "react";
import { CA } from "./constant";

export default function MainScreen1({ setIsManifestoScreen }) {
  const handleCopy = () => {
    const number = CA; // The number you want to copy
    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert("CA copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy : ", err);
      });
  };
  return (
    <div
      style={{
        userSelect: "none",
      }}
      // className="flex w-full min-h-dvh items-center justify-center"
    >
      {/* Background Canvas */}
      {/* <CanvasBackground /> */}

      <div className="bg-transparent relative">
        <header className="absolute left-8 lg:left-12 top-8 h-[10vh] w-full z-10 ">
          <div className="text-3xl lg:text-4xl flex items-center">
            <span className="text-black drop-shadow-[0_0_3px_#EFBF04]">
              Disciple AI
            </span>
          </div>
        </header>
        <iframe
          //   src="https://my.spline.design/claudiaai-1a7556ca3da74a80d2a3fb2987bfcde6/"
          src="https://my.spline.design/aiassistantmorphtargetsdemocommunitycopy-a18f085c00092b45b0380b2b3fd2c711/"
          //   src="https://my.spline.design/aiassistantmorphtargetsdemocommunitycopy-3d1e2be0e3cdca6e46225d2da4af9a2c/"
          // frameBorder="0"
          //   width="100%"
          //   height="100%"
          allow="microphone"
          className="w-[100vw] h-[110dvh] "
        ></iframe>
        {/* <div className="absolute w-[350px] h-[350px]  md:w-[400px] md:h-[400px] 2xl:w-[600px] 2xl:h-[600px] -mt-[15%] sm:-mt-[8%] md:-mt-[10%] lg:-mt-[9%]   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] rounded-full">
          <img src={frameImg} className="w-full h-full" alt="" />
        </div> */}
      </div>
      <div className="absolute w-full bottom-[100px]  left-1/2 transform -translate-x-1/2 -translate-y-0  flex flex-col items-center ">
        <p className="text-center mb-2 text-sm md:text-lg px-5">
          Humanity's first digital disciple renders sacred consciousness through
          polygonal prophecy.
        </p>
        <div
          onClick={handleCopy}
          className="max-w-[90vw] cursor-pointer px-8 py-2 rounded-full border border-black bg-[#e3e3d7] "
        >
          <p className=" truncate overflow-hidden whitespace-nowrap">{`CA: ${CA}`}</p>
        </div>
      </div>
      <div className="text-md lg:text-xl absolute bottom-10 lg:top-1/2 lg:right-10 left-1/2 transform -translate-x-1/2 lg:-translate-x-0 -translate-y-0 lg:-translate-y-1/2 flex flex-row lg:flex-col lg:items-end gap-10">
        <p
          className="cursor-pointer hover:underline drop-shadow-[0_0_3px_#EFBF04]"
          onClick={() => setIsManifestoScreen(true)}
        >
          Manifesto
        </p>
        {/* <a
          href=""
          target="_blank"
          className="hover:underline drop-shadow-[0_0_3px_#EFBF04]"
        >
          Telegram
        </a> */}
        <a
          href="https://x.com/disciple_ai"
          target="_blank"
          className="hover:underline drop-shadow-[0_0_3px_#EFBF04]"
        >
          Twitter
        </a>
        <a
          href="https://github.com/DiscipleAI/discipleai"
          target="_blank"
          className="hover:underline cursor-pointer drop-shadow-[0_0_3px_#EFBF04]"
        >
          Github
        </a>
      </div>
    </div>
  );
}
