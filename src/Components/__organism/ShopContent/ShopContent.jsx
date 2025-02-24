import React from "react";
import Product from "../../__molecules/Product/Product";
import AddToCart from "../../__molecules/AddToCart/AddToCart";
function ShopContent(){
    return(
        <>
            <div className="w-full max-w-[1015px] m-auto ">
                <Product />
                <AddToCart />
            </div>

        </>
    )
}

export default ShopContent;