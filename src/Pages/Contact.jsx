import React, { useState } from 'react'

function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  const eventHandler = (e) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      return alert("Fill all the boxes")
    }
    alert("Your Contact is save ")
  }

  return (
    <div>
      <div className=" flex gap-5 mt-10 flex-col justify-center items-center">
        <div className=" text-2xl md:text-5xl ">
          <h1>Contact Us</h1>
        </div>
        <form onSubmit={eventHandler} className=' flex flex-col gap-5' action="">
          <input value={name} onChange={(e) => setName(e.target.value)} className=' border py-1 px-2 md:py-2 md:px-4 rounded-2xl text-lg md:text-2xl' type="text" autoComplete='off' placeholder='Enter your name' name="username" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} className=' border py-2 px-4 rounded-2xl text-2xl' type="email" autoComplete='off' placeholder='Enter your email' name="email" />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className=' border py-2 px-4 rounded-2xl text-2xl' name="" autoComplete='off' placeholder='Enter Your Message'></textarea>
          <button className=' border py-2 px-4 rounded-2xl  text-lg md:text-2xl cursor-pointer bg-white text-black' >Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
