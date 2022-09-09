import React from 'react';
import ModalWindow from './components/ModalWindow';
import CreateItem from './components/CreateItem';


function App() {
  return (
    <div>
        <ModalWindow title='Создание товара'>
          <CreateItem />
        </ModalWindow> 
    </div>
  );

}

export default App;
