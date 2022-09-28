import React from "react";
import TopHeader from "./components/TopHeader";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="content-width">
      <div className="d-flex">
        <SideBar />
        <div className="d-block col-12 col-lg-10">
          <TopHeader />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/messages" />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
