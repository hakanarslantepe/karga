"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex">
          <div className="">
            <Sidebar
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          </div>
          <div
            className={`h-[calc(100vh-72px)] ${
              showSidebar ? "w-[calc(100vw-354px)]" : "w-[calc(100vw-72px)]"
            }`}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
