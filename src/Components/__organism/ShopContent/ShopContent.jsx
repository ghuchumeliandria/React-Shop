import React from "react";
import Product from "../../__molecules/Product/Product";
import AddToCart from "../../__molecules/AddToCart/AddToCart";
function ShopContent(){
    return(
        <>
            <div className="w-full max-w-[1015px] m-auto flex justify-between gap-5 max-[980px]:flex-col max-[980px]:items-center z-20">
                <Product />
                <AddToCart  />
            </div>

        </>
    )
}

export default ShopContent;