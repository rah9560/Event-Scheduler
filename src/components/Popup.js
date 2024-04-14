import React, { useState } from 'react'
import Modal from './Modal'

const Popup = ({day,month,year}) => {
  const [show2,setshow2]=useState(false)

  const myfunction=()=>{
    setshow2(true)
  }

  return (
    <div>
      <div className='md:absolute md:left-[1100px] md:top-40 absolute top-[450px] left-10 '>
       <div className='flex text-xl space-x-5 font-semibold'>
          <p>Day:{day} </p>
          <p> Month: {month}</p>
          <p>Year: {year}</p>
       </div>
       <div className='mt-10 text-lg grid grid-cols-2 gap-5'>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>12:00</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>12:30</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>01:00</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>01:30</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>02:00</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>02:30</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>03:00</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>03:30</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>04:00</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>04:30</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>05:00</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>05:30</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>06:00</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>06:30</button></div>
          <div className='border-slate-950 border-[2px] rounded-xl text-center hover:bg-slate-500 hover:text-white hover:border-none'><button className='cursor-pointer' onClick={myfunction}>07:00</button></div>
       </div>
       {
          show2 && <Modal day={day} month={month} year={year}/>
       }
       
      </div>
    </div>
  )
}

export default Popup