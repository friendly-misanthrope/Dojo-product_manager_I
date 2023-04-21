import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// TODO: stylesheet here


const ProductForm = (props) => {

// State to temporarily store new product data
const [newProduct, setNewProduct] = useState({
  title: '',
  price: '',
  description: ''
})

// State to store back-end validation errors sent back in response to a failed request
const [errors, setErrors] = useState({})

// Destructuring newProduct object
const {title, price, description} = newProduct

// setting up navigation variable
const navigate = useNavigate()

// onChange Synthetic Event handler
const onChangeHandler = (e) => {
  setNewProduct(prevState => {return {...prevState, [e.target.name]: e.target.value}})
}

// onSubmit Synthetic Event handler
const onSubmitHandler = (e) => {
  e.preventDefault()
  // Send POST request to API containing newProduct object
  axios.post('http://172.19.216.246:8000/api/products/new', newProduct)
    .then(() => {
      // On successful resolution, reset 'newProduct' and 'errors' state variables and navigate home to display all products
      setNewProduct({
        title: '',
        price: '',
        description: ''
      })
      setErrors({})
      navigate('/')
    })
    // In case of failed request, set state variable to store returned errors
    .catch(err => setErrors(err.response.data.errors))
}

  return (
    <div className="product-form">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input type="text" className="form-control" name="title" onChange={onChangeHandler} value={title} />
          {
            errors.title ?
            <span className="text-danger">{errors.title.message}</span>
            : null
          }
        </div>
        <div className="form-group">
          <label htmlFor="price">Price: </label>
          <input type="text" className="form-control" name="price" onChange={onChangeHandler} value={price} />
          {
            errors.price ?
            <span className="text-danger">{errors.price.message}</span>
            : null
          }
        </div>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input type="text" className="form-control" name="description" onChange={onChangeHandler} value={description} />
          {
            errors.description ?
            <span className="text-danger">{errors.description.message}</span>
            : null
          }
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ProductForm;