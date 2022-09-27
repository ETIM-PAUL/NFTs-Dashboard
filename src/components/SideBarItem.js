import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { selectTheme } from "../redux/themeSlice";
import { useSelector } from "react-redux";

const SideBarItem = ({ title, lightIcon, darkIcon, link }) => {
  const theme = useSelector(selectTheme);
  const activeLink = {
    color: "#1364e9"
  }
  const inactiveLink = {
    color: "rgba(15, 20, 25, 0.85)"
  }

  return (
    <NavLink
      to={`/${link}`}
      key={title}
      className={({ isActive }) =>
        isActive ? activeLink : inactiveLink
      }
    >
      <div className="d-flex gap-2 font-regular fw-normal my-4 align-items-center pe-none">
        <img src={theme === "light" ? lightIcon : darkIcon} alt="" />
        <div
          class={({ isActive }) =>
            isActive ? activeLink : inactiveLink
          }
          className={theme === "light" ? "font-light" : "font-dark"}>
          <span className={link !== "collection" ? "ps-1" : ""}>{title}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default SideBarItem;
