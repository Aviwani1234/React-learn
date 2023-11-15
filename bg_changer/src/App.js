import { useState } from 'react';
import './App.css';

function App() {

  const [bgColor, setbgColor] = useState('violet')

  function to_Violet()
  {
    setbgColor('red')
  }
  return (
    <div style={{ bgColor }}>
      <div className='btn-container'>
        <button className='btn violet' onClick={to_Violet}>Violet</button>
        <button className='btn indigo'>Indigo</button>
        <button className='btn blue'>Blue</button>
        <button className='btn green'>Green</button>
        <button className='btn yellow'>Yellow</button>
        <button className='btn orange'>Orange</button>
        <button className='btn red'>Red</button>
      </div>
    </div>
  );
}

export default App;
