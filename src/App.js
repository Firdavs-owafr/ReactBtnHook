import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [counter, setcounter] = useState(0)
  
  const dec = () => {
    if(counter < 10){
      setcounter(prev => counter + 1)
    } else {
      setcounter( 0)
    }
  }

  const inc = () => {
    if(counter > -10){
      setcounter(prev => counter - 1)
    } else {
      setcounter(0)
    }
  }

  const rest = () => {
    setcounter(prev => 0)
  }

  const rand = () => {
      setcounter(Math.floor(Math.random() * 10) * - 1 + Math.floor(Math.random() * 10  ) )
  }

  return (
    <div className="wrapper ">
          <div style={{fontSize: '20px',textAlign: 'center'}}>{counter}</div>
          <button onClick={dec} className='btn btn-outline-primary' style={{marginRight:'10px'}}>Dec</button>
          <button onClick={inc} className='btn btn-outline-primary' style={{marginRight:'10px'}}>Inc</button>
          <button onClick={rest} className='btn btn-outline-primary' style={{marginRight:'10px'}}>Rest</button>
          <button onClick={rand} className='btn btn-outline-primary'>Rand</button>
    </div>
  )
}

// prev => counter + 1