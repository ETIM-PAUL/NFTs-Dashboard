import React from "react";
import { useSelector } from "react-redux";
import EthIcon from "../assets/icons/ethIcon.svg";
import EthIconDark from "../assets/icons/ethIconDark.svg";
import Profile from "../assets/icons/profile.svg";
import { selectTheme } from "../redux/themeSlice";

const NftRowData = ({ ...props }) => {
  const theme = useSelector(selectTheme);

  return (
    <>
      <div className="pt-2" />
      <tbody className={theme !== "light" ? "font-dark" : ""}>
        <tr>
          <td>
            {" "}
            <div className="d-flex gap-1 align-items-center">
              <img
                src={Profile}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <span
                className={`font-regular font-weight ${theme === "light" ? "font-light" : "font-dark"}`}
              >
                {props.name}
              </span>
            </div>
          </td>
          <td className="default-font">
            <img src={theme === "light" ? EthIcon : EthIconDark} alt="" className="pe-1" />
            {props.volume}
          </td>
          <td className="default-font">{props.change}</td>
          <td className="default-font">{props.owners}K</td>
          <td className="default-font">
            <img src={theme === "light" ? EthIcon : EthIconDark} alt="" className="pe-1" />
            {props.midprice}
          </td>
          <td className="default-font">{props.items}</td>
        </tr>
      </tbody>
    </>
  );
};
export default NftRowData;
