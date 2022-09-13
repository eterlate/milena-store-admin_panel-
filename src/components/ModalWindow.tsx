import React, { useEffect, useState } from 'react'
import CreateItem from './CreateItem'


const ModalWindow = () => {
  const [hide,setHide] = useState(false)
  
  useEffect(()=>{
    
  })

  if(hide){
    return <></>
  }
  return (
    <>
      <div className="modal_window"/>
      
      <div className='modal_window_border'>
        <h1></h1>

        <CreateItem setHide={setHide}/>
      </div>
        
      
    </>
  )
}

export default ModalWindow