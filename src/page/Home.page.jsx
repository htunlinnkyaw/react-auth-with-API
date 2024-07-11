import React from "react";
import { useNavigate } from "react-router-dom";
import PreventComponents from "../components/Prevent.components";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };

  return (
    <PreventComponents fail={"/"} check={!localStorage.getItem("auth")}>
      <div>
        <h1>HomePage</h1>
        <button onClick={handleLogout} className="underline">
          Logout
        </button>
      </div>
    </PreventComponents>
  );
};

export default HomePage;
