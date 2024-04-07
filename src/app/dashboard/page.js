"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Board from "@/components/Board";

function Dashboard() {
  const [boards, setBoards] = useState([]);
  const [openForms, setOpenForms] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          router.push("/login");
          return;
        }

        const response = await fetch(
          "https://api.management.parse25proje.link/api/boards",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setBoards(data?.data);
          console.log(data?.data);
        } else {
          console.error("Board listesi alınamadı");
        }
      } catch (error) {
        console.error("Bir hata oluştu", error);
      }
    };

    fetchBoards();
  }, []);

  const openForm = (boardId) => {
    setOpenForms((prevForms) => ({
      ...prevForms,
      [boardId]: true,
    }));
  };

  const closeForm = (boardId) => {
    setOpenForms((prevForms) => ({
      ...prevForms,
      [boardId]: false,
    }));
  };


  return (
    <div className="bg-[#f3f6fd] px-6 flex flex-col">
      <div className="pt-6 font-semibold text-blue-800 text-lg">
        Frontend Case
      </div>
      <h2 className="pt-4">Boards</h2>
      <div className="flex pt-4 overflow-x-scroll">
        <div className="flex">
          {boards.map((board) => (
            <Board
              key={board.id}
              board={board}
              openForm={openForm}
              closeForm={closeForm}
              openForms={openForms}
              setOpenForms={setOpenForms}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
