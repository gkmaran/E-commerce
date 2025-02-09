import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Shopcategory from './pages/Shopcategory'
import Product from './pages/Product'
import Footer from './components/Footer/Footer'
import mens_banner from './components/Assets/banner_mens.png'
import womens_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/mens' element={<Shopcategory banner={mens_banner} category={'men'}/>}/>
        <Route path='/womens' element={<Shopcategory banner={womens_banner} category={'women'}/>}/>
        <Route path='/kids' element={<Shopcategory banner={kids_banner} category={'kid'}/>}/>
        <Route path='/products' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
