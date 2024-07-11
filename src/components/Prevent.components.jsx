import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponents = ({ check, fail, children }) => {
  const nav = useNavigate();

  useEffect(() => {
    if (check) {
      nav(fail);
    }
  });

  return <>{children}</>;
};

export default PreventComponents;
