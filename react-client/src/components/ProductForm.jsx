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

const [errors, setErrors] = useState({})

const {title, price, description} = newProduct

const navigate = useNavigate()

const onChangeHandler = (e) => {
  setNewProduct(prevState => {return {...prevState, [e.target.name]: e.target.value}})
}

const validateForm = () => {
  if (title.length < 3 || title.length > 48 ||
      price.len < 0 ||
    description.length < 12 || description.length > 384) {
      return false
    }
    return true
}

const onSubmitHandler = (e) => {
  e.preventDefault()

  axios.post('http://172.19.216.246:8000/api/products/new', newProduct)
    .then((res) => {
      // ! REMOVE BEFORE SUBMITTING ASSIGNMENT
      console.log(res.data)
      navigate('/')
    })
    .catch(err => setErrors(err.response.data.errors))

    if (validateForm()) {
      setNewProduct({
        title: '',
        price: '',
        description: ''
      })
      setErrors({})
    }


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