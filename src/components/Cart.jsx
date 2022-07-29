import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {delItem} from '../redux/actions/index'


const Cart = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) =>{
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
                <div className='container'>
                    <button onClick={()=>handleClose(cartItem)}className='btn-close float-end' aria-label="close"></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItem.img} alt={cartItem.title} height="280px" width="250px"/>
                        </div>
                        <div className=' col-md-4'>
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return(
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className='container py-4'>
                    <div className='container'>
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    const button = () =>{
        return(
            <div className='container'>
                <div className='row'>
                    <Link to="/checkout" className='btn btn-outline-primary mb-5 w-25'>Proceed To Checkout</Link>
                </div>
            </div>
        )
    }
   return (
    <>
        {state.length ===0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
    
    </>
  )
}

export default Cart