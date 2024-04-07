import Image from "next/image";
import bell from "@/assets/bell.png";
import Avatar from "@/assets/Avatar.png";
import down from "@/assets/chevron-down.png";
import chart from "@/assets/chart.png";

const Sidebar = ({setShowSidebar,showSidebar}) => {
  return (
    <div className="flex flex-row relative">
      <div className="w-[72px] h-[calc(100vh-72px)] bg-[#363f72] flex flex-col justify-between">
        <div className="flex flex-col items-center pt-8 gap-y-6">
          <Image
            src={bell}
            className="object-cover w-[24px] h-[24px]"
            alt="logo"
          />
          <Image
            src={bell}
            className="object-cover w-[24px] h-[24px]"
            alt="logo"
          />
          <Image
            src={bell}
            className="object-cover w-[24px] h-[24px]"
            alt="logo"
          />
          <Image
            src={bell}
            className="object-cover w-[24px] h-[24px]"
            alt="logo"
          />
        </div>
        <div className="flex flex-col items-center gap-y-6 pb-4">
          <Image
            src={bell}
            className="object-cover w-[24px] h-[24px]"
            alt="logo"
          />
          <Image
            src={bell}
            className="object-cover w-[24px] h-[24px]"
            alt="logo"
          />
          <Image
            src={bell}
            className="object-cover w-[24px] h-[24px]"
            alt="logo"
          />
          <Image
            src={bell}
            className="object-cover w-[24px] h-[24px]"
            alt="logo"
          />
          <Image
            src={Avatar}
            className="object-cover w-[48px] h-[48px]"
            alt="logo"
          />
        </div>
      </div>
      {showSidebar ? (
        <div className="relative w-[282px] h-[calc(100vh-72px)] border-r-[2px] border-slate-200 px-4 flex flex-col justify-between">
          <div className="pt-8 flex flex-col">
            <div className="font-semibold text-[16px]">Projeler</div>
            <div className="flex flex-col gap-y-1 py-2">
              <div className="px-4 flex flex-row justify-between bg-slate-100 py-2 rounded-lg">
                <div className="flex flex-row">
                  <li className="list-disc text-sm text-red-500"></li>
                  <div className="text-blue-600 text-sm font-semibold">
                    Proje Isim 1
                  </div>
                </div>
                <div>
                  <Image src={down} width={20} height={20} alt="" />
                </div>
              </div>
              <div className="px-4 flex flex-row justify-between py-2 rounded-lg">
                <div className="flex flex-row">
                  <li className="list-disc text-sm text-green-500"></li>
                  <div className=" text-sm">Proje Isim 2</div>
                </div>
                <div>
                  <Image src={down} width={20} height={20} alt="" />
                </div>
              </div>
              <div className="px-4 flex flex-row justify-between py-2 rounded-lg">
                <div className="flex flex-row">
                  <li className="list-disc text-sm text-yellow-500"></li>
                  <div className=" text-sm">Proje Isim 3</div>
                </div>
                <div>
                  <Image src={down} width={20} height={20} alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="px-4 flex flex-row justify-between py-2 rounded-lg">
                  <div className="flex flex-row">
                    <li className="list-disc text-sm text-purple-500"></li>
                    <div className=" text-sm">Proje Isim 4</div>
                  </div>
                  <div>
                    <Image src={down} width={20} height={20} alt="" />
                  </div>
                </div>
                <div className="flex flex-col gap-y-3 py-4">
                  <div className=" flex flex-row items-center justify-between px-6">
                    <div className="text-center text-xs pl-6">Overview</div>
                    <div className="bg-slate-100  p-[2px] rounded-full text-sm">
                      10
                    </div>
                  </div>
                  <div className=" flex flex-row items-center justify-between px-6">
                    <div className="text-center text-xs pl-6">Notification</div>
                    <div className="bg-slate-100  p-[2px] rounded-full text-sm">
                      10
                    </div>
                  </div>
                  <div className=" flex flex-row items-center justify-between px-6">
                    <div className="text-center text-xs pl-6">Analitics</div>
                    <div className="bg-slate-100  p-[2px] rounded-full text-sm">
                      10
                    </div>
                  </div>
                  <div className=" flex flex-row items-center justify-between px-6">
                    <div className="text-center text-xs pl-6">Reports</div>
                    <div className="bg-slate-100 p-[2px] rounded-full text-sm">
                      10
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row px-4 item-center gap-x-2">
              <Image src={chart} width={24} height={24} alt="" />
              <div className="text-slate-500 text-sm">Proje Olustur</div>
            </div>
          </div>
          <div className="pb-4">
            <div className="font-semibold text-sm">Olivia Rhye</div>
            <div className="text-sm">olivia@untitledui.com</div>
          </div>
          <button className="text-3xl absolute right-0 top-72" onClick={()=>setShowSidebar(false)}>{"<"}</button>
        </div>
      ) : (
        <div>
          <button className="absolute text-3xl text-white right-0 top-72" onClick={() => setShowSidebar(true)}>{">"}</button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
