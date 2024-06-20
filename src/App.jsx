import React from 'react'
import Login from './Login'
import Register from './Register'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-black h-[100vh] flex justify-center items-center bg-cover'>
      
        <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        </Routes>
      
        
        
    </div>
  )
}

export default App