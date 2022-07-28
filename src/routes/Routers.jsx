import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AllFoods from '../pages/AllFoods'
import Checkout from '../pages/Checkout'
import FoodDetails from '../pages/FoodDetails'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Carts from '../components/UI/cart/Carts'
import Contact from '../pages/Contact'
import SendToTpCode from '../pages/SendToTpCode'
import NotFound from '../pages/NotFound'
import ModalCo from '../pages/ModalCo'
import VerifyOtpCode from '../pages/VerifyOtpCode'
import { useState } from 'react'
const Routers = () => {

    return (

        <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/foods' element={<AllFoods />} />
            <Route path='/foods/:id' element={<FoodDetails />} />
            <Route path="/cart" element={< Carts />} />
            <Route path='/verifyotpcode' element={<VerifyOtpCode />} />
            <Route path='/chechout' element={<Checkout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/loginm' element={<ModalCo />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/SendTotpCode' element={<SendToTpCode />} />
            <Route path='*' element={<NotFound />} />

        </Routes>
    )
}

export default Routers