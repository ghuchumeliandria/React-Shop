import { useEffect, useState ,  } from "react";
import img from "../../../assets/images/ShoesMain.png";
import trash from "../../../assets/images/trash.png";
export default function Cart() {

  const [sum,setSum] = useState(0)
  const [cartValue,setCartValue] = useState(0)
  useEffect(() =>{
    const CartValue = JSON.parse(localStorage.getItem("quantity")) || 0
    setCartValue(CartValue)
  setSum(CartValue * 125)
  },[])

  const RemoveItem = () => {
    setCartValue(0);  
    localStorage.setItem("quantity", JSON.stringify(0)); 
  };

  return (
    <>
      <div className="absolute z-50 w-[360px] h-[256px] bg-white top-[74px] right-0 rounded-[10px] shadow-box max-sm:top-[54px] max-sm:right-0">
        <div className="p-[24px] pb-[27px] border-b-[1px] border-b-[#E4E9F2]">
          <h1 className="font-KumbhBold">Cart</h1>
        </div>
        {cartValue === 0 ? 
        <div className="pt-[77px] pb-[85px] px-[108px]">
          
        <p className="text-[#69707D] font-KumbhBold">Your cart is empty.</p>
        </div>
        : 
        <div className="p-6 pb-8 flex flex-col gap-6 transition-none" >
        <div className=" flex justify-between items-center">
          <img src={img} className="w-[50px] h-[50px] rounded-[4px]" alt="" />
          <div >
            <p className="text-[#69707D]">Fall Limited Edition Sneakers</p>
            <div className="flex gap-1.5 ">
              <p className="text-[#69707D]">$125.00 x {cartValue}</p>
              <p className="text-[#1D2026] font-KumbhBold">{sum}.00</p>
            </div>
          </div>
          <button onClick={RemoveItem}>

          <img src={trash} className="w-[14px] h-4" alt="" />
          </button>
        </div>
        <div className="w-full">
          <button className="w-full h-14 bg-mainorange text-white font-KumbhBold rounded-[10px] cursor-pointer">
            Checkout
          </button>
        </div>
      </div>
        }
        
      </div>
    </>
  );
}
