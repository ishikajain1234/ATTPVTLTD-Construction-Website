import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './comp/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar></Navbar>
    </>
  )
}

export default App
