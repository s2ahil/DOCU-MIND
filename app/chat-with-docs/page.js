"use client"

import React from 'react'
import FileUpload from '../components/FileUpload'
import Link from 'next/link'
const page = () => {
  return (
    <div className=''>
      <div className='flex  justify-center w-full'>

       <Link href="/" className='cursor-pointer'><div className='text-white text-4xl m-4 hover:text-blue-500 '>Docu-Mind 🧠</div></Link> 
      </div>
      <div className='  p-4 flex  justify-center items-center  '>
        <FileUpload></FileUpload>
      </div>
    </div>
  )
}

export default page