"use client";

import React, { useState } from "react";
import Image from "next/image";
import Calendar from "@/assets/Calendar.png";
import TaskModal from "./TaskModal";
import formattedDate from "@/utils/formattedDate";


const Task = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        key={task.id}
        className="bg-slate-50 m-2 p-2 rounded-lg flex flex-col gap-y-4 overflow-y-auto hover:cursor-pointer"
        onClick={openModal}
      >
        <div className="text-red-500">{task.name}</div>
        <div className="text-sm">{task?.description}</div>
        <div className="text-xs flex flex-row gap-x-2 items-center">
          <Image src={Calendar} width={16} height={16} alt="calendar" />
          <div>
            {formattedDate(task?.startDate)}-{formattedDate(task?.endDate)}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg h-[100vh] w-[100vw]">
            <TaskModal
              task={task}
              closeModal={closeModal}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
