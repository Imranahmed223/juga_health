import React from 'react'
import Image from '../Images/Rectangle 22.png'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <img src={Image} alt="" width='44px' height='48px' />
    <button className="navbar-toggler" style={{color:"red"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{backgroundColor:"green",borderColor:"blue",color:"white"}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#">Our Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#">Contact Us</a>
        </li>
      </ul>
      <div className="d-flex">
      <button type="button" class="btn btn-success">Book Now</button>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
