import React from 'react'

const MainPage = () => {
  return (
    <>
        
            <h1>Панель администратора</h1>
            <div className='main_buttons'>
                <div className='top_buttons'>
                    <button className='main_button'>Создать товар</button>
                    <button className='main_button'>Создать категорию</button>
                    <button className='main_button'>Поиск</button>
                </div>
                {/* <div className='bot_buttons'>
                    <button className='main_button'>...</button>
                    <button className='main_button'>...</button>
                    <button className='main_button'>...</button>
                </div> */}
            </div>
        
    </> 
  )
}

export default MainPage