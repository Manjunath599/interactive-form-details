import React from "react";
import completeImg from "../images/icon-complete.svg"


export default function Thankyou({ complete, setComplete }) {
  return (
    <div className="font-body flex flex-col items-center p-5 mt-32 ml-10 lg:mr-80 lg:mb-28">
      <img className="px-32" src={completeImg} />
      <h1 className="mt-6 mb-2">THANK YOU!</h1>
      <h3>We've added your card details</h3>
      <button onClick={() => setComplete(!complete)} className="border bg-[#21092f] rounded-lg w-80 p-2 mt-6 text-white">Continue</button>
    </div>
  )
}