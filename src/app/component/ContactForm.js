"use client"
import React, { useState } from "react";

const ContactForm = () => {
  const [status,setStatus]=useState("")
  const [user,setUser]=useState({
    username:"",
    password:"",
    message:""
  })
  
  const handelchange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setUser((pre)=>({...pre,[name]:value}))


  }
  const refres = ()=>{
    setUser("")
  }
 
  const handelsubmit = async(e)=>{
    e.preventDefault()
    
    try{
      const response = await fetch("/app/contact2",{
        
        method:'POST',
        headers:{"Content_Type":"application/json"},
        body:JSON.Stringify({
          username:user.username,
          password:user.password,
          message:user.message
        })
      })

      if(response.status === 200){
        setUser({
          username:"",
    password:"",
    message:""
        })
        setStatus('success')
      }else{
        setStatus('error')
      }

    }catch(e){
      console.log(e)
    }
  }   

  return (
    <form className="flex justify-center" onSubmit={handelsubmit}>
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
            value={user.name}
            onChange={handelchange}
            required
            autoComplete="off"
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
            value={user.password}
            required
            onChange={handelchange}
            autoComplete="off"
            
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
            value={user.message}
            required
            onChange={handelchange}
            autoComplete="off"
            rows={5}
          />
        
        
      </div>
      <div className="">
        {status === 'succes' && <p>Thank you for your message</p>}
        {status === 'error' && <p>There was a error in your submitting . please  try again</p>}
        <button type="submit" onClick={refres} className="inline-flex  text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg rounded-full">Send Message</button>
      </div>

      </div>
    </form>
  );
};

export default ContactForm;
