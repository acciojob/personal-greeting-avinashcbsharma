import React,{useState} from 'react'
import './../styles/App.css';

const App = () => {
  const [name, SetName] = useState('');
  
  return(
    <>
      <p>Enter your name:</p>
      <input type='text' value={(name)}  onChange={e=>SetName(e.target.value )}/>
      {name ? <p>Hello {name}!</p> : null}
    </>
  )
}
export default App
