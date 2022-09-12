import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Mainbanner from "../Components/Mainbanner";
import OfferList from "../Components/OfferList";
import InBetweenBanner2 from "../Components/InBetweenBanner2";
import Discountitem from "../Components/Discountitem";
import Latestblog from "../Components/Latestblog";
import BrandList from "../Components/BrandList";
import InBetweenBanner1 from "../Components/InBetweenBanner1";

export default function Home() {
  return (
    <>
      <Header />
      <Mainbanner/>
      <OfferList/>
      <InBetweenBanner1/>
      <Discountitem/>
      <InBetweenBanner2/>
      <BrandList/>
      <Latestblog/>
      <Footer />
    </>
  );
}
