

import Navbar from '@/app/components/Navbar'
import React from 'react'
import About from './About'

const page = () => {
  return (
    <>
      <div>
        <div> <Navbar /></div>
        <div><About/></div>
      </div>
    </>
  )
}

export default page