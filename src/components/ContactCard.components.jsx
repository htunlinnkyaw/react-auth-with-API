import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCardComponents = ({ data }) => {
  const nav = useNavigate();

  const handleRedirect = () => {
    nav(`/home/contact/${data.id}`);
  };

  return (
    <div className="max-w-screen-sm my-5 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="space-y-3 flex items-center flex-col">
        <ul className="w-[50%] mx-auto">
          <li>Name - {data.name}</li>
          <li>Phone - {data.phone}</li>
        </ul>
        <button
          onClick={handleRedirect}
          className="w-[50%] bg-orange-300 px-2  py-1 rounded active:scale-95"
        >
          Detail
        </button>
      </div>
    </div>
  );
};

export default ContactCardComponents;
