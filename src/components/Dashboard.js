import React from "react";
import NFT1 from "../assets/NFTs/NFT1.png";
import NFT2 from "../assets/NFTs/NFT2.png";
import NFT3 from "../assets/NFTs/NFT3.png";
import darkMarket from "../assets/icons/darkMarket.svg";
import Profile from "../assets/icons/profile.svg";
import EthIcon from "../assets/icons/ethIcon.svg";
import SidePanel from "./SidePanel";

const FilterValue = ({ value }) => {
  return (
    <span className="fs-6 d-flex justify-content-center primary-bg-light filter-btn col-2 py-1">
      {value}
    </span>
  );
};
const NftRowData = ({ ...props }) => {
  return (
    <>
      <div className="pt-2" />
      <tbody className="pe-4">
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
      </tbody>
    </>
  );
};
const CreatorFlex = ({ ...props }) => {
  return (
    <div className="col-5 me-4 d-flex align-items-center justify-content-between">
      <div className="d-flex gap-1 align-items-center">
        <img src={Profile} alt="" style={{ width: "40px", height: "40px" }} />
        <div className="d-grid gap-0">
          <span className="font-light font-weight font-regular">
            {props.username}
          </span>
          <span className="icon-light font-regular default-font">
            {props.items} items
          </span>
        </div>
      </div>
      <span className="font-light font-regular fw-semibold default-font">
        $ {props.amount.toString()}+
      </span>
    </div>
  );
};
const NftCard = ({ ...props }) => {
  return (
    <div className="py-2 px-2 d-block bg-light card">
      <img src={props.nftImg} alt="" />
      <div className="d-flex justify-content-between my-2 align-items-center">
        <div className="d-flex gap-1 align-items-center">
          <img src={Profile} alt="" style={{ width: "40px", height: "40px" }} />
          <span className="icon-light">{props.username}</span>
        </div>
        <span className="font-light fw-semibold">{props.amount} ETH</span>
      </div>
      <div className="d-flex justify-content-between">
        <span className="fw-semibold">{props.nftName}</span>
        <span className="icon-light">Current bid</span>
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
const Dashboard = () => {
  return (
    <div className="d-flex">
      <div className="vh-100 content-light overflow-scroll col-9 pb-5">
        <section className="p-3 bg-red ">
          <div className="col-12 d-flex font-regular justify-content-between">
            <span className="fs-6 font-light fw-bolder">Top Bids</span>
            <span className="fs-6 blue me-2">See more</span>
          </div>
          <div className="col-12 d-flex font-regular gap-3 mt-3">
            <FilterValue value="Art" />
            <FilterValue value="Music" />
            <FilterValue value="Sport" />
            <FilterValue value="Photography" />
            <FilterValue value="Photos" />
          </div>
          <div className="w-100 d-flex font-regular gap-3 mt-3">
            <NftCard
              nftImg={NFT1}
              time="04h 07m 1s"
              nftName="Pareelia"
              amount="12.5"
              username="mybid"
            />
            <NftCard
              nftImg={NFT2}
              time="04h 07m 1s"
              nftName="Hanillia"
              amount="11.0"
              username="@bluecart"
            />
            <NftCard
              nftImg={NFT3}
              time="04h 07m 1s"
              nftName="Henchman"
              amount="10.2"
              username="@worthgan"
            />
            <NftCard
              nftImg={NFT3}
              time="04h 07m 1s"
              nftName="Henchman"
              amount="10.2"
              username="@worthgan"
            />
          </div>
        </section>
        <section className="p-3 d-block">
          <div className="col-12 d-flex font-regular justify-content-between">
            <span className="fs-6 font-light fw-bolder">Top Creators</span>
            <span className="fs-6 blue me-2">See more</span>
          </div>
          <div className="py-2 px-2 mt-3 d-flex col-12 bg-light card">
            <div className="d-flex flex-wrap justify-content-between my-2 align-items-center gap-2">
              <CreatorFlex
                username="@annetteblack"
                amount="230,000"
                items={23.5}
              />
              <CreatorFlex
                username="@grandbrand"
                amount="205,000"
                items={11.9}
              />
              <CreatorFlex username="@yrestra" amount="300,000" items={10.5} />
              <CreatorFlex
                username="@natorcolors"
                amount="150,000"
                items={9.9}
              />
            </div>
          </div>
        </section>
        <section className="px-3 pt-3 pb-5 d-block">
          <div className="col-12 d-flex font-regular justify-content-between">
            <span className="fs-6 font-light fw-bolder">Top Nfts</span>
            <span className="fs-6 blue me-2">Sort by</span>
          </div>
          <div
            className="py-2 px-2 mt-3 d-flex col-12 bg-light card"
            style={{ height: "200px", overflow: "auto" }}
          >
            <div className="d-flex flex-wrap justify-content-center my-2 align-items-center gap-2">
              <table className="col-12">
                <thead>
                  <td className="font-regular">Collection</td>
                  <td className="font-regular">Volume</td>
                  <td className="font-regular">24h</td>
                  <td className="font-regular">Owners</td>
                  <td className="font-regular">Mid Price</td>
                  <td className="font-regular">Items</td>
                </thead>
                <NftRowData
                  name="@ibrahimaliu"
                  volume={67.92}
                  change="+10.20%"
                  owners={7.5}
                  midprice={6.9}
                  items="19.7M"
                />
                <NftRowData
                  name="@gredden"
                  volume={56.52}
                  change="-15.14%"
                  owners={5.9}
                  midprice={2.0}
                  items="26.6K"
                />
                <NftRowData
                  name="@rullyboi5"
                  volume={46.88}
                  change="-19.13%"
                  owners={4.7}
                  midprice={4.8}
                  items="18.6K"
                />
                <NftRowData
                  name="@rullyboi5"
                  volume={46.88}
                  change="-19.13%"
                  owners={4.7}
                  midprice={4.8}
                  items="18.6K"
                />
              </table>
            </div>
          </div>
        </section>
      </div>
      <SidePanel />
    </div>
  );
};

export default Dashboard;
