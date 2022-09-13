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
import LatestProducts from "../Components/LatestProducts";
import "./newstyle.css";
import imgvar from "../Components/Images/image1.png";
import imgvar2 from "../Components/Images/image9.png";

export default function Home() {
  return (
    <>
      <div className="products" style={{display:'none'}}>
        <SingleProduct
          title={"FirstTitle"}
          first={"InsideFirst"}
          second={"InsideSecond"}
          localimg={imgvar}
        />
        <SingleProduct
          title={"SecondTitle"}
          first={"InsideFirst"}
          second={"InsideSecond"}
          localimg={imgvar2}
        />
        <SingleProduct
          title={"ThirdTitle"}
          first={"InsideFirst"}
          second={"InsideSecond"}
          localimg={imgvar}
        />
        <SingleProduct
          title={"FourthTitle"}
          first={"InsideFirst"}
          second={"InsideSecond"}
          localimg={imgvar2}
        />
      </div>
      <Header />
      <Mainbanner />
      <OfferList />
      <InBetweenBanner1 />
      <LatestProducts />
      <Discountitem />
      <InBetweenBanner2 />
      <BrandList />
      <Latestblog />
      <Footer />
    </>
  );
}

function SingleProduct({ title, first, second,localimg }) {
  return (
    <>
      <div className="singleproduct_outer">
        <img src={localimg} />
        <div>{title}</div>
        <div>{first}</div>
        <div>{second}</div>
      </div>
    </>
  );
}
