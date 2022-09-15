import React from "react";
import NotyIcon from "../assets/icons/noty.svg";
import Profile from "../assets/icons/profile.svg";
import DropDown from "../assets/icons/dropdown.svg";
const TopHeader = () => {
  const lightTheme = localStorage.getItem("light");

  return (
    <>
      <nav className="navbar align-items-start navbar-light py-2 px-5 bg-ash">
        <div className="col-12 col-md-4 col-lg-6 ">
          <input
            className="form-control form-control-dark fs-6 rounded-pill search-width bg-ash"
            type="text"
            placeholder="Search collection, bids and items"
            aria-label="Search"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-6 d-flex gap-3 align-items-center justify-content-end flex-wrap mt-3 mt-md-0">
          <img
            src={NotyIcon}
            alt=""
            className="rounded-circle border border-2 px-2 py-2"
            style={{ width: "40px", height: "40px" }}
          />
          <div className="gap-2 d-flex text-light">
            <img
              src={Profile}
              alt=""
              className=" ms-2"
              style={{ width: "40px", height: "40px" }}
            />
            <span className="d-flex align-items-center font-light font-regular fw-semibold">
              @etimpaul
            </span>
            <img src={DropDown} alt="" className="" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopHeader;
