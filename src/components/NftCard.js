import React, { useState } from "react";
import Profile from "../assets/icons/profile.svg";
import darkMarket from "../assets/icons/darkMarket.svg";
import fire from "../assets/icons/fire.svg";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/themeSlice";

const NftCard = ({ ...props }) => {
  const theme = useSelector(selectTheme);

  const [loved, setLoved] = useState(true);
  return (
    <div
      className={`py-2 px-2 d-block cardborder card ${theme === "light" ? "" : "darkcard"}`}
    >
      <img src={props.nftImg} alt="" className="img-fluid w-100 h-auto" />
      <img
        src={loved ? props.loved : props.notLoved}
        alt=""
        className="rounded-circle p-2 position-absolute"
        style={{
          width: "30px",
          height: "30px",
          top: 20,
          right: 30,
          backgroundColor: "rgba(27, 28, 30, 0.5)",
        }}
        onClick={() => setLoved(!loved)}
      />
      <button
        type="button"
        className="col-7 default-btn btn-primary filter-btn p-2 mt-3 text-white d-flex justify-content-center gap-2 align-items-center position-absolute"
        style={{
          top: 130,
          left: 20,
          backgroundColor: "rgba(27, 28, 30, 0.5)",
        }}
      >
        <img src={fire} alt="" />
        <span className="default-font  fw-semibold">{props.time}</span>
      </button>
      <div className="d-flex justify-content-between my-2 align-items-center">
        <div className="d-flex gap-1 align-items-center">
          <img src={Profile} alt="" style={{ width: "40px", height: "40px" }} />
          <span className={theme === "light" ? "icon-light" : "font-dark"}>
            {props.username}
          </span>
        </div>
        <span
          className={`fw-semibold ${theme === "light" ? "icon-light" : "font-dark"}`}
        >
          {props.amount} ETH
        </span>
      </div>
      <div className="d-flex justify-content-between">
        <span
          className={`fw-semibold ${theme === "light" ? "" : "font-dark"}`}
        >
          {props.nftName}
        </span>
        <span className={theme === "light" ? "icon-light" : "icon-dark"}>
          Current bid
        </span>
      </div>
      <button
        type="button"
        className="default-btn btn-primary w-100 filter-btn p-2 mt-3 text-white d-flex justify-content-center gap-2 align-items-center"
      >
        <img src={darkMarket} alt="" />
        <span className="default-font  fw-semibold">Place Bid</span>
      </button>
    </div>
  );
};

export default NftCard;
