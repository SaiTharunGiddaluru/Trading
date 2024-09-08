import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl="\media\images\kite.png"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        productname="Kite"
        learnMore=""
        Google="\media\images\googlePlayBadge.svg"
        Appstore="media/images/appstoreBadge.svg"
        trydemo=""
      />
      <RightSection imgUrl="\media\images\console.png"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        productname="Console"
        learnMore=""
        />
        <LeftSection
        imgUrl="\media\images\coin.png"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        productname="Coin"
        learnMore=""
        Google="\media\images\googlePlayBadge.svg"
        Appstore="media/images/appstoreBadge.svg"
        trydemo=""
      />
      <RightSection imgUrl="\media\images\kiteconnect.png"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        productname="Kite Connect API"
        learnMore=""
        />
         <LeftSection
        imgUrl="\media\images\varsity.png"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        productname="Varsity mobile"
        learnMore=""
        Google="\media\images\googlePlayBadge.svg"
        Appstore="media/images/appstoreBadge.svg"
        trydemo=""
      />

      <h5 className="mb-5 mt-5 text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5>
      <Universe />
    </>
  );
}

export default ProductsPage;
