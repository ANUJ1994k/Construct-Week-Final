import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router';
import Home from './components/Home/Home';
import LoginSignup from './pages/LoginSignup'





function App() {

  return (
    <>
   
      <BrowserRouter>
      <Navbar/>
      <Home/>
      {/* <Routes>
        <Route path='/' element={<LoginSignup/>}>
        <Route path="/signin" element={<LoginSignup />} />

        </Route>
      </Routes> */}
      <Footer/>
      
      </BrowserRouter>

    </>
  )
}

export default App
