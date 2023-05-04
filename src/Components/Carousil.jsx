import React from 'react'
import Image1 from '../Images/pexels-shvets-production-7176297 1.png'

export default function Carousil() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Image1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption capt">
        <h3>Hero Text Example</h3>
        <h5>Sub-text Example</h5>
        <button type="button" className="btn btn-success">Book an Appointment</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Image1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption capt">
        <h3>Hero Text Example</h3>
        <h5>Sub-text Example</h5>
        <button type="button" className="btn btn-success">Book an Appointment</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Image1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption capt">
        <h3>Hero Text Example</h3>
        <h5>Sub-text Example</h5>
        <button type="button" className="btn btn-success">Book an Appointment</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
