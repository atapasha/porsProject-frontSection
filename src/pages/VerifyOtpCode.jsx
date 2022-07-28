import React, { useState } from "react";

import '../styles/verifyotpcode.css'

const VerifyOtpCode = () => {
    //totp code is 6 digits
    const [otp, setOtp] = useState(new Array(1).fill(""));
    //please use controlled component
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
            <div className="verifyotp">

                <div className="col ">
                    <div className="col text-center ">
                        <p>کد دریافتی را وارد کنید</p>

                        {otp.map((data, index) => {
                            return (
                                <input
                                    className="otp-field"
                                    type="text"
                                    name="otp"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            );
                        })}

                        <p>کد وارد شده - {otp.join("")}</p>
                        <p>
                            <button
                                className="verifybtn mr-2"
                                onClick={e => setOtp([...otp.map(v => "")])}
                            >
                                پاک کردن
                            </button>
                            <button
                                className="successbtn"
                                onClick={e =>
                                    alert("Entered OTP is " + otp.join(""))
                                }
                            >
                                تایید کد
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifyOtpCode;
//your code is inteligent now  (-:
//thanks mr pasha