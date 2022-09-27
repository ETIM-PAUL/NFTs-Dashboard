import React from "react";
import Profile from "../assets/icons/profile.svg";
import darkMarket from "../assets/icons/darkMarket.svg";
import NFT4 from "../assets/NFTs/NFT4.png";
import NFT5 from "../assets/NFTs/NFT5.png";
import NFT6 from "../assets/NFTs/NFT6.png";
import { MdAlarm } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/themeSlice";

const SidePanel = () => {
  const theme = useSelector(selectTheme);

  const arraysUsers = [
    { username: "@crayionbin", items: 8.25 },
    { username: "@artcrafted", items: 3.2 },
    { username: "@3dmodel", items: 20.5 },
    { username: "@jullyboi", items: 8.23 },
    { username: "@babsonclr", items: 8.25 },
    { username: "@fruganfur", items: 3.16 },
  ];
  return (
    <div
      className={`col-3 pb-3 overflow-scroll ${theme === 'light' ? 'content-light' : 'content-dark'}`}
    >
      <section className="pe-3 py-3 font-regular">
        <span
          className={`fs-6 fw-bolder ${theme === 'light' ? 'font-light ' : 'font-dark'}`}
        >
          Highest Bid
        </span>
        <div
          className={`py-2 mt-2 px-3 d-block card cardborder ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}
        >
          <div className="row">
            <div className="col-6">
              <img src={NFT6} alt="" className="w-100" />
            </div>
            <div className="col-6">
              <img src={NFT5} alt="" className="w-100" />
            </div>
          </div>
          <div className="row mt-2 h-50">
            <div className="col-12">
              <img src={NFT4} alt="" className="w-100" />
            </div>
          </div>
          <div className="d-flex justify-content-between my-2 align-items-center">
            <div className="d-flex gap-1 align-items-center">
              <img
                src={Profile}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <span className={theme === "light" ? "icon-light" : "font-dark"}>
                @legion
              </span>
            </div>
            <span
              className={`font-semibold ${theme === "light" ? "font-light" : "font-dark"}`}
            >
              12.5 ETH
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <span
              className={
                theme === "light" ? "fw-semibold" : "fw-semibold font-dark"
              }
            >
              Beautiful duk & llon
            </span>
            <span className={theme === "light" ? "icon-light" : "icon-dark"}>
              Current bid
            </span>
          </div>
          <div className="d-flex align-items-center mt-3 justify-content-between">
            <button
              type="button"
              className="default-btn btn-primary w-50 filter-btn p-2 text-white d-flex justify-content-center gap-2 align-items-center"
            >
              <img src={darkMarket} alt="" />
              <span className="default-font  fw-semibold">Place Bid</span>
            </button>
            <div className="d-flex align-items-center gap-1">
              <MdAlarm
                className={theme === "light" ? "fs-4" : "fs-4 text-white"}
              />
              <span className={theme === "light" ? "icon-light" : "font-dark"}>
                {" "}
                History
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="pe-3 pt-3 font-regular">
        <span
          className={`fs-6 fw-bolder ${theme === "light" ? "font-light " : "font-dark"}`}
        >
          Who to follow
        </span>
        <div
          className={`py-2 mt-2 px-3 d-block card cardborder ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}
        >
          {arraysUsers.map((user, index) => (
            <div className="d-flex justify-content-between py-2" key={index}>
              <div className="d-flex gap-1 align-items-center">
                <img
                  src={Profile}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="d-grid font-regular gap-0">
                  <span
                    className={`font-weight ${theme === "light" ? "font-light " : "font-dark"}`}
                  >
                    {user.username}
                  </span>
                  <span
                    className={`default-font ${theme === "light" ? "icon-light" : "icon-dark"}`}
                  >
                    {user.items}items
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="default-btn btn-primary w-50 filter-btn p-2 text-white d-flex justify-content-center gap-2 align-items-center"
              >
                <span className="default-font  fw-semibold">Follow</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SidePanel;
