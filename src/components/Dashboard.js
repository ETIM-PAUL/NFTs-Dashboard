import React, { useState } from "react";
import NFT1 from "../assets/NFTs/NFT1.png";
import NFT2 from "../assets/NFTs/NFT2.png";
import NFT3 from "../assets/NFTs/NFT3.png";
import Profile from "../assets/icons/profile.svg";
import SidePanel from "./SidePanel";
import NftCard from "./NftCard";
import NftRowData from "./NftRowData";
import Loved from "../assets/icons/loved.svg";
import Heart from "../assets/icons/heart.svg";
import { selectTheme } from "../redux/themeSlice";
import { useSelector } from "react-redux";

const CreatorFlex = ({ ...props }) => {
  const theme = useSelector(selectTheme);

  return (
    <div className="col-5 me-4 d-flex align-items-center justify-content-between">
      <div className="d-flex gap-1 align-items-center">
        <img src={Profile} alt="" style={{ width: "40px", height: "40px" }} />
        <div className="d-grid gap-0">
          <span
            className={
              `font-weight font-regular ${theme === "light" ? "font-light" : "font-dark"}`}
          >
            {props.username}
          </span>
          <span
            className={
              `font-regular default-font ${theme === "light" ? "icon-light" : "icon-dark"}`}
          >
            {props.items} items
          </span>
        </div>
      </div>
      <span
        className={
          `font-regular fw-semibold default-font ${theme === "light" ? "font-light" : "font-dark"}`}
      >
        $ {props.amount.toString()}+
      </span>
    </div>
  );
};
const FilterValue = ({ value, setFilter, filter }) => {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={`s-6 d-flex justify-content-center filter-btn col-2 py-1 ${filter === value ? " active-filter font-dark" : "dark-filter-bg font-dark"}`}
      onClick={() => setFilter(value)}
    >
      <span>{value}</span>
    </div>
  );
};

const Dashboard = () => {
  const [filter, setFilter] = useState("Art");
  const theme = useSelector(selectTheme);

  return (
    <div className="d-flex "

    >
      <div
        className={`vh-100 overflow-scroll col-md-12 col-lg-9 pb-5 ${theme === "light" ? "content-light" : "content-dark"}`}

      >
        <section className="p-3 bg-red ">
          <div className="col-12 fs-6 d-flex font-regular justify-content-between">
            <span
              className={`font-bolder ${theme === "light" ? "font-light" : "font-dark"}`}
            >
              Top Bids
            </span>
            <span className="blue me-2">See more</span>
          </div>
          <div className="col-12 d-flex font-regular gap-3 mt-3">
            <FilterValue value="Art" setFilter={setFilter} filter={filter} />
            <FilterValue value="Music" setFilter={setFilter} filter={filter} />
            <FilterValue value="Sport" setFilter={setFilter} filter={filter} />
            <FilterValue
              value="Photography"
              setFilter={setFilter}
              filter={filter}
            />
            <FilterValue value="Photos" setFilter={setFilter} filter={filter} />
          </div>
          <div
            className="font-regular gap-3 mt-3"
            style={{
              display: "grid",
              gridAutoRows: 0,
              gridTemplateColumns: `repeat(auto-fit,minmax(200px, 1fr))`,
              gridTemplateRows: "100%",
            }}
          >
            <NftCard
              nftImg={NFT1}
              time="04h 07m 1s"
              nftName="Pareelia"
              amount="12.5"
              username="mybid"
              loved={Loved}
              notLoved={Heart}
            />
            <NftCard
              nftImg={NFT2}
              time="04h 07m 1s"
              nftName="Hanillia"
              amount="11.0"
              username="@bluecart"
              loved={Loved}
              notLoved={Heart}
            />
            <NftCard
              nftImg={NFT3}
              time="04h 07m 1s"
              nftName="Henchman"
              amount="10.2"
              username="@worthgan"
              notLoved={Heart}
              loved={Loved}
            />
          </div>
        </section>
        <section className="p-3 d-block">
          <div className="col-12 fs-6 d-flex font-regular justify-content-between">
            <span
              className={`font-bolder ${theme === "light" ? "font-light" : "font-dark"}`}

            >
              Top Creators
            </span>
            <span className="blue me-2">See more</span>
          </div>
          <div
            className={`py-2 px-2 mt-3 d-flex col-12 card cardborder ${theme === "light" ? "bg-light" : "darkcard"}`}
          >
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
          <div className="col-12 fs-6 d-flex font-regular justify-content-between">
            <span
              className={`font-bolder ${theme === "light" ? "font-light" : "font-dark"}`}
            >Top Nfts</span>
            <span className=" blue me-2">Sort by</span>
          </div>
          <div
            className={`py-2 px-2 mt-3 d-flex col-12 card cardborder ${theme === "light" ? "bg-light" : "darkcard"}`}

            style={{ height: "200px", overflow: "auto" }}
          >
            <div className="d-flex flex-wrap justify-content-center my-2 align-items-center gap-2">
              <table className="col-12 ">
                <thead
                  className={`font-regular ${theme === "light" ? "font-light" : "font-dark"}`}
                >
                  <tr>
                    <th
                    >Collection</th>
                    <th>Volume</th>
                    <th>24h</th>
                    <th>Owners</th>
                    <th>Mid Price</th>
                    <th>Items</th>
                  </tr>
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
