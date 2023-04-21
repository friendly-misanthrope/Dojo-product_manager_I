import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// TODO: stylesheet here


const ProductForm = (props) => {

const [newProduct, setNewProduct] = useState({
  title: '',
  price: '',
  description: ''
})

const {title, price, description} = newProduct

const navigate = useNavigate()

const onChangeHandler = (e) => {
  setNewProduct(prevState => {return {...prevState, [e.target.name]: e.target.value}})
}

  return (
    <div className="product-form">
      <form>
        <div className="form-group">
          <label for="title">Title: </label>
          <input type="text" className="form-control" name="title" onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label for="price">Price: </label>
          <input type="text" className="form-control" name="price" onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label for="description">Description: </label>
          <input type="text" className="form-control" name="description" onChange={onChangeHandler} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ProductForm;