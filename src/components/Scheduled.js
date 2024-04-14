import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck,faUser,faEnvelope,faCalendarDays} from "@fortawesome/free-solid-svg-icons"

const Scheduled = ({name,email,day,month,year}) => {
  return (
    <div>
        <div className='bg-slate-500 md:h-52 md:w-[520px] z-10 md:absolute md:left-[-480px] md:top-[150px] rounded-lg absolute top-5 left-5'>
          <div className='flex mr-10'>
          <FontAwesomeIcon icon={faCircleCheck} beat className='h-10 ml-10 mt-5 md:ml-40 md:mt-5'/>
          <p className='md:mt-7 md:ml-5 mt-7 ml-5 font-semibold'>You are Scheduled</p>
          </div>
          <div className='md:ml-48 md:mt-10 ml-20 mt-20 mb-10 font-semibold'>
            <FontAwesomeIcon icon={faUser} /><p className='mt-[-25px] ml-8'> {name}</p>
            <FontAwesomeIcon icon={faEnvelope} /> <p className='mt-[-25px] ml-8'> {email}</p>
            <FontAwesomeIcon icon={faCalendarDays} /><p className='mt-[-25px] ml-8'> {day},{month},{year}</p>
          </div>
        </div>
    </div>
  )
}

export default Scheduled