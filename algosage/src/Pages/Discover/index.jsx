import React from "react";
import Card from "./Card";
import { Cards } from "./Cards";

function Discover() {
  return (
    <>
      <div className="flex ">
            <div className="flex flex-col py-8 ">
                <div className="text-xl ml-1">Browse Exchanges</div>
                <Card/>
                <Cards/>
            </div>
        </div>
    </>
  )
}

























export default Discover;
