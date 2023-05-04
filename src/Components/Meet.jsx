import React from 'react'
import image from '../Images/Vector.png'
import image1 from '../Images/Vector1.png'
import image2 from '../Images/Vector2.png'
import background from "../Images/Background.png"
import img from "../Images/pexels-tima-miroshnichenko-5407206 1.png"
import arrow from "../Images/f2.png"
import "../App.css"

export default function Meet() {
  return (
    <>
    <div style={{backgroundColor:"#ECFCF5"}} >
    <br />
    <h1 className='App'>Meet Our Team</h1>
    <br />
    <div className="row justify-content-center">
  <div className="col-sm-6 col-md-4 col-lg-3 mt-2 image-container" >
  <img src={img} className="front-image"  alt="" height={194} width={154} />
    <img src={background}  alt="" className="back-image" height={234} width={194} />
  </div>
   <div className="col-sm-6 col-md-4 col-lg-3 mt-2">
    <div  style={{maxWidth:"900px",backgroundColor:"#ECFCF5"}}>
      <div >
        <h1 className="card-title">Dr.Example</h1>
        <p className="card-text">PhD Lorem Ipsum</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button style={{backgroundColor:"#060E81",color:"white"}}>Book an Appointment</button>
      </div>
    </div>
  </div>
   <div className="col-sm-6 col-md-4 col-lg-3 ">
    <div >
    <img src={arrow} alt="" className='marg' />
    </div>
  </div>
  </div>
  <br />
  <br />
    </div>
    </>
  )
}
