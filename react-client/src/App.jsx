import './App.css';
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import DisplayProducts from './components/DisplayProducts';
import ProductForm from './components/ProductForm'

function App() {

  const [allProducts, setAllProducts] = useState([])

  return (
    <div className="App">
      <h1>Welcome to Product Manager</h1>
      <Link to={'/products/new'}>Add a Product</Link>
      <br />
      <Link to={'/'}>Home</Link>

      <Routes>
        <Route path='/' element={<DisplayProducts allProducts={allProducts} setAllProducts={setAllProducts} />} />
        <Route path='/products/new' element={<ProductForm />} />
      </Routes>
    </div>
  );
}

export default App;