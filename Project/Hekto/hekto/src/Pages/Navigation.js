import React from "react";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ShopPage from "./ShopPage";
export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Shop" element={<ShopPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
