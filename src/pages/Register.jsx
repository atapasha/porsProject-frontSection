import React from 'react'
import '../styles/formInput.css'
import { useState } from 'react'
import FormInput from './FormInput.jsx'

const Register = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "نام کاربری باید 3 تا 16 کاراکتر باشد و شامل هیچ کاراکتر خاصی نباشد!",
            label: "نام",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "باید یک آدرس ایمیل معتبر باشد!",
            label: "ایمیل",
            required: true,
        },


        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                " رمز عبور باید 8 تا 20 کاراکتر باشد و حداقل شامل 1 حرف، 1 عدد و 1 کاراکتر خاص باشد.!",
            label: "پسورد",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "گذرواژه ها مطابقت ندارند !",
            label: "تطابق پسورد ",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className='col'>
            <form className="RegisterForm" onSubmit={handleSubmit}>
                <h1>فرم ثبت نام</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button className='RegisterBtn'>ثبت نام</button>
            </form>
        </div>
    );
};


// <section>
//     <Container className='registerbtn'>
//         <Row >
//             <Col lg="6" md="6" sm="12" className='RegisterForm ' dir='rtl'>

//                 <div >
//                     <form action='#' className='form' method="post">
//                         <div asp-validation-summary="ModelOnly"></div>


//                         <div asp-validation-summary="ModelOnly"></div>



//                         <label asp-for="UserName" className="col-md-2 control-label">نام</label>
//                         <div className="col-md-10 form__group" >
//                             <input
//                                 asp-for="UserName"
//                                 className='form-control'

//                                 type='text'
//                                 placeholder="UserName"
//                                 required
//                             />
//                             <span asp-validation-for="UserName" className="text-danger"></span>
//                         </div>




//                         <label asp-for="Email" className="col-md-2 control-label">ایمیل</label>

//                         <div className="col-md-10 form__group" >
//                             <input
//                                 asp-for="Email"
//                                 className='form-control'
//                                 type='email'
//                                 placeholder="Email"
//                                 required
//                             />
//                             <span asp-validation-for="Email" className="text-danger"></span>
//                         </div>



//                         <label asp-for="PhoneNumber" className="col-md-2 control-label">موبایل</label>
//                         <div className="col-md-10 form__group">
//                             <input asp-for="PhoneNumber" className="form-control" />
//                             <span asp-validation-for="PhoneNumber" className="text-danger"></span>
//                         </div>





//                         {/* you should add confirtm password */}
//                         <label asp-for="Password" className="col-md-2 control-label">پسورد</label>
//                         <div className="col-md-10 form__group">
//                             <input
//                                 asp-for="Password"
//                                 className="form-control"

//                                 placeholder="Password"
//                                 required
//                             />
//                             <span asp-validation-for="Password" className="text-danger"></span>
//                         </div>




//                         <button type='submit' className='loginBtn'>ثبت نام </button>


//                         <label>
//                             <input type="checkbox" checked="checked" name="remember" /> بخاطر بسپار
//                         </label>


//                     </form>

//                     <Link asp-action="SendTotpCode" to='/login'>قبلا حساب کاربری ایجاد کرده ام  </Link><br />
//                     <Link asp-action="ForgotPassword" to='/register'>رمزعبور خود را فراموش کردید؟</Link>
//                 </div>

//             </Col>
//         </Row>
//     </Container>
// </section >


export default Register