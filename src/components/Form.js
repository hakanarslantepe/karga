"use client";

import React, { useState } from "react";

const Form = ({ boardId, closeForm, setOpenForms }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    flagId: 1,
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { name, description, flagId, startDate, endDate } = formData;
    const dataToSend = {
      name,
      description,
      boardId,
      flagId,
      startDate,
      endDate,
    };
    const token = localStorage.getItem("token");
    fetch("https://api.management.parse25proje.link/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setOpenForms(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="py-2 flex-col flex gap-y-2 bg-slate-50">
      <input
        className="text-sm w-68 focus:outline-none px-2 py-1 border-[1px] focus:border-green-700 border-slate-500 rounded-md mx-2 "
        placeholder="Task Name"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <textarea
        className="text-sm w-68 focus:outline-none px-2 py-1 border-[1px] focus:border-green-700 border-slate-500 rounded-md mx-2 "
        placeholder="Description"
        type="text"
        rows={1}
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        className="text-sm w-68 focus:outline-none px-2 py-1 border-[1px] focus:border-green-700 border-slate-500 rounded-md mx-2 "
        placeholder="Flag Id"
        type="number"
        id="flagId"
        name="flagId"
        value={formData.flagId}
        onChange={handleChange}
      />
      <input
        className="text-sm text-slate-500 w-68 focus:outline-none px-2 py-1 border-[1px] focus:border-green-700 border-slate-500 rounded-md mx-2 "
        placeholder="Start Date"
        type="datetime-local"
        id="startDate"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />
      <input
        className="text-sm text-slate-500 w-68 focus:outline-none px-2 py-1 border-[1px] focus:border-green-700 border-slate-500 rounded-md mx-2 "
        placeholder="End Date"
        type="datetime-local"
        id="endDate"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />
      <div className="flex justify-between mx-2">
        <button
          onClick={handleSubmit}
          className="text-sm text-white bg-green-500 px-2 py-1 rounded-lg"
        >
          Create Task
        </button>
        <button
          onClick={() => closeForm(boardId)}
          className="text-sm text-white bg-red-500 px-2 py-1 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Form;
