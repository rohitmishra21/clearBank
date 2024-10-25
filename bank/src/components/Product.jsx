import React, { useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import { GoDash } from "react-icons/go";

const Product = () => {

    const [target, settarget] = useState()

function show(e) {
    settarget(e.target.id);

    
    
}
  return (
   <>
    <div className='h-screen w-full flex px-12 '>
        <div className='py-5 w-1/2 h-full '>
            <div className='flex flex-col gap-16 '>
                <h1 className='text-[1.7rem]'>our product</h1>
                <h1 className='flex items-center gap-2 text-4xl'>01 <span className='opacity-30'><GoDash /></span> <span  className='opacity-30'>03</span></h1>
                <div onMouseEnter={show} className='text-5xl flex flex-col gap-8  '>
                    <h1 id='one'>Accounts</h1>
                    <h1 id='two'>Clearing</h1>
                    <h1 id='three'>Embedded Banking</h1>
                </div>
            </div>
        </div>
        <div className='w-1/2 h-full rounded-[30px] bg-[#EFEFEF]'>
            <div className='h-[70%] flex justify-center items-center'>
                    <video className='w-[60%] object-cover' muted autoPlay loop src="https://clear.bank/uploads/assets/CB_Product_Accounts.webm"></video>
            </div> 
            <div className='px-12 '>
                <h1 className=' text-2xl'>
                Choose the fully regulated accounts that work best for your business and your customers.
                </h1>
                <button className='mt-12 px-6 py-3 items-center gap-2 justify-start flex rounded-full bg-black text-xl text-white'>
                <h1>Get started</h1>
                <GoArrowRight />
                </button>
            </div>
        </div>
    </div>
   </>
  )
}

export default Product