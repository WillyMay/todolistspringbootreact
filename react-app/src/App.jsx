import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ProductApp from './components/ProductApp'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductApp title={'Productos!'}/>
    </>
  )
}

export default App
