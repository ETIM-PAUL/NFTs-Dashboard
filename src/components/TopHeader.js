import React from "react";
import NotyIcon from "../assets/icons/noty.svg";
import DarkNotyIcon from "../assets/icons/darkNoty.svg";
import Profile from "../assets/icons/profile.svg";
import DropDown from "../assets/icons/dropdown.svg";
import DarkDropDown from "../assets/icons/darkDropDown.svg";
import { selectTheme } from "../redux/themeSlice";
import { useSelector } from "react-redux";
const TopHeader = () => {
  const theme = useSelector(selectTheme);

  return (
    <>
      <nav
        className={
          theme === "light"
            ? "navbar align-items-start navbar-light py-2 px-5 bg-ash"
            : "header-dark-bg navbar align-items-start navbar-light py-2 px-5"
        }
      >
        <div className="col-12 col-md-4 col-lg-6">
          <input
            className={
              theme === "light"
                ? "form-control form-control-dark rounded-pill search-width bg-ash"
                : "form-control form-control-dark rounded-pill search-width input-dark font-dark"
            }
            type="text"
            placeholder="Search collection, bids and items"
            aria-label="Search"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-6 d-flex gap-3 align-items-center justify-content-end flex-wrap mt-3 mt-md-0">
          <img
            src={theme === "light" ? NotyIcon : DarkNotyIcon}
            alt=""
            className="rounded-circle border border-2 px-2 py-2"
            style={{ width: "40px", height: "40px" }}
          />
          <div
            className={
              theme === "light"
                ? "gap-2 d-flex font-light"
                : "gap-2 d-flex font-dark"
            }
          >
            <img
              src={Profile}
              alt=""
              className=" ms-2"
              style={{ width: "40px", height: "40px" }}
            />
            <span className="d-flex align-items-center  font-regular fw-semibold">
              @etimpaul
            </span>
            <img
              src={theme === "light" ? DropDown : DarkDropDown}
              alt=""
              className=""
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopHeader;
