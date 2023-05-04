import React from 'react'
import phone from '../Images/phone.png'
import mail from '../Images/mail.png'

export default function ContactUs() {
  return (
    <div style={{backgroundColor:"#6DE9B4"}}>
        <br />
      <div>
        <h1 className='App' style={{color:"#060E81"}}>Contact Us</h1>
        <h1 className='App' style={{fontSize:"56px",color:"white"}}>Get in touch to book your first appointment</h1>
        <br />
        <br />
      </div>
      <div className='d-flex justify-content-evenly'>
      <div className='App'>
        <img src={phone} alt="" width="24px" /> <span style={{color:"white"}}> (123)-456-789 </span>
       </div>
       <div className='App'>
        <img src={mail} alt="" width="24px" /> <span style={{color:"white"}}> Info@example.com</span>
       </div>
       </div>
       <br />
       <div style={{border:'1px solid transparent;',width:"50%",height:"40%",margin:"0px auto",backgroundColor:"white" }}>
       <form action="">
        <br />
        <div style={{display:"flex",flexWrap:"wrap"}} className='justify-content-evenly'>
        <input type="text" style={{height:"30px",borderColor:"#060E81"}} placeholder='First name' name="" id="" />
        <input type="text" style={{height:"30px",borderColor:"#060E81"}} className='mt-1' placeholder='Last name' name="" id="" />
        </div>
        <br />
        <div style={{display:"flex",flexWrap:"wrap"}} className='justify-content-evenly'>
        <input type="number" style={{height:"30px",borderColor:"#060E81"}}  placeholder='Phone No' name="" id="" />
        <input type="email" style={{height:"30px",borderColor:"#060E81"}} className='mt-1' placeholder='Email address' name="" id="" />
        </div>
        <br />
        <div style={{display:"flex",flexWrap:"wrap"}} className='justify-content-evenly'>
          <textarea name="" style={{borderColor:"#060E81"}} placeholder='Type your message here' id="" cols="60" rows="10"></textarea>
        </div>
        <br />
        <div style={{display:"flex",flexWrap:"wrap"}} className='justify-content-evenly'>
          <button style={{backgroundColor:"#060E81",color:"white"}}>Book an Appointment</button>
        </div>
        <br />
        <br />
       </form>
       </div>
       <br />
       <br />
    </div>
  )
}
