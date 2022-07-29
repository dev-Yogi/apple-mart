import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
  //get a state of addItems
  //write the name of the file no the function
  const state = useSelector((state) => state.addItem)
  return (
    <>
      <Link to="/cart" className='btn btn-outline-primary ms-2'>
        <span className='fa fa-shopping-cart me-1'></span>

        Cart ({state.length})
      </Link>
    </>
  )
}

export default CartBtn