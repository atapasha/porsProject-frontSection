import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css'

const Login = () => {
    return (
        <Helmet >
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className='loginForm' dir='rtl'>

                            <div>
                                <form action='#' className='form' asp-controller="Account" asp-action="Login" asp-antiforgery="true" asp-route-returnUrl="@ViewData['returnUrl']" method="post">


                                    <div asp-validation-summary="ModelOnly"></div>
                                    {/* 
                                    @if (ViewData["ErrorMessage"] != null)
                                    {
                                        <div className="text-danger">@ViewData["ErrorMessage"]</div>
                                    } */}


                                    <div className="col-12 form__group" >


                                        <label asp-for="UserName" className="col-lg-2  mr-5">نام</label>
                                        <input asp-for="UserName" className="form-control " />

                                        <span asp-validation-for="UserName" className="text-danger"></span>
                                    </div>


                                    <div className="col-12 mt-5 form__group">
                                        <label asp-for="Password" className="col-lg-2">پسورد</label>

                                        <input asp-for="Password" className="form-control" />
                                        <span asp-validation-for="Password" className="text-danger"></span>
                                    </div>
                                    <button type='submit' className='loginBtn'>ورود</button>


                                    <label>
                                        <input type="checkbox" checked="checked" name="remember" /> بخاطر بسپار
                                    </label>


                                </form>

                                <Link asp-action="SendTotpCode" to='/SendTotpCode'> ورود با شماره موبایل</Link><br />
                                <Link asp-action="ForgotPassword" to='/register'>رمزعبور خود را فراموش کردید؟</Link>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section >

        </Helmet >
    )
}
export default Login