import React,{useState} from 'react';
import ModalWindow from './components/ModalWindow';
import CreateItem from './components/CreateItem';
import MainPage from './components/MainPage';

function App() {
  // const [modal, setModal] = useState(false)
  
  return (
    <div>
      <MainPage/>
        <ModalWindow/>
    </div>
  );

}

export default App;
