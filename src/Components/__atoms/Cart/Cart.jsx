import img from "../../../assets/images/ShoesMain.png";
import trash from '../../../assets/images/trash.png'
export default function Cart() {
  return (
    <>
      <div className="absolute w-[360px] h-[256px] bg-white top-[74px] right-0 rounded-[10px] shadow-box max-sm:top-[54px] max-sm:right-[-17px]">
        <div className="p-[24px] pb-[27px] border-b-[1px] border-b-[#E4E9F2]">
          <h1 className="font-KumbhBold">Cart</h1>
        </div>
        <div className="p-6 pb-8 flex flex-col gap-6">
          <div className=" flex justify-between items-center">
            <img src={img} className="w-[50px] h-[50px] rounded-[4px]" alt="" />
            <div className="">
              <p>Fall Limited Edition Sneakers</p>
              <div className="flex">
                <p>$125.00 x 3</p>
                <p>$375.00</p>
              </div>
            </div>
            <img src={trash} className="w-[14px] h-4" alt="" />
          </div>
          <div className="w-full">
            <button className="w-full h-14 bg-mainorange text-white font-KumbhBold rounded-[10px] cursor-pointer">
                Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
