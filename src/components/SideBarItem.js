import React from "react";

const SideBarItem = ({ title, icon }) => {
  return (
    <div className="d-flex gap-2 icon-light font-regular fw-normal my-4 align-items-center pe-none">
      <img src={icon} alt="" />
      <span className="">{title}</span>
    </div>
  );
};

export default SideBarItem;
