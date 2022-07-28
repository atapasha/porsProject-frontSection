import React from 'react'
import productImg from '../../../assets/images/product1.jpg'
import { Link } from "react-router-dom"
import '../../../styles/product-card.css';
import { useDispatch } from 'react-redux';
import Cart from '../../../pages/Cart';
import { cartActions } from '../../../store/shopping-cart/cartSlice';
import products from '../../../assets/fake-data/products';
const ProductCard = (props) => {

    console.log('propppppppppppppppppppppppppppppppppps======', props);
    const { id, title, image01, price } = props.product

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price

        }));
    }

    return (
        <>


            < div key={id} className='product__item' style={{ marginButton: "10px" }}>

                < div className="product__img" >
                    <img src={image01} alt="product-img" className='w-100' />
                </div >


                < div className="product__content" >
                    <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                    <div className='d-flex align-items-center justify-content-between '>
                        <span className='product__price'>{price}</span>
                    </div>
                    <button className="addToCart__btn" onClick={addToCart}>Add to Cart</button>
                </div >


            </div >







        </>
    )


}

export default ProductCard