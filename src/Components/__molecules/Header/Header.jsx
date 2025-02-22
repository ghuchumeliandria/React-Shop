import React, { useState } from "react";
import ShopIcon from "../../../assets/images/ShopIcon.png";
import Profile from "../../../assets/images/Profile.png";
import Logo from "../../__atoms/Logo/Logo";
import Burger from "../../../assets/images/Burger.png";
function Header(props) {

    const [burgerTrue,setBurgerTrue] = useState(false)
    const [hidden,setHidden] = useState("hidden")
    const BurgerMenu = () =>{
        // setBurgerTrue(!burgerTrue)
        //  setHidden((prev) =>(prev === "hidden" ? "flex" :"hidden"))
        props.setBody("bg-transparent")
         console.log(props.body)
         console.log("yleoooo")
    }
    
  return (
    <>
      <div className="max-w-[1110px] mx-auto flex items-center justify-between pb-[35px] border-b-[1px] border-[#E4E9F2] max-sm:pb-[25px] max-sm:border-0">
        <div className="flex gap-[56px] items-center">
          <div className="flex items-center gap-4">
            <div className="hidden max-md:block ">
                <button className="z-20" onClick={BurgerMenu}  >
              <img src={Burger} alt="" className="mt-2.5" />
                </button>
            </div>
              <Logo />
          </div>
          <ul className={`overflow-hidden  text-[#69707D] ${hidden} absolute w-[250px] flex-col gap-5 h-full bg-white left-0 top-0 pl-[25px] pt-[92px] md:flex md:bg-transparent md:h-auto md:flex-row md:static md:p-0 `}>
            <li>Collections</li>
            <li>Men</li>
            <li>Womens</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-[45px] items-center max-sm:gap-4">
          <button>
            <img src={ShopIcon} alt="" />
          </button>
          <img src={Profile} alt="" className="max-w-12 w-full max-h-12 h-full max-sm:w-6 max-sm:h-6" />
        </div>
      </div>
    </>
  );
}
export default Header;
