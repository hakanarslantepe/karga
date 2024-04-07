import React from "react";
import mainLogo from "@/assets/mainLogo.png";
import notification from "@/assets/notification.png";
import twentyFive from "@/assets/twentyFive.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[72px] flex items-center justify-between px-8 border-b-[1px] shadow-sm">
      <Image src={mainLogo} width={178} height={24} alt="logo" />
      <div className="flex gap-x-2 ">
        <Image src={notification} className="object-cover w-[40px] h-[40px]"  alt="logo" />
        <Image src={notification} className="object-cover w-[40px] h-[40px]"  alt="logo" />
        <Image src={twentyFive} className="object-cover w-[50px] h-[50px]"  alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
