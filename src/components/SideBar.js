import React, { useState } from "react";
import Logo from "../assets/icons/logo.svg";
import Market from "../assets/icons/market.svg";
import Dashboard from "../assets/icons/dashboard.svg";
import Message from "../assets/icons/messages.svg";
import Setting from "../assets/icons/settings.svg";
import Wallet from "../assets/icons/wallet.svg";
import { ReactComponent as Moon } from "../assets/icons/night.svg";
import SideBarItem from "./SideBarItem";
import { HiSun, HiMoon } from "react-icons/hi";

const SideBar = () => {
  const [light, setLight] = useState(true);

  return (
    <div
      class={
        light
          ? "align-items-start px-2 bg-white col-2"
          : "align-items-start px-2 -bg-dark col-2"
      }
    >
      <div class="d-flex p-3 col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap gap-2">
        <span class="navbar-brand mx-0 fw-bold fs-6 " href="#">
          <img src={Logo} alt="" class="" />
        </span>
        <span class="navbar-brand fw-bold fs-6 font-light" href="#">
          Ai NFT
        </span>
      </div>

      <div class="mt-2 pt-5 px-3">
        <SideBarItem title="Dashboard" icon={Dashboard} />
        <SideBarItem title="Market place" icon={Market} />
        <SideBarItem title="My collection" icon={Market} />
      </div>
      <div class="mt-5 pt-2 px-3">
        <span class="font-regular fw-semibold">Profile</span>
        <SideBarItem title="Messages" icon={Message} />
        <SideBarItem title="My wallet" icon={Wallet} />
        <SideBarItem title="Settings" icon={Setting} />
      </div>
      <div class="mt-5 pt-2 px-3">
        <div class="d-flex gap-3">
          <span class="font-regular fw-semibold d-flex align-items-center">
            Light mode
          </span>
          <button
            className={
              light
                ? "light-mood-button mode-button d-flex justify-content-between align-items-center"
                : "dark-mood-button mode-button d-flex justify-content-between align-items-center"
            }
          >
            <HiSun
              className={light ? "fs-2 sun-light" : "fs-2 sun-dark"}
              onClick={() => setLight(true)}
            />
            <HiMoon
              className={light ? "fs-3 moon-light" : "fs-3 moon-dark"}
              onClick={() => setLight(false)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
