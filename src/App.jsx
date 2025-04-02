import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import Navbar from './components/Navbar';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     <Navbar2 />
      
      <Routes>
        <Route path="/home" element={<Navbar2 />} />
        
      </Routes>
    </div>
    <div>
     
    </div>
    </>
  )
}

export default App
