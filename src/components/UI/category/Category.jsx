import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import categoryImg01 from '../../../assets/images/categoryImg01.jpg'
import categoryImg02 from '../../../assets/images/categoryImg02.jpg'
import categoryImg03 from '../../../assets/images/categoryImg03.jpg'
import categoryImg04 from '../../../assets/images/categoryImg04.jpg'


const categoryData = [
    {
        display: 'FastFood',
        imgUrl: categoryImg01
    },
    {
        display: 'Pizza',
        imgUrl: categoryImg02
    },
    {
        display: 'Asian Food',
        imgUrl: categoryImg03
    },
    {
        display: 'Row Meat',
        imgUrl: categoryImg04
    },






]


const Category = (props) => {
    <div>salam</div>
    console.log(props)
    return (<Container>

        <Row>

            {
                categoryData.map((item, index) => (
                    <Col lg='3' md='4' >


                        <div className="category__item d-flex align-items-center  justify-content-between " >
                            <div className="category__img">
                                <img src={item.imgUrl} alt="test" />
                            </div>
                            <h5>{item.display}</h5>

                        </div>
                    </Col>
                ))
            }


        </Row>

    </Container >)


}

export default Category