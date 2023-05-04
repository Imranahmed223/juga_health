import React from 'react'
import Reactangular from "../Images/Rectangle 34.png"
import quote from "../Images/Quote.png"
import empty from "../Images/Empty.png"
import { useState, useEffect } from 'react'

export default function Quote() {
    const [isOverflow, setIsOverflow] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 894) { // adjust the screen width breakpoint as needed
            setIsOverflow(true);
          } else {
            setIsOverflow(false);
          }
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  return (
    <>
    <br />
    <br />
    <div className='d-flex justify-content-center'>
    <div>
      <img src={Reactangular} alt="" width="14" height="197" />
    </div>
    <div style={{maxWidth:"50%"}}>
        <div>
            <img src={quote} alt="" />
        </div>
        <div>
        <div className={`container ${isOverflow ? 'scroll-y' : ''}`}>
            <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <p>-Mr. Example,</p>
        </div>
    </div>
    <div>
        <img src={empty} alt="" height="197" width="197" />
    </div>
    </div>
    <br />
    <br />
    </>
  )
}
