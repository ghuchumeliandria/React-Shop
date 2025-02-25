import React, { useReducer, useState } from "react";
import minus from "../../../assets/images/Minus.png";
import plus from "../../../assets/images/plus.png";
import AddToCartBtn from "../../__atoms/Buttons/AddToCart/AddToCartBtn";

const initialValue = {
  count : 0
}

const Reducer = (state,action) =>{
  switch(action.type){
    case "INCREMENT" : 
    return {count : state.count + 1};
    case "DECREMENT" : 
    return {count : state.count - 1}
  }
  
}

function AddToCart() {

  const [state,dispatch] = useReducer(Reducer , initialValue)
 

  return (
    <>
    {/* Product info */}

      <div className="w-full max-w-[445px] flex flex-col max-sm:px-6 ">
        <div className="flex flex-col gap-8 max-sm:gap-4.5">
          <h2 className="text-mainorange font-KumbhBold tracking-[2px] mb-[-11px] max-sm:text-[12px]">
            Sneaker Company
          </h2>
          <h1 className="text-[44px] font-KumbhBold leading-12 max-sm:text-[28px] max-sm:leading-8" >
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-Pgrey ">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>

        {/* Product Price */}

        <div className="flex flex-col gap-2.5 font-KumbhBold mt-7 max-sm:flex-row max-sm:justify-between max-sm:items-center">
          <div className="flex gap-4">
            <h1 className="text-[28px]">$125.00</h1>
            <span className="w-[51px] h-[27px] bg-[#FFEEE2] flex justify-center items-center text-mainorange rounded-[6px]  mt-3.5">
              %50
            </span>
          </div>
          <span className="text-[#B6BCC8] line-through">$250.00</span>
        </div>

        {/* Product Buttons */}

        <div className="flex gap-4 mt-8 max-sm:flex-col">
          <div className="flex justify-between px-4 py-4.5 w-[157px] bg-[#F6F8FD] rounded-[10px] max-sm:w-full ">
            <button className="cursor-pointer" onClick={() => dispatch({type : "DECREMENT"})} disabled={state.count === 0}>
              <img src={minus} alt="" />
            </button>
            <p className="font-KumbhBold">{state.count}</p>
            <button className=" cursor-pointer" onClick={() => dispatch({type : "INCREMENT"})} >
              <img src={plus} alt="" />
            </button>
          </div>

          {/* ADD TO CART BUTTON */}

          <AddToCartBtn state={state.count}  />
        </div>
      </div>
    </>
  );
}
export default AddToCart;
