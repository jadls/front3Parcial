import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <div className='App'>
        <h2>Elige una mascota</h2>
        <Form/>        
      </div>        
    </>
  )
}

export default App
