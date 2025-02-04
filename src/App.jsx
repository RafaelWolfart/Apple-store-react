import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Nav from './components/Nav'
import CartWidget from './components/CartWidget'
import './App.css'
import ProductDetails from './components/ProductDetails'


function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:catId" element={<ItemListContainer/>} />
        <Route exact path="/cartWidget" element={<CartWidget/>} />
        <Route exact path="/product/:id" element={<ProductDetails/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
