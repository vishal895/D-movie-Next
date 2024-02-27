import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { SiLivechat } from "react-icons/si";
import { FaRegCommentAlt } from "react-icons/fa";

import React from "react";

const ContectCard = () => {
  return (
    <>
      <div className="grid grid-cols-3 justify-items-center">
        <div
          className="bg-white py-5  w-[300px] shadow-2xl box-shadow  text-center rounded-[5px]">
          <div className="flex justify-center">
            <MdEmail  className="text-red-800 text-2xl"/>
          </div>
          <h1 className="text-black mb-3">Email</h1>
          <p className="text-grey-600">Monday to Friday</p>
          <p className="text-grey-600 mb-20">Response time:72 hours</p>
          <Link href="/" className="text-black font-bold ">Send Email -</Link>
        </div>
        <div className="bg-white py-10  w-[300px] shadow-2xl box-shadow  text-center rounded-[5px]">
          <div className="flex justify-center">
            <FaRegCommentAlt className="text-red-800 text-2xl" />
          </div>
          <h1 className="text-black mb-3">Community Form</h1>
          <p className="text-grey-600">Monday to Friday</p>
          <p className="text-grey-600 mb-20">Response time:72 hours</p>
          <Link href="/">Ask the Community</Link>
        </div>
        <div className="bg-white py-10  w-[300px] shadow-2xl box-shadow  text-center rounded-[5px]">
          <div className="flex justify-center">
            <SiLivechat className="text-red-800 text-2xl"/>
          </div>
          <h1 className="text-black mb-3">Live Chat</h1>
          <p className="text-grey-600">Monday to Friday</p>
          <p className="text-grey-600 mb-20">Response time:72 hours</p>
          <Link href="/">Chat now</Link>
        </div>
      </div>
    </>
  );
};

export default ContectCard;
