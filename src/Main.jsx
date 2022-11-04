import React from 'react'
import { Routes,  Route } from 'react-router-dom';
import App from './App';
import Contacts from './Contacts';
import Footer from './Footer';
import './App.css';
export default function Main() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App/>}/>
          <Route path={"/contact"} element={<Contacts/>}/>
         </Routes>
          <Footer/>
    </div>
  )
}
