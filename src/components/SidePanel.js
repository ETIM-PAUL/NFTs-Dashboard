import React from "react";
import Profile from "../assets/icons/profile.svg";
import darkMarket from "../assets/icons/darkMarket.svg";
import NFT4 from "../assets/NFTs/NFT4.png";
import NFT5 from "../assets/NFTs/NFT5.png";
import NFT6 from "../assets/NFTs/NFT6.png";
import { MdAlarm } from "react-icons/md";

const SidePanel = () => {
  const arraysUsers = [
    { username: "@crayionbin", items: 8.25 },
    { username: "@artcrafted", items: 3.2 },
    { username: "@3dmodel", items: 20.5 },
    { username: "@jullyboi", items: 8.23 },
    { username: "@babsonclr", items: 8.25 },
    { username: "@fruganfur", items: 3.16 },
  ];
  return (
    <div className="col-3 content-light pb-3">
      <section className="pe-3 py-3 font-regular">
        <span className="fs-6 font-light fw-bolder">Highest Bid</span>
        <div className="py-2 mt-2 px-3 d-block bg-light card">
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
              <span className="icon-light">@legion</span>
            </div>
            <span className="font-light fw-semibold">12.5 ETH</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-semibold">Beautiful duk & llon</span>
            <span className="icon-light">Current bid</span>
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
              <MdAlarm className="fs-4" />
              <span className="icon-light"> History</span>
            </div>
          </div>
        </div>
      </section>
      <section className="pe-3 pt-3 font-regular">
        <span className="fs-6 font-light fw-bolder">Who to follow</span>
        <div className="py-2 mt-3 px-2 d-block bg-light card">
          {arraysUsers.map((user, index) => (
            <div className="d-flex justify-content-between py-2" key={index}>
              <div className="d-flex gap-1 align-items-center">
                <img
                  src={Profile}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="d-grid gap-0">
                  <span className="font-light font-weight font-regular">
                    {user.username}
                  </span>
                  <span className="icon-light font-regular default-font">
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
