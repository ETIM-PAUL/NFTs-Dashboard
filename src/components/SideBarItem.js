import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SideBarItem = ({ title, icon, link }) => {
  const [lightTheme, setLightTheme] = useState();

  useEffect(() => {
    setLightTheme(JSON.parse(localStorage.getItem("light")));
  }, []);

  return (
    <NavLink
      to={`/${link}`}
      key={title}
      style={({ isActive }) => ({
        color: isActive ? "#1364E9" : "rgba(15, 20, 25, 0.85)",
      })}
    >
      <div className="d-flex gap-2 font-regular fw-normal my-4 align-items-center pe-none">
        <img src={icon} alt="" />
        <div className={lightTheme === true ? "font-light" : "font-dark"}>
          <span className={link !== "collection" ? "ps-1" : ""}>{title}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default SideBarItem;
