import React, { useEffect, useState } from "react";
import ShopIcon from "../../../assets/images/ShopIcon.png";
import Profile from "../../../assets/images/Profile.png";
import Logo from "../../__atoms/Logo/Logo";
import Cart from "../../__atoms/Cart/Cart";
function Header(props) {
  const [burgerTrue, setBurgerTrue] = useState(false);
  const [hidden, setHidden] = useState(" w-0 overflow-hidden");
  const [showCart, setShowCart] = useState(false);
  const [cartvalue, setCartValue] = useState("");
  const BurgerMenu = () => {
    setBurgerTrue(!burgerTrue);
    setHidden((prev) =>
      prev === " w-0 overflow-hidden"
        ? "flex w-[250px] overflow-visible pl-[25px] pt-[52px] "
        : " w-0 overflow-hidden"
    );
  };

  useEffect(() => {
    const quantiy = JSON.parse(localStorage.getItem("quantity")) || 0;
    setCartValue(quantiy);
  }, []);

  return (
    <>
      <div className=" w-full relative   flex items-center justify-between pb-[35px] border-b-[1px] border-[#E4E9F2] max-sm:pb-[25px] max-sm:border-0 max-sm:px-6">
        <div className="flex gap-[56px] items-center">
          <div className="flex items-center gap-4">
            <div className="hidden max-md:flex ">
              <button className="" onClick={BurgerMenu}>
                <div className=" flex flex-col gap-0.5">
                  <div className="w-4 h-[3x]  bg-[#69707D]"></div>
                  <div className="w-4 h-[3px] bg-[#69707D]"></div>
                  <div className="w-4 h-[3px] bg-[#69707D]"></div>
                </div>
              </button>
            </div>
            <Logo />
          </div>
          <ul
            className={`  transition-[0.5s]  text-[#69707D] ${hidden} absolute z-40  flex-col gap-5 h-[120vh] bg-white left-0 top-[45px]  md:w-full md:max-w-[397px] md:flex md:bg-transparent md:h-auto md:flex-row md:static md:p-0 `}>
            <li>Collections</li>
            <li>Men</li>
            <li>Womens</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-[45px] items-center max-sm:gap-4">
          <button
            className="cursor-pointer relative"
            onClick={() => {
              setShowCart(!showCart);
            }}>
            <img src={ShopIcon} alt="" />
            <div className="w-[19px] h-[13px] bg-mainorange rounded-[6.5px] absolute top-[-5px] right-[-6px]">
              <p className="text-white font-KumbhBold text-[10px]">
                {cartvalue}
              </p>
            </div>
          </button>
          <img
            src={Profile}
            alt=""
            className="max-w-12 w-full max-h-12 h-full max-sm:w-6 max-sm:h-6"
          />
        </div>
        {showCart && <Cart quantiy={cartvalue} />}
      </div>
    </>
  );
}
export default Header;
