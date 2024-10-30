import React from 'react'

const ClearBank = () => {
  return (
    <div className='h-screen  flex w-full '>
      <div className='w-1/2 px-14 h-full '>
          <h1 className='text-6xl py-6'>Why choose <br /> ClearBank</h1>
          <h1 className='text-3xl'>Financial technology with a banking licence, and expert guidance</h1>
      </div>
      <div className='w-1/2 h-full flex flex-col gap-24'>
         <div className='px-5'>
            <img src="https://clear.bank/uploads/Icons/5.svg" alt="" />
            <h1 className='text-5xl py-5'>Cloud-based API</h1>
            <h1 className='text-xl'>Our cloud-based systems make opening and managing accounts easy and let you clear payments in real-time. Bank better, work smarter and grow faster.</h1>
         </div>
         <div className='px-5'>
            <img src="https://clear.bank/uploads/Icons/PoweredbyPeople.svg" alt="" />
            <h1 className='text-5xl py-5'>Powered by people</h1>
            <h1 className='text-xl'>You'll get a dedicated relationship manager who understands your business and knows your industry inside out. Backed by a team of specialists, we're always on hand to offer solutions and support.


            </h1>
         </div>
         <div className='px-5'>
            <img src="https://clear.bank/uploads/Icons/SafeHereTo-Stay.svg" alt="" />
            <h1 className='text-5xl py-5'>Safe and here to stay</h1>
            <h1 className='text-xl'>ClearBank is a fully regulated bank in both the United Kingdom and Europe, meaning we hold funds securely at the Bank of England and the European Central Bank.
            </h1>
         </div>
      </div>
    </div>
  )
}

export default ClearBank