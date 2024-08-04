import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import ProductsContextProvider from './context/ProductsContextProvider'
import ItemPage from './pages/ItemPage/ItemPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <ProductsContextProvider>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/:id' element={<ItemPage />} />
        </Routes>
      </ProductsContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
