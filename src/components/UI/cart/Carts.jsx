import React from 'react'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../../styles/shopping-cart.css'
const Carts = () => {
    const dispatch = useDispatch();
    const toggleCart = () => {
        console.log(cartUiActions);
        dispatch(cartUiActions.toggle())
    }


    const cartProducts = useSelector(state => state.cart.cartItems)
    return (

        <div className="cart__container">
            <ListGroup className='cart'>
                <div className='cart__close'>
                    <div onClick={toggleCart}><i className="ri-close-fill">w</i>
                    </div>
                </div>
                <div className=" cart__item-list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    }
                </div>
                <div className="cart__bottom">
                    <h6>Subtotal amount:<span>$123</span></h6>
                    <button className='checkout' ><Link to="/checkout" className='checkout'>CheckOut</Link></button>
                </div>
            </ListGroup>
        </div>
    )
}

export default Carts