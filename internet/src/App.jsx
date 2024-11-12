import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Connection from './Component/Connection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Connection/>
    </>
  )
}

export default App
