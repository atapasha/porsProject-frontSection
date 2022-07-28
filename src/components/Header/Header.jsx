import React from 'react'
import { Container } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/hlogo.jpg'
import 'remixicon/fonts/remixicon.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'
import '../../styles/header.css'
import ModalCo from '../../pages/ModalCo'
import Cart from '../../pages/Cart'
import Carts from '../UI/cart/Carts'

const nav__links = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Foods',
        path: '/foods'
    },
    {
        display: 'Cart',
        path: '/cart'
    },
    {
        display: 'Contact',
        path: '/contact'
    },

    {
        display: 'Register',
        path: '/Register'
    },


]


const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const dispatch = useDispatch()

    const toggleCart = () => {
        console.log(cartUiActions);
        dispatch(cartUiActions.toggle())
        // window.location = '/cart'
    }

    return (
        <header className='header'>
            <Container>
                <div className="nav__wrapper d-flex  justify-content-between align-items-center">


                    <div className="logo">

                        <img className='img' src={logo} alt="logo" />
                    </div>

                    <div className="navigation ">
                        <div className="menu d-flex align-items-center gap-5">

                            {
                                nav__links.map((item, index) => (
                                    <NavLink to={item.path} key={index}

                                        className={navClass => navClass.isActive ? 'active__menu' : ''}
                                    >{item.display}</NavLink>
                                ))
                            }
                            <ModalCo />


                        </div>



                    </div>



                    { /*nav right icons*/}
                    <div className='cart__icon' >
                        <Link to='/cart'>
                            <i className='ri-shopping-basket-line' onClick={toggleCart} />
                        </Link>
                        <div className='cart__badge'>{totalQuantity}</div>
                    </div>
                </div>

            </Container>
        </header >



    )
}


export default Header