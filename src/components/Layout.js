import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import '../css/layout.css'
const Layout = ({ children }) => {
  return (
    <div className="page">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
