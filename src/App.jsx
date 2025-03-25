import React from 'react'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/homePage/HomePage'
import Footer from './components/footer/Footer'
// import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  return (
    <>
    {/* <Sidebar/> */}
    <Navbar/>
    <HomePage/>
    <Footer/>
    </>
  )
}

export default App
