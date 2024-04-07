import React from "react";
import Image from "next/image";
import message from "@/assets/message.png";
import plus from "@/assets/plus.png";

const RightBar = () => {
  return (
    <div className="w-[60px] h-[calc(100vh-62px)] flex flex-col gap-y-2 py-4 ">
      <div className="flex flex-col gap-y-2 items-center">
        <div className="p-2 bg-slate-100 rounded-lg">
          <Image src={message} width={20} height={20} alt="" />
        </div>
        <div className="text-[#F79009] text-xs">Activity</div>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <div className="p-2 bg-slate-100 rounded-lg">
          <Image src={message} width={20} height={20} alt="" />
        </div>
        <div className="text-[#F79009] text-xs">Activity</div>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <div className="p-2 bg-slate-100 rounded-lg">
          <Image src={message} width={20} height={20} alt="" />
        </div>
        <div className="text-[#F79009] text-xs">Activity</div>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <div className="p-2 bg-slate-100 rounded-lg">
          <Image src={message} width={20} height={20} alt="" />
        </div>
        <div className="text-[#F79009] text-xs">Activity</div>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <div className="p-2 bg-slate-100 rounded-lg">
          <Image src={message} width={20} height={20} alt="" />
        </div>
        <div className="text-[#F79009] text-xs">Activity</div>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <div className="p-2 bg-slate-100 rounded-lg">
          <Image src={message} width={20} height={20} alt="" />
        </div>
        <div className="text-[#F79009] text-xs">Activity</div>
      </div>
      <div className="flex items-center justify-center pt-4 border-t-2 border-slate-300">
          <Image src={plus} width={30} height={30} alt="" />
        </div>
    </div>
  );
};

export default RightBar;
