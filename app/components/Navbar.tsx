



import React from 'react'
import Link from 'next/link'

const Navbar = () => {

  
  return (
    <>
    <div className=' fixed top-0 right-0 h-[70px] w-full bg-pink-500 grid bg-opacity-0  '>
    <ul className=' h-full w-full grid grid-flow-col justify-end gap-14 px-[3%] place-items-center  '>
        <li>
            <Link href="/pages/splash">splash</Link>
          </li>
          <li>
            <Link href="/pages/home">Home</Link>
          </li>
          <li>
            <Link href="/pages/about">About Us</Link>
          </li>
          <li>
            <Link href="/pages/contact">contact</Link>
          </li>
        </ul>
    </div>
    </>
  )
}

export default Navbar