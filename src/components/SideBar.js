import React, { useEffect, useState } from "react";
import Logo from "../assets/icons/logo.svg";
import Market from "../assets/icons/market.svg";
import Dashboard from "../assets/icons/dashboard.svg";
import Message from "../assets/icons/messages.svg";
import Setting from "../assets/icons/settings.svg";
import Wallet from "../assets/icons/wallet.svg";
import Col from "../assets/icons/collection.svg";
import Ad from "../assets/NFTs/bottomAd.png";
import SideBarItem from "./SideBarItem";
import { HiSun, HiMoon } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { themeStatus, selectTheme } from "../redux/themeSlice";

const SideBar = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <div
      className={
        theme === "light"
          ? "align-items-start px-2 bg-white col-2"
          : "align-items-start px-2 -bg-dark col-2"
      }
    >
      <div className="d-flex p-3 col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap gap-2">
        <span className="navbar-brand mx-0 fw-bold fs-6 " href="#">
          <img src={Logo} alt="" className="" />
        </span>
        <span
          class={
            theme === "light"
              ? "navbar-brand fw-bold fs-6 font-light"
              : "navbar-brand fw-bold fs-6 font-dark"
          }
          href="#"
        >
          Ai NFT{theme}
        </span>
      </div>

      <div class="mt-2 pt-5 px-3">
        <SideBarItem title="Dashboard" icon={Dashboard} link="" />
        <SideBarItem title="Market place" icon={Market} link="market-place" />
        <SideBarItem title="My collection" icon={Col} link="collection" />
      </div>
      <div class="mt-5 pt-2 px-3">
        <span
          className={
            theme === "light"
              ? "font-regular fw-semibold"
              : "font-regular fw-semibold font-dark"
          }
        >
          Profile
        </span>
        <SideBarItem title="Messages" icon={Message} link="messages" />
        <SideBarItem title="My wallet" icon={Wallet} link="my-wallet" />
        <SideBarItem title="Settings" icon={Setting} link="settings" />
      </div>
      <div className="mt-5 pt-2 px-3">
        <div className="d-flex gap-3">
          <span
            className={
              theme === "light"
                ? "font-regular fw-semibold d-flex align-items-center"
                : "font-regular font-dark fw-semibold d-flex align-items-center"
            }
          >
            {theme === "light" ? "Light mode" : "Dark mode"}
          </span>
          <button
            className={
              theme === "light"
                ? "light-mood-button mode-button d-flex justify-content-between align-items-center"
                : "dark-mood-button mode-button d-flex justify-content-between align-items-center"
            }
          >
            <HiSun
              className={theme === "light" ? "fs-2 sun-light" : "fs-2 sun-dark"}
              onClick={() => {
                dispatch(themeStatus("light"));
              }}
            />
            <HiMoon
              className={
                theme === "light" ? "fs-3 moon-light" : "fs-3 moon-dark"
              }
              onClick={() => dispatch(themeStatus("dark"))}
            />
          </button>
        </div>
      </div>
      <div className="mt-5 pt-2 px-3">
        <img src={Ad} alt="" className="w-100" />
        <div
          style={{
            position: "absolute",
            bottom: 45,
            left: 20,
            width: "200px",
          }}
          className="px-3"
        >
          <p className=" font-dark fs-6">
            Create and refer to earn $100 worth of NFT
          </p>
          <button
            type="button"
            className="default-btn btn-primary w-75 filter-btn p-2 text-white d-flex justify-content-center gap-2 align-items-center"
          >
            <span className="default-font  fw-semibold">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
