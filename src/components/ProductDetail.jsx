import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'


  /* Now I need a product id which is passed from the product Page */
const ProductDetail = () => {

  const[cartBtn, setCartBtn] = useState('Add to Cart')
 
    const proid = useParams();
    const proDetail = DATA.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    //i need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product) =>{
      if(cartBtn === "Add to Cart") {
        dispatch(addItem(product))
        setCartBtn("Remove from Cart")
      }
      else{
        dispatch(delItem(product))
        setCartBtn("Add to Cart")
      }

    }

  return (
   <>
    <div className='contaier my-5 py-3'>
      <div className='row'>
        <div className='col-md-6 d-flex justify-content-center mx-auto product'>
          <img src={product.img} alt={product.title} height="500px" />
        </div>

        <div className='col-md-6 d-flex flex-column justify-content-center'>
          <h1 className='display-5 fw-bold'>{product.title}</h1>
          <hr />
          <p className='my-4'>${product.price}</p>
          <p className='lead'>{product.desc}</p>
          <button onClick={()=>handleCart(product)} className='btn btn-outline-primary my-5'>
            {cartBtn}
          </button>
        </div>

      </div>
      
    </div>   

      

   </>
  )
}

export default ProductDetail