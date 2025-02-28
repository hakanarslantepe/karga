"use client";

import { useState } from "react";
import Image from "next/image";
import selected from "@/assets/selected.png";
import formattedDate from "@/utils/formattedDate";
import Avatar from "@/assets/Avatar.png";
import file from "@/assets/file.png";
import attachment from "@/assets/attachment.png";
import avatar2 from "@/assets/avatar2.png";

const TaskDetail = ({ task }) => {
  const [activeTab, setActiveTab] = useState("attachment");

  const showContent = (id) => {
    setActiveTab(id);
  };
  return (
    <div className="w-[calc(100vw-392px)] h-[calc(100vh-62px)]">
      <div className="flex flex-row px-12 py-6 justify-between h-[212px] text-slate-700">
        <div className="flex gap-x-4 items-center text-xl font-semibold w-[455px]">
          <Image src={selected} width={25} height={25} alt="" />
          <div>
            Bu örnek görevdir. Örnek görevin içeriğine dair açıklama detail’da
            bulunmaktadır.
          </div>
        </div>
        <div className="text-sm text-nowrap">
          {formattedDate(task?.startDate)}-{formattedDate(task?.endDate)}
        </div>
      </div>
      <div className="px-12 py-3 w-[455px] flex flex-row justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="text-slate-700">Task Status</div>
          <div>{task.name}</div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="text-slate-700">Assigment</div>
          <div className="flex ">
            <Image
              src={Avatar}
              className="w-[32px] h-[32px] -mr-3 "
              alt="logo"
            />
            <Image
              src={Avatar}
              className="w-[32px] h-[32px] -mr-3"
              alt="logo"
            />
            <Image
              src={Avatar}
              className="w-[32px] h-[32px] -mr-3"
              alt="logo"
            />
            <Image
              src={avatar2}
              className="w-[32px] h-[32px] -mr-3"
              alt="logo"
            />
          </div>
        </div>
        <div className="text-slate-700">Priotry</div>
      </div>
      <div className="px-12 py-3">
        <div className="text-slate-700">Description</div>
        <div className="text-slate-700 font-normal ">
          Görevin açıklaması: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="px-12 py-3">
        <div className=" h-full border-[1px] border-slate-300 rounded-md">
          <div className="flex justify-around bg-slate-100 py-2 border-b-[1px] border-slate-300">
            <div className="flex glex-row gap-x-1">
              <Image src={attachment} alt="" width={16} height={16} />
              <button
                onClick={() => showContent("attachment")}
                className={`text-xs text-slate-700 ${
                  activeTab === "attachment" &&
                  "font-semibold text-[#145389] border-b-2 border-[#145389]"
                }`}
              >
                Attachment
              </button>
            </div>
            <div className="flex glex-row gap-x-1">
              <Image src={attachment} alt="" width={16} height={16} />
              <button
                onClick={() => showContent("subtask")}
                className={`text-xs text-slate-700 ${
                  activeTab === "subtask" &&
                  "font-semibold text-[#145389] border-b-2 border-[#145389]"
                }`}
              >
                Sub Task
              </button>
            </div>
            <div className="flex glex-row gap-x-1">
              <Image src={attachment} alt="" width={16} height={16} />
              <button
                onClick={() => showContent("comment")}
                className={`text-xs text-slate-700 ${
                  activeTab === "comment" &&
                  "font-semibold text-[#145389] border-b-2 border-[#145389]"
                }`}
              >
                Comment
              </button>
            </div>
          </div>
          <div
            id="attachment"
            className={`${activeTab === "attachment" ? "block h-[30vh] overflow-y-auto" : "hidden"}`}
          >
            <div className="p-2 overflow-y-auto flex flex-col gap-y-1">
              <div className="relative">
                <div className="flex flex-row gap-x-2 items-center">
                  <Image
                    src={Avatar}
                    className="w-[32px] h-[32px]"
                    alt="logo"
                  />
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-x-2 text-xs">
                      <div>Lana Steiner</div>
                      <div className="text-slate-500">2 mins ago</div>
                    </div>
                    <div className="text-xs">
                      Added a file to Invited{" "}
                      <span className="text-[#145389]">
                        Marketing site redesign
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 pl-12 flex flex-row items-center">
                  <Image src={file} alt="" width={40} height={40} />
                  <div className="flex flex-col">
                    <div className="text-xs text-slate-700">
                      Tech requirements.pdf
                    </div>
                    <div className="text-xs text-slate-700">235 kb</div>
                  </div>
                </div>
                <div className="absolute top-9 left-4 h-12 border-l-[1px] border-slate-500"></div>
              </div>
              <div className="relative">
                <div className="flex flex-row gap-x-2 items-center">
                  <Image
                    src={Avatar}
                    className="w-[32px] h-[32px]"
                    alt="logo"
                  />
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-x-2 text-xs">
                      <div>Lana Steiner</div>
                      <div className="text-slate-500">2 mins ago</div>
                    </div>
                    <div className="text-xs">
                      Added a file to Invited{" "}
                      <span className="text-[#145389]">
                        Marketing site redesign
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 pl-12 flex flex-row items-center">
                  <Image src={file} alt="" width={40} height={40} />
                  <div className="flex flex-col">
                    <div className="text-xs text-slate-700">
                      Tech requirements.pdf
                    </div>
                    <div className="text-xs text-slate-700">235 kb</div>
                  </div>
                </div>
                <div className="absolute top-9 left-4 h-12 border-l-[1px] border-slate-500"></div>
              </div>
              <div className="relative">
                <div className="flex flex-row gap-x-2 items-center">
                  <Image
                    src={Avatar}
                    className="w-[32px] h-[32px]"
                    alt="logo"
                  />
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-x-2 text-xs">
                      <div>Lana Steiner</div>
                      <div className="text-slate-500">2 mins ago</div>
                    </div>
                    <div className="text-xs">
                      Added a file to Invited{" "}
                      <span className="text-[#145389]">
                        Marketing site redesign
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 pl-12 flex flex-row items-center">
                  <Image src={file} alt="" width={40} height={40} />
                  <div className="flex flex-col">
                    <div className="text-xs text-slate-700">
                      Tech requirements.pdf
                    </div>
                    <div className="text-xs text-slate-700">235 kb</div>
                  </div>
                </div>
                <div className="absolute top-9 left-4 h-12 border-l-[1px] border-slate-500"></div>
              </div>
            </div>
          </div>
          <div
            id="subtask"
            className={`${activeTab === "subtask" ? "block" : "hidden"}`}
          >
            Sub Task
          </div>
          <div
            id="comment"
            className={`${activeTab === "comment" ? "block" : "hidden"}`}
          >
            Comment
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
