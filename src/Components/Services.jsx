import React from 'react'
import image from '../Images/Vector.png'
import image1 from '../Images/Vector1.png'
import image2 from '../Images/Vector2.png'

export default function Services() {
  return (
    <>
    <div style={{backgroundColor:"#DBF9EC"}} >
    <br />
    <h1 className='App'>Our Services</h1>
    <br />
    <div className="row justify-content-center">
  <div className="col-sm-6 col-md-4 col-lg-3 mt-2" >
    <div className="card" style={{maxWidth:"300px",backgroundColor:"#ECFCF5"}}>
      <div >
        <img src={image} alt="" />
        <h1 className="card-title">Service Example</h1>
        <p className="card-text">Lorem ipsum dolor sit amet. Sed magnam sapiente et soluta obcaecati vel culpa odio</p>
        <br />
        <a href="#">Learn more</a>
      </div>
    </div>
  </div>
   <div className="col-sm-6 col-md-4 col-lg-3 mt-2">
    <div className="card" style={{maxWidth:"300px",backgroundColor:"#ECFCF5"}}>
      <div >
        <img src={image1} alt="" />
        <h1 className="card-title">Service Example</h1>
        <p className="card-text">Lorem ipsum dolor sit amet. Sed magnam sapiente et soluta obcaecati vel culpa odio</p>
        <br />
        <a href="#">Learn more</a>
      </div>
    </div>
  </div>
   <div className="col-sm-6 col-md-4 col-lg-3 mt-2">
    <div className="card" style={{maxWidth:"300px",backgroundColor:"#ECFCF5"}}>
      <div >
        <img src={image2} alt="" />
        <h1 className="card-title">Service Example</h1>
        <p className="card-text">Lorem ipsum dolor sit amet. Sed magnam sapiente et soluta obcaecati vel culpa odio</p>
        <br />
        <a href="#">Learn more</a>
      </div>
    </div>
  </div>
  </div>
  <br />
  <br />
    </div>
    </>
  )
}
