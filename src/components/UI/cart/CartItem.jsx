import React from 'react'
import { ListGroupItem } from 'reactstrap'
import productImg from '../../../assets/images/product_01.1.jpg'
import '../../../styles/cart-item.css'

const CartItem = ({ item }) => {
    const { id, title, image01, quantity, totalPrice } = item
    return <ListGroupItem className='border-0'>
        <div className="cart__item-info d-flex gap-2">
            <img src={productImg} alt="product-img" />
            <div className='cart__product-info d-flex align-items-center  w-100 gap-4 justify-content-between'>
                <div>
                    <h6 className='cart__product-title'>
                        {title} </h6>
                    <p className='d-flex align-items-center gap-5  cart__product-price'>{quantity}<div>{totalPrice}</div></p>
                    <div className='d-flex align-items-center gap-3 increase__decrease-btn justify-content-between'>
                        <div className='increse-btn'>
                            <i className="ri-add-line"></i>
                        </div>
                        <span>{quantity}</span>
                        <div className='decrese-btn'>
                            <i className="ri-subtract-line"></i>
                        </div>
                    </div>
                </div>
                <div className='delete__btn'>
                    <i className="ri-close-line"></i>

                </div>
            </div>
        </div>

    </ListGroupItem>
}

export default CartItem