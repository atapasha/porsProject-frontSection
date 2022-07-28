import React from 'react'
import '../styles/sendtotpcode.css'
import { Link } from 'react-router-dom'







const SendToTpCode = () => {
    return (
        <div className='sendtotp'>
            <div dir='rtl'>
                <form className='sendform' asp-antiforgery="true" asp-controller="Account" asp-action="SendTotpCode" method="post">
                    <div asp-validation-summary="ModelOnly"></div>
                    {/* @if (TempData["SendTotpCodeErrorMessage"] != null)
                {
                    <div className="text-danger">@TempData["SendTotpCodeErrorMessage"].ToString()</div>
                } */}

                    <label asp-for="PhoneNumber" className="number">شماره موبایل</label>
                    <div className="col-md-10">
                        <input asp-for="PhoneNumber" className="form-control pr-30" />
                        <span asp-validation-for="PhoneNumber" className="text-danger"></span>
                    </div>

                    <button type="submit" className="sendbtn"><Link to='/verifyotpcode'>ارسال </Link></button>
                </form>
            </div></div>
    )
}

export default SendToTpCode