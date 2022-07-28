import React from 'react';
import { useState, useEffect } from 'react';
import Ham from '../assets/images/ham.png';
import '../styles/home.css';
import Cart from './Cart';
import { Container, Row, Col } from 'reactstrap';
import Category from '../components/UI/category/Category';
import { Routes, Route } from 'react-router-dom';
import featureImg01 from '../../src/assets/images/featureImg01.jpg'
import featureImg02 from '../../src/assets/images/featureImg02.jpg'
import featureImg03 from '../../src/assets/images/featureImg03.jpg'
import products from '../assets/fake-data/products.js'
import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'
import ProductCard from '../components/UI/product-card/ProductCard.jsx'
import whyImg from '../assets/images/location.png'
import Search from './Search';
import '../styles/search.css'


// const featureData = [
//     {
//         title: 'Super delivery',
//         imgUrl: featureImg01,
//         desc: 'thi is test '

//     },
//     {
//         title: 'Easy pick',
//         imgUrl: featureImg02,
//         desc: 'thi is test '


//     },
//     {
//         title: 'Quick delivery',
//         imgUrl: featureImg03,
//         desc: 'thi is test '


//     }
// ]



const Home = () => {



    const [category, setCategory] = useState('ALL');
    const [allProducts, setAllProducts] = useState(products);
    const [hotPizza, setHotPizza] = useState([])
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {

        const exist = cartItems.find((x) => x.id === product.id);

        if (exist) {
            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }])
        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);

        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id))
        } else {
            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))

        }

    }


    // const handleAddProduct = (product) => {
    //     const ProductExist = cartItems.find((item) => item.id === product.id);

    //     if (ProductExist) {
    //         setCartItems(cartItems.map((item) => item.id === product.id ?
    //             { ...ProductExist, quantity: ProductExist.quantity + 1 } : item
    //         ));


    //     } else {
    //         setCartItems([...cartItems, { ...product, quantity: 1 }])

    //     }
    // }


    useEffect(() => {

        const filteredPizza = products.filter((item) => item.category === 'Pizza')
        const slicePizza = filteredPizza.slice(0, 4)

        setHotPizza(slicePizza)
    }, [])



    useEffect(() => {
        if (category === 'ALL') {
            setAllProducts(products)
        }
        if (category === 'BURGER') {
            const filteredProducts = products.filter(item => item.category === 'Burger')

            setAllProducts(filteredProducts)
        }
        if (category === 'PIZZA') {
            const filteredProducts = products.filter(item => item.category === 'Pizza')

            setAllProducts(filteredProducts)
        }
        if (category === 'BREAD') {
            const filteredProducts = products.filter(item => item.category === 'Bread')

            setAllProducts(filteredProducts)
        }
    }, [category])

    return (


        <section >
            <div className='homecon'>
                <Row>

                    <Col className='col-12 mainup'>




                        < div className="col-12 mainbar" >

                            <img
                                className='col-6 mainnav'

                                src={Ham} alt="hamburger" />

                            <div className='col-4 searchbtn'>
                                <Search />
                            </div>




                        </div>
                    </Col>
                </Row>
            </div>

            {/* <Container>

                <div className='hero__btns d-flex  align-items-center gap-5 mt-4  '>
                    <button className='order__btn d-flex align-items-center  justify-content-between'>Order now<i class="ri-arrow-right-s-line"></i></button>
                    <button className='all__foods-btn'><Link to='/foods'>See all foods</Link></button>
                </div>
                <Category />





            </Container>
 */}

            {/* <Container>
                <Row>
                    {
                        featureData.map((item, index) => (
                            <Col lg="4" md="4" key={index} className="mt-5">
                                <div className='feature__item text-center p-4'  >
                                    <img src={item.imgUrl} alt="feature-img" className='w-25 mb-3' />
                                    <h5 className='fw-bold'>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container> */}

            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2>Popular foods</h2>
                    </Col>
                    <Col lg='12' style={{ marginTop: "10px" }}>

                        <div lg="12" className='food__category d-flex align-items-center justify-content gap-5'>
                            <button className={`all__btn  `} onClick={() => setCategory('ALL')} >All</button>

                            <button className='d-flex align-items-center gap-2' onClick={() => setCategory('BURGER')}> <img src={foodCategoryImg01} alt="img1" />Burger</button>
                            <button className='d-flex align-items-center gap-2' onClick={() => setCategory('PIZZA')}> <img src={foodCategoryImg02} alt="img2" />Pizza</button>
                            < button className='d-flex align-items-center gap-2' onClick={() => setCategory('BREAD')}> <img src={foodCategoryImg03} alt="img3" />Bread</button>
                        </div>
                    </Col>

                    <Col lg="12"  >
                        <Cart cartItems={cartItems} key={cartItems.id} onRemove={onRemove} onAdd={onAdd}></Cart>
                    </Col>


                    <Col lg="4"  >
                        {
                            products.map((product) => (
                                <ProductCard key={product.id} product={product} onAdd={onAdd} />

                            ))
                        }

                    </Col>


                </Row>
            </Container>




            <Container>
                {/* <Row>
                    <Col lg="12 " className='text-center '  >
                        <h2>HOT Pizza</h2>
                    </Col>
                    {
                        hotPizza.map(item => (
                            <Col lg='3' md='4' key={item.id}  >

                                <ProductCard item={item} />
                            </Col>
                        ))
                    }
                </Row> */}
            </Container>

        </section >



    )
}

export default Home