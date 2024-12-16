"use client";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="md:flex md:justify-between md:w-full text-center relative">
      <div className="ml-5">
        <h1 className="text-cyan-400 font-mono font-bold md:text-4xl text-5xl pt-4 md:mt-7 ">CoinBase</h1>
        <button 
          onClick={() => setShow(!show)} 
          className="text-neutral-50 text-5xl md:hidden absolute right-0 top-6 "
        ><MdOutlineMenu  className=""/>
        </button>
      </div>
      <div className="font-mono md:text-[25px] text-[25px] cursor-pointer text-neutral-50">
  <ul className={`md:flex mt-5 mr-5 space-x-5 space-y-4 ${show ? "block" : "hidden"} text-start`}>
    <li className="ml-4 bg-slate-500 md:bg-transparent mt-4 p-1 rounded-lg">Coin</li>
    <li className="ml-4 bg-slate-500 md:bg-transparent p-1 rounded-lg">Price</li>
    <li className="ml-4 bg-slate-500 md:bg-transparent p-1 rounded-lg">Sign In</li>
    <li className="ml-4 bg-slate-500 md:bg-transparent p-1 rounded-lg">Sign Up</li>
  </ul>
</div>

      
    </div>
  );
};
 



export default Header;
