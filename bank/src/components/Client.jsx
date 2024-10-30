import React from 'react'

const Client = () => {
  return (
    <div className='h-screen w-full flex  my-12'>
      <div className=' w-1/2 h-full flex justify-center items-center'>
          <div className='bg-gray-800 w-[90vh] rounded-[40px] h-[90vh] bg-cover bg-center bg-[url("https://clear.bank/uploads/images/In-page-images/_868x868_crop_center-center_none/56685/Powered-by-people-3@2x.webp")]'>

          </div>
      </div>
      <div className='px-12 w-1/2 py-12 text-xl h-full'>
              <h1>Powered by people</h1>
              <h1 className='text-6xl font-medium py-6'>Your partner in growth</h1>
              <h1>We understand the pain of dealing with legacy systems, the cost and the risk involved in innovating in the financial services sector. That's why we set up ClearBank. We're built to support you. That means no shared propositions, no customer overlap and no competition. Your growth is our growth.</h1>
      </div> 
    </div>
  )
}

export default Client