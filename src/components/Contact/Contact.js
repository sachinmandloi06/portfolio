import React, { useState } from 'react'
import contactimg from "../../Assets/contact1.png"
import { MdOutlineTouchApp } from "react-icons/md";
import { FaBlenderPhone, FaRegCommentDots, FaRegEnvelope, FaRegPaperPlane, FaRegUser } from 'react-icons/fa';
const Contact = () => {

  const [contact , setContact] = useState({
    name:"",
    email:"",
    phone:"",
    message:"",
  })

  const {name,email,phone,message} = contact
  
   const handlechange = (e) => {
    setContact({
      ...contact,
      [e.target.name ] : e.target.value,
   })
   }
   
   const handleSubmit =(e) => {
    e.preventDefault()
    console.log(contact)
   }

  return (
    <section className="contact" id="contact">
   
  <h2 className="contact-heading"><MdOutlineTouchApp /> Get in <span>Touch</span></h2>

  <div className="contact-card">
    <div className="content">
      <div className="image-box">
        <img draggable="false" src={contactimg} alt=""/>
      </div>
    <form onSubmit={handleSubmit} id="contact-form">
      
      <div className="form-group">
        <div className="field">
          <input name="name" value={name} onChange={handlechange} type="text"  placeholder="Name" required/>
          <i className='fas fa-user'><FaRegUser/></i>
        </div>
        <div className="field">
          <input value={email} onChange={handlechange} type="text" name="email" placeholder="Email" required/>
          <i className='fas fa-envelope'><FaRegEnvelope/></i>
        </div>
        <div className="field">
          <input value={phone} onChange={handlechange} type="text" name="phone" placeholder="Phone"/>
          <i className='fas fa-phone-alt'><FaBlenderPhone/></i>
        </div>
        <div className="message">
        <textarea value={message} onChange={handlechange} placeholder="Message" name="message" required></textarea>
        <i className="fas fa-comment-dots"><FaRegCommentDots/></i>
        </div>
        </div>
      <div className="button-area">
        <button type="submit">
          Submit <i className="fa fa-paper-plane"><FaRegPaperPlane/></i></button>
      </div>
    </form>
  </div>
  </div>
</section>

    )
}

export default Contact
