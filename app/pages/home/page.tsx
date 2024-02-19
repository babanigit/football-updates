


import Navbar from '@/app/components/Navbar'
import Greeting from '@/app/pages/home/Greeting'
import Greeting2 from '@/app/pages/home/Greeting2'
import React from 'react'

const Home = () => {
  return (
    <>
    <div className='  h-screen w-full'>
        <div> <Navbar/>  </div>
        <div> <Greeting/></div>
        <div><Greeting2 /></div>


    </div>
    
    </>
  )
}

export default Home