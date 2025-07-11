import React from 'react'
import baner from '../assets/images/boostybites_choco.png'

function ChocolateBanner() {
  return (
    <>
    <div className="relative w-full">
  {/* Background Image */}
  <img
    src={baner}
    alt="boosty bites"
    className="w-full h-auto object-contain object-top z-0 relative"
  />

  {/* Overlay (Positioned absolutely on top of image) */}
  <div className="absolute  z-10"></div>

  {/* Content Section */}
 
</div>
    </>
  )
}

export default ChocolateBanner