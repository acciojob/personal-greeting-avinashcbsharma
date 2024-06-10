import React,{useState} from 'react'
import './../styles/App.css';

const App = () => {
  const [name, SetName] = useState('');
  
  return(
    <div>
      <p>Enter your name:</p>
      <input type='text' style={{padding:"10px"}} value={(name)}
        onChange={e=>SetName(e.target.value )}/>
      {name ? <p>Hello {name}</p> : null}
    </div>
  )
}
export default App
