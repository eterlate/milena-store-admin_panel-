import React,{useState} from 'react';
import ModalWindow from './components/ModalWindow';
import CreateItem from './components/CreateItem';
import MainPage from './components/MainPage';

function App() {

  
  return (
    <div>
      <MainPage/>
        <ModalWindow/>
    </div>
  );

}

export default App;
