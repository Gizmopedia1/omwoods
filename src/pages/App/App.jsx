// import { useState } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../Home/Home.jsx'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

import './App.scss'

function App() {
  return (
    <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/404" element={<Page404 />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/details/:id" element={<LogementTemplate />} /> */}
          </Routes>
          <Footer />
    </div>

  )
}

export default App