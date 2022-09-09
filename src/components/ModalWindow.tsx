import React from 'react'

interface ModalWindowProps{
  children: React.ReactNode
  title: string
}

const ModalWindow = ({children, title}: ModalWindowProps) => {
  return (
    <div style={{width: '500px', height:'200px', border: '2px solid black'}}>
      <h1>{title}</h1>

      {children}


    </div>
  )
}

export default ModalWindow