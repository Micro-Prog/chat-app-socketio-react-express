import React from 'react'
import assets from "@/lib/assets/assets"


const SideBar = () => {
  return (
    <div className='pb-5'>
      <div className='flex justify-between items-center'>
        <img src={assets.logo} alt="logo" className='max-w-40'/>
      </div>
    </div>
  )
}

export default SideBar
