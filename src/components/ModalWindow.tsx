import React from 'react'

interface ModalWindowProps{
  children: React.ReactNode
  title: string
}

const ModalWindow = ({children, title}: ModalWindowProps) => {
  return (
    <>
      <div className="modal_window"/>
      
      <div className='modal_window_border'>
        <h1>{title}</h1>

        {children}
      </div>
        
      
    </>
  )
}

export default ModalWindow