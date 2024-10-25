import React from 'react'

const Vidio = () => {
  return (
    <div className='h-[80vh] rounded-t-[50px] mt-10 bg-orange-700 overflow-hidden'>
        <video src="https://clear.bank/uploads/assets/CB_Homepage_H264_3-1_v03.mp4" autoPlay muted loop className='w-full h-full object-cover'></video>
    </div>
  )
}

export default Vidio