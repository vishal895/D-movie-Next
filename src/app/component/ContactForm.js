import { Mulish } from "next/font/google";
import React from "react";

const ContactForm = () => {
  return (
    <form className="flex justify-center">
    <div className="bg-white p-5  w-[400px] shadow-2xl box-shadow   rounded-[5px]">
      <div className="">
        <label htmlFor="username">
          UserName
          </label><br/>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="bg-white p-2 shadow-xl box-shadow rounded-[5px] w-full border mb-6"
          />
      </div>
        <div className="">
        <label htmlFor="password">
          Password
          </label><br/>
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            className="bg-white p-2 shadow-xl box-shadow rounded-[5px] w-full border mb-6"
            
          />
        
        </div>
        <div className="">
        <label htmlFor="username">
          Message
          </label><br/>
          <textarea
            type="text"
            name="message"
            placeholder="Enter your message"
            className="bg-white p-2 shadow-xl box-shadow rounded-[5px] w-full border mb-6"
            rows={5}
          />
        
        
      </div>
      <div className="">
        <button type="submit" className="inline-flex  text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg rounded-full">Send Message</button>
      </div>
      </div>
    </form>
  );
};

export default ContactForm;
