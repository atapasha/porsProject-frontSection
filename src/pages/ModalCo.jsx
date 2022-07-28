import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import '../styles/login.css'
import '../styles/modalco.css'
const ModalCo = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <button className='loginBtn ' onClick={() => setModalIsOpen(true)}>Login </button>

            <Modal

                backdrop={false} data-backdrop="static"




                isOpen={modalIsOpen}  >

                <div className='row d-flex justify-content-center '>

                    <div className='colection'>
                        <button className='modalclosebtn' onClick={() => setModalIsOpen(false)}><i className="ri-close-line"></i>

                        </button>
                    </div>
                    <div className=' d-flex justify-content-center'>


                        <div>
                            <form action='#' className='form' asp-controller="Account" asp-action="Login" asp-antiforgery="true" asp-route-returnUrl="@ViewData['returnUrl']" method="post">


                                <div asp-validation-summary="ModelOnly"></div>
                                {/* 
                                    @if (ViewData["ErrorMessage"] != null)
                                    {
                                        <div className="text-danger">@ViewData["ErrorMessage"]</div>
                                    } */}


                                <div className="col-12 form__group  " >


                                    <input asp-for="UserName" className="form-control  " />
                                    <label asp-for="UserName" className="col-lg-2  ml-5 ">نام</label>

                                    <span asp-validation-for="UserName" className="text-danger"></span>
                                </div>


                                <div className="col-12 mt-5 form__group">

                                    <input asp-for="Password" className="form-control" />
                                    <label asp-for="Password" className="col-lg-2">پسورد</label>

                                    <span asp-validation-for="Password" className="text-danger"></span>
                                </div>
                                <button type='submit' className='loginBtn'>ورود</button>


                                <label>
                                    <input type="checkbox" checked="checked" name="remember" /> بخاطر بسپار
                                </label>


                            </form>

                            <Link onClick={() => { setModalIsOpen(false) }} asp-action="SendTotpCode" to='/SendTotpCode'> ورود با شماره موبایل</Link><br />
                            <Link asp-action="ForgotPassword" to='/register'>رمزعبور خود را فراموش کردید؟</Link>
                        </div>





                        {/* <form >
                            <div>Login Form</div>
                            <div class="form-outline mb-4">
                                <input type="email" id="form2Example1" 543e"form-control" />
                                <label class="form-label" for="form2Example1">Email address</label>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="password" id="form2Example2" class="form-control" />
                                <label class="form-label" for="form2Example2">Password</label>
                            </div>

                            <div class="row mb-4">
                                <div class="col d-flex justify-content-center">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                                    </div>
                                </div>

                                <div class="col">
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

                            <div class="text-center">
                                <p>Not a member? <a href="#!">Register</a></p>
                                <p>or sign up with:</p>
                                <button type="button" class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-google"></i>
                                </button>

                                <button type="button" class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-twitter"></i>
                                </button>

                                <button type="button" class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-github"></i>
                                </button>
                            </div>
                        </form> */}
                    </div>
                </div>



            </Modal >

        </div >
    )
}

export default ModalCo