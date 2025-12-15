import React from "react";
import { useNavigate } from "react-router-dom";

const NotFount = () => {
  const navigate = useNavigate();
  return (
    <div>
      not fount <a onClick={() => navigate("/")}>home</a>
    </div>
  );
};

export default NotFount;
