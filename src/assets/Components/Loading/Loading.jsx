import React from "react";
import  "./style.css";
const Loading = () => {
  return (
    <>
  

      <div className="flex items-center justify-center min-h-screen fixed top-0 left-0 right-0 bottom-0 bg-gray-50">
        <div className="loader w-16 aspect-square"></div>
      </div>
    </>
  );
};

export default Loading;
