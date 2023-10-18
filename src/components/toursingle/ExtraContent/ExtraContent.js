import React from 'react';
import { Collapse } from 'react-collapse';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const ExtraContent= ({open, toggle, title, desc }) => {
  return (
   
    <div className='pt-[3px]'>
    <div className='container'>
    <div className='bg-blue-800 py-[15px] px-[0px]  flex justify-between items-center cursor-pointer'
    onClick={toggle}>
        <p className='md:text-[22px] text-white font-semibold pl-5 '>{title}</p>
        <div className='text-[30px] text-white pr-5'>
            {open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
        </div>
    </div>
    <Collapse isOpened={open}>
        <div className='bg-white px-[50px] pb-[20px]'>{desc}</div>
    </Collapse>
    </div>
 </div>
   
  )
}

export default ExtraContent