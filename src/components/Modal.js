import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook,faGem,faBomb,faHeadphones,faPeopleGroup,faLaptopCode,faRainbow,faFaceSmileWink,faPlaneDeparture,faBowlingBall,faCarrot,faQuestion,faPeopleRobbery,faPeopleLine } from '@fortawesome/free-solid-svg-icons'
import Scheduled from './Scheduled'




const Modal = ({day,month,year}) => {
  const [show3,setshow3]=useState(false)
  const [show4,setshow4]=useState(true)
  const [fullname,setfullname]=useState("")
  const [email,setemail]=useState("")
  const handlesubmit=(e)=>{
    e.preventDefault();
      setshow3(true)
      setshow4(false)
      setfullname(e.target.fullname.value)
      setemail(e.target.email.value)
  }
  return (
    <div>
        <div hidden={show3} className='md:absolute z-10 bg-slate-300 md:h-[450px] md:w-[900px] md:left-[-700px] md:top-[50px] rounded-3xl overflow-y-scroll absolute w-[300px] h-[450px] mt-5'>
            <div >
            <form action="" onSubmit={(e)=>{handlesubmit(e)}}>
                <h1 className='md:absolute md:left-44 text-2xl font-semibold absolute left-5 top-5'>Enter Details</h1>
                <div className='flex flex-col'>
               <div className='md:absolute md:left-56 flex flex-col top-16 font-sans absolute left-5'>
               Name:
                <input name='fullname' className='w-52 rounded-lg' type='text' placeholder=' Enter your name'/>
                Email:
                <input  name='email' className='w-52 rounded-lg' type="email" placeholder=' Enter your email' />
               </div>
                <div className='md:absolute md:left-64 top-52 absolute left-5'>
                <p>I want this sceduler to work for:</p><br />
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faCarrot} bounce /> Myself </div>
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faPeopleRobbery} bounce /> 10 people </div>
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faPeopleLine} bounce /> 10-50 people </div>
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faPeopleGroup} bounce /> 50 people + </div>
                <p className='mt-10'>You are more about: </p><br />
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faPlaneDeparture} bounce />Leadership</div>
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faBowlingBall} bounce />Consulting</div>
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faFaceSmileWink} bounce />Product Management</div>
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faRainbow} bounce />Design</div>
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faLaptopCode} bounce />Engineering</div>
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faHeadphones} bounce />Sales</div>
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faBomb} bounce />Marketting</div>
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faGem} bounce />Human Resources</div>
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faBook} bounce />Education</div>
                  <div><input type="checkbox"/><FontAwesomeIcon icon={faQuestion} bounce />Something Else</div>
                <p className='mt-10'>Please share anything that will help prepare for our meeting</p>
                  <div><input type="text" className='md:w-96 md:h-36 mt-4 w-64 h-40 rounded-2xl'/></div>
                  <input type="submit" value="Schedule" className=' md:mt-5 md:mb-5 p-5 md:ml-32 cursor-pointer ml-20 hover:bg-slate-600 hover:rounded-lg'  />
                </div>
                </div>
                               
            </form>
            </div>
        </div>
        <div hidden={show4}>
          <Scheduled
           name={fullname}
           email={email}
           day={day} month={month} year={year}
           />
        </div>
    </div>
  )
}

export default Modal