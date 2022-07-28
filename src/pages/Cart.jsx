import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap'

const Cart = () => {
    return (
        <Container>
            <Row>


                <Col lg='12'>

                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th> ProductTitle</th>
                                <th> Price </th>
                                <th> Quantity </th>
                                <th> Delete </th>



                            </tr>
                        </thead>
                    </table>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart