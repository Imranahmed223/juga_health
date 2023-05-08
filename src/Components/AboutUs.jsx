import React from 'react'
import IMG from '../Images/pexels-cottonbro-4098232 1.png'

export default function AboutUs() {
  return (
    <>
    <div className='bg-success'>
        <br />
    <div className="container">
  <div className="row mx-auto">
    <div className="col-lg-6 col-md-6 col-sm-12 App">
      <img src={IMG} alt="" height="328px" width="328px"/>
    </div>
    <div className="col">
        <h1 style={{color:"white"}}>About Us</h1>
        <h4 style={{color:"white",fontFamily:"sans-serif"}}>Get to know us</h4>
        <p style={{color:"white"}}>Lorem ipsum dolor sit amet. Sed magnam sapiente et soluta obcaecati vel culpa odio. Sed enim blanditiis cum repellendus repellendus aut fugit reprehenderit et placeat iure id quae necessitatibus aut assumenda dolores.

Est quis labore id voluptatem voluptate qui fuga autem est omnis aperiam ea eligendi quia vel suscipit recusandae. Ut autem nihil ea iure assumenda est quibusdam dolores eos nobis iure.</p>
<button style={{backgroundColor:"#74DD66",width:"347px",height:"64px",boxSizing:"border-box",backdropFilter:"blur(2px)"}}>Read More</button>
    </div>
  </div>
</div>
<br />
</div>
    </>
  )
}
