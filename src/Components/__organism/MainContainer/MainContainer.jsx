import React, { useState } from "react";
import Header from "../../__molecules/Header/Header";
import ShopContent from "../ShopContent/ShopContent";

function MainContainer(){
    return(
        <>
        <div className="py-6.5 px-6 max-sm:py-5 z-40 flex flex-col gap-[90px] w-full max-w-[1110px] m-auto max-sm:px-0 max-sm:gap-0">
            <Header  />
            <ShopContent   />
        </div>
        </>
    )
}
export default MainContainer;