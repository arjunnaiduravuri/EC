import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fakestore from './components/fakestore.jsx'
import Cartitems from './components/cartitems.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <div className='home'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Fakestore/>}/>
      <Route path='/cartitems' element={<Cartitems/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
