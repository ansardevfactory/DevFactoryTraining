import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mainbanner from "./Mainbanner";
import OfferList from "./OfferList";
import InBetweenBanner2 from "./InBetweenBanner2";
import Discountitem from "./Discountitem";
import Latestblog from "./Latestblog";
import BrandList from "./BrandList";
import InBetweenBanner1 from "./InBetweenBanner1";

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
