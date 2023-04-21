import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// TODO: stylesheet here


const ProductForm = (props) => {

  return (
    <div className="product-form">
      <form>
        <div className="form-group">
          <label for="title">Title: </label>
          <input type="text" className="form-control" name="title" />
        </div>
        <div className="form-group">
          <label for="price">Price: </label>
          <input type="text" className="form-control" name="price" />
        </div>
        <div className="form-group">
          <label for="description">Description: </label>
          <input type="text" className="form-control" name="description" />
        </div>
      </form>
    </div>
  );
}

export default ProductForm;