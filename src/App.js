import { useState } from 'react';
import './App.css';

function App() {
  const [message,updateData]=useState('Enter Text Here');

  const functionality = event =>{
    updateData(event.target.value)
  }
  const upperCase=()=>{
    updateData(message.toUpperCase())
  }
  return (
    <div className="App">
        <div className='wrapper'>
          <textarea rows='5' value={message} onChange={functionality}></textarea>
          <button className='btn btn-primary' onClick={upperCase}>convert to uppercase</button>
        </div>
    </div>
  );
}

export default App;
