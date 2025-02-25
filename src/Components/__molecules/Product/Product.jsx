import React from 'react'

import mainShoes from '../../../assets/images/ShoesMain.png'
import shoes2 from '../../../assets/images/Shoes2.png'
import shoes3 from '../../../assets/images/Shoes3.png'
import shoes4 from '../../../assets/images/Shoes4.png'
export default function Product() {

  return (
    <>
    <div className="flex flex-col gap-8 w-full max-w-[445px] z-50 ">
      <div className="w-full">
        <img src={mainShoes} alt="" className='w-full' />
      </div>
      <div className="flex gap-[31px] max-sm:hidden">
        <img src={mainShoes} alt=""  className='w-[88px] h-[88px] rounded-[10px]'/>
        <img src={shoes2} alt="" className='w-[88px] h-[88px] rounded-[10px]' />
        <img src={shoes3} alt=""  className='w-[88px] h-[88px] rounded-[10px]'/>
        <img src={shoes4} alt="" className='w-[88px] h-[88px] rounded-[10px]' />
      </div>
    </div>
    </>
  );
}
