import { Button } from 'flowbite-react'
import React from 'react'
import { getAllProducts } from './services/productApi'

function App() {
  getAllProducts();
  return (
    <div>
      <h1 className='font-bold text-3xl'>My App</h1>
    </div>
  )
}

export default App
