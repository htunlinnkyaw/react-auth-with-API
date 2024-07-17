import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCardComponents = ({ data, handleDelete }) => {
  const nav = useNavigate();

  const handleRedirect = () => {
    nav(`/home/contact/${data.id}`);
  };

  const handleEdit = () => {
    nav("/home/add", { state: { edit: true, data, id: data.id } });
  };

  return (
    <div className="max-w-screen-sm my-5 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="space-y-3 justify-center flex items-center">
        <ul className="w-[50%] flex items-center flex-col">
          <li className="text-center">Name - {data.name}</li>
          <li className="text-center">Phone - {data.phone}</li>
        </ul>
      </div>
      <div className="flex justify-center gap-3 mt-5">
        <button
          onClick={handleRedirect}
          className="w-[30%] bg-gray-300 px-2  py-1 rounded active:scale-95"
        >
          Detail
        </button>
        <button
          onClick={handleEdit}
          className="w-[30%] bg-orange-300 px-2  py-1 rounded active:scale-95"
        >
          Edit
        </button>
        <button
          onClick={handleDelete.bind(this, data.id)}
          className="w-[30%] bg-red-300 px-2  py-1 rounded active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCardComponents;
