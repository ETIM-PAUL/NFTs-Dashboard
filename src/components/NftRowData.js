import React from "react";
import EthIcon from "../assets/icons/ethIcon.svg";
import Profile from "../assets/icons/profile.svg";

const NftRowData = ({ ...props }) => {
  return (
    <>
      <div className="pt-2" />
      <tbody className="pe-4">
        <tr>
          <td>
            {" "}
            <div className="d-flex gap-1 align-items-center">
              <img
                src={Profile}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <span className="font-light font-regular font-weight">
                {props.name}
              </span>
            </div>
          </td>
          <td className="default-font">
            <img src={EthIcon} alt="" className="pe-1" />
            {props.volume}
          </td>
          <td className="default-font">{props.change}</td>
          <td className="default-font">{props.owners}K</td>
          <td className="default-font">
            <img src={EthIcon} alt="" className="pe-1" />
            {props.midprice}
          </td>
          <td className="default-font">{props.items}</td>
        </tr>
      </tbody>
    </>
  );
};
export default NftRowData;
