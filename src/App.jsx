import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Codes from './pages/Codes'
import Programs from './pages/Programs'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className='mb-16'>

      <Routes>
        <Route path='/' element={<Programs />}></Route>
        <Route path='/programs' element={<Programs />}></Route>
        <Route exact path='/codes' element={<Codes />}></Route>
      </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  )
}
export default App
