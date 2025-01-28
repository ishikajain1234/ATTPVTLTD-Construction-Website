import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './comp/navbar'
import Footer from './comp/Footer'
import HeroSection from './comp/HeroSection'
import About from './comp/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar></Navbar>
       <HeroSection></HeroSection>
          <About></About>
       <Footer></Footer>
    </>
  )
}

export default App
