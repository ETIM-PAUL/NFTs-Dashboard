import React from "react";
import NotyIcon from "../assets/icons/noty.svg";
import Logo from "../assets/icons/logo.svg";
import DashboardMenu from "../assets/icons/dashboardMob.svg";
import DashboardMenuLight from "../assets/icons/dashboardMobLight.svg";
import LogoDark from "../assets/icons/logoDark.svg";
import DarkNotyIcon from "../assets/icons/darkNoty.svg";
import Profile from "../assets/icons/profile.svg";
import DropDown from "../assets/icons/dropdown.svg";
import DarkDropDown from "../assets/icons/darkDropDown.svg";
import Market from "../assets/icons/market.svg";
import Dashboard from "../assets/icons/dashboard.svg";
import Message from "../assets/icons/messages.svg";
import Setting from "../assets/icons/settings.svg";
import Wallet from "../assets/icons/wallet.svg";
import Col from "../assets/icons/collection.svg";
import MarketDark from "../assets/icons/marketDark.svg";
import DashboardDark from "../assets/icons/dashboardDark.svg";
import MessageDark from "../assets/icons/messagesDark.svg";
import SettingDark from "../assets/icons/settingsDark.svg";
import WalletDark from "../assets/icons/walletDark.svg";
import ColDark from "../assets/icons/collectionDark.svg";
import { useDispatch, useSelector } from "react-redux";
import SideBarItem from "./SideBarItem";
import { HiSun, HiMoon } from "react-icons/hi";
import { themeStatus, selectTheme } from "../redux/themeSlice";

const TopHeader = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <>
      <nav
        className={`navbar align-items-start navbar-light py-2 px-3 px-lg-5 ${theme === "light" ? "bg-ash" : "header-dark-bg"}`}
      >
        <div className="col-6 col-md-4 col-lg-6 d-none d-lg-block ">
          <input
            className={`form-control form-control-dark rounded-pill search-width ${theme === "light" ? "bg-ash" : "input-dark font-dark"}`}
            type="text"
            placeholder="Search collection, bids and items"
            aria-label="Search"
          />
        </div>
        <div className="col-3 d-flex gap-2 d-lg-none">
          <span className="navbar-brand mx-0 fw-bold fs-6 " href="#">
            <img src={theme === "light" ? DashboardMenuLight : DashboardMenu} alt="" className="" />
          </span>
          <span
            className={`navbar-brand fw-bold fs-6 ${theme === "light" ? "font-light" : "font-dark"}`}>
            Dashboard
          </span>
        </div>
        <div className="col-4 d-flex justify-content-center d-lg-none">
          <span className="navbar-brand mx-0 fw-bold fs-6 " href="#">
            <img src={theme === "light" ? Logo : LogoDark} alt="" className="" />
          </span>
        </div>
        <div className="col-md-4 col-lg-6 d-flex gap-3 align-items-center justify-content-end flex-wrap mt-md-0">
          <img
            src={theme === "light" ? NotyIcon : DarkNotyIcon}
            alt=""
            className="rounded-circle border border-2 px-2 py-2"
            style={{ width: "40px", height: "40px" }}
          />
          <div
            className={`gap-2 d-flex ${theme === "light" ? "font-light" : "font-dark"}`}
          >
            <img
              src={Profile}
              alt=""
              className=" ms-2"
              style={{ width: "40px", height: "40px" }}
            />
            <span className="d-flex align-items-center  font-regular fw-semibold d-none d-lg-flex">
              @etimpaul
            </span>
            <img
              src={theme === "light" ? DropDown : DarkDropDown}
              alt=""
              className=""
            />
          </div>
        </div>
        <div className={`d-lg-none dashboard-mobile ${theme === "light" ? "dashboard-light" : "dashboard-dark"}`}>
          <div className="mt-2 px-3">
            <SideBarItem title="Dashboard" lightIcon={Dashboard} darkIcon={DashboardDark} link="" />
            <SideBarItem title="Market place" lightIcon={Market} darkIcon={MarketDark} link="market-place" />
            <SideBarItem title="My collection" lightIcon={Col} darkIcon={ColDark} link="collection" />
          </div>
          <div className="pt-1 px-3">
            <span
              className={`font-regular fw-semibold ${theme === "light" ? "fw-semibold" : "font-dark"}`}
            >
              Profile
            </span>
            <SideBarItem title="Messages" lightIcon={Message} darkIcon={MessageDark} link="messages" />
            <SideBarItem title="My wallet" lightIcon={Wallet} darkIcon={WalletDark} link="my-wallet" />
            <SideBarItem title="Settings" lightIcon={Setting} darkIcon={SettingDark} link="settings" />
          </div>
          <div className="mb-2 px-3">
            <div className="d-flex gap-3">
              <span
                className={`font-regular fw-semibold d-flex align-items-center ${theme === "light" ? "" : "font-dark"}`}
              >
                {theme === "light" ? "Light mode" : "Dark mode"}
              </span>
              <button
                className={`mode-button d-flex justify-content-between align-items-center ${theme === "light" ? "light-mood-button" : "dark-mood-button"}`}
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
        </div>
      </nav>
    </>
  );
};

export default TopHeader;
