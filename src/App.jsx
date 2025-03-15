import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import './App.css'
import ProductDetails from './components/ProductDetails'
import NotFound from './components/NotFound404'
import  CartProvider  from './context/CartContext'
import CartComponent from './components/CartComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer/>} />
              <Route exact path='*' element={<NotFound/>}/>
              <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
              <Route exact path="/cart" element={<CartComponent/>} />
              <Route exact path="/product/:id" element={<ProductDetails/>} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
