import Link from "next/link"
import { useState } from "react"

const signup = () => {
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const [fieldvalues, setFieldValues] = useState({
        firstName: null,
        lastName: null,
        userName: null,
        email: null,
        password: null,
        confirmpassword: null}
    )
    const [showPassword, setShowPassword] = useState(false)
    const handler = (e) => {
        e.preventDefault()
        const value = e.target.value
        setInput({
            ...input,
            [e.target.name]: value
        })
        if(value === ""){
        setFieldValues({
            ...input,
            [e.target.name]: `is Required`
        })}
        console.log(fieldvalues)  
    }
        // if(request.firstName.length < 1){
        //         setFieldValues({
        //             firstName: 'First Name is required'});}
        // if(request.userName.length < 1){
        //         setFieldValues({
        //             userName: 'User Name is required'});}
        // if(request.email.length < 1){
        //         setFieldValues({
        //             email: 'Email is required'});}
        // if(request.password.length < 1){
        //         setFieldValues({
        //             password: 'Password is required'});}
        // if(request.confirmpassword.length < 1){
        //         setFieldValues({
        //             confirmpassword: 'Please confirm your password'});}
    const signup = () => {
        if( input.firstName.length < 1
            ||
            input.lastName.length < 1
            ||
            input.userName.length < 1
            ||
            input.email.length < 1
            ||
            input.password.length < 1
            ||
            input.confirmpassword.length < 1){
            setFieldValues({
            firstName: "Required",
            lastName: "Required",
            userName: "Required",
            email: "Required",
            password: "Required",
            confirmpassword: "Required"
            })}else{
            setFieldValues({
            firstName: null,
            lastName: null,
            userName: null,
            email: null,
            password: null,
            confirmpassword: null
                })
        setInput({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
console.log(input)
}
    }
    return (
        <div className="flex mx-10 flex-col flex-grow border">
    <div className="border w-full h-full">
        <div className="flex border h-full justify-center lg:py-8">
            <div className="flex border w-full lg:w-5/12 flex-col justify-center text-center">
                <h1>Create an Account</h1>
                        <div className="border w-full lg:h-100 p-5 lg:mt-2">
                            <div className="lg:flex flex-grow border justify-evenly flex-row">
                            <div className="pt-10 flex-col items-center flex-grow flex">
                                <div>
                                    <h1 className="border">
                                        First Name
                                    </h1>
                                </div>
                                <div className="p-3">
                                    <input name="firstName" value={input.firstName} onChange={handler} className="border text-center py-3" placeholder={"First Name"}/>
                                    <p className=" text-red-600 text-xs">{fieldvalues.firstName ? "First Name is Required" : null}</p>
                                </div>
                            </div>
                            <div className="pt-10 flex-col items-center flex-grow flex">
                                <div className="">
                                    <h1 className="border">
                                        Last Name
                                    </h1>
                                </div>
                                <div className="py-3">
                                    <input name="lastName" value={input.lastName} onChange={handler} className="border text-center py-3" placeholder={"Last Name"}/>
                                    <p className=" text-red-600 text-xs">{fieldvalues.lastName ? "Last Name " + fieldvalues.lastName : null}</p>
                                </div>
                            </div>
                            </div>
                            <div className="lg:flex flex-grow border justify-evenly flex-row">
                            <div className="pt-10 flex-col items-center flex-grow flex">
                                <div>
                                    <h1 className="border">
                                        User Name
                                    </h1>
                                </div>
                                <div className="p-3">
                                    <input name="userName" value={input.userName} onChange={handler} className="border text-center py-3" placeholder={"User Name"}/>
                                    <p className=" text-red-600 text-xs">{fieldvalues.userName ? "User Name " + fieldvalues.userName : null}</p>
                                </div>
                            </div>
                            <div className="pt-10 flex-col items-center flex-grow flex">
                                <div className="">
                                    <h1 className="border">
                                        E-mail
                                    </h1>
                                </div>
                                <div className="py-3">
                                    <input name="email" value={input.email} onChange={handler} className="border text-center py-3" placeholder={"E-mail"}/>
                                    <p className=" text-red-600 text-xs">{fieldvalues.email ? "Email Name " + fieldvalues.email : null}</p>
                                </div>
                            </div>
                            </div>
                            <div className="lg:flex flex-grow border justify-evenly flex-row">
                            <div className="pt-10 flex-col items-center flex-grow flex">
                                <div>
                                    <h1 className="border">
                                        Password
                                    </h1>
                                </div>
                                <div className="p-3">
                                    <div className="flex flex-row">
                                    <div className="flex flex-col">
                                    <input name="password" type={showPassword === true? "text" : "password"} value={input.password} onChange={handler} className="border text-red-600 text-center py-3" placeholder={"Password"}/>
                                    <p className=" text-red-600 text-xs">{fieldvalues.password ? "Password " + fieldvalues.password : null}</p>
                                    </div>
                                    <button className="text-4xl" onClick={() => setShowPassword(!showPassword)}>*</button>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-10 flex-col items-center flex-grow flex">
                                <div className="">
                                    <h1 className="border">
                                        Confirm Password
                                    </h1>
                                </div>
                                <div className="py-3">
                                    <div className="flex flex-row">
                                    <div className="flex flex-col">
                                    <input type={showPassword === true? "text" : "password"} name="confirmpassword" value={input.confirmpassword} onChange={handler} className="border text-center py-3" placeholder={"Confirm Password"}/>
                                    <p className=" text-red-600 text-xs">{fieldvalues.confirmpassword ? "Please re-enter Your Password" : null}</p>
                                    </div>
                                    <button className="text-4xl" onClick={() => setShowPassword(!showPassword)}>*</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="flex flex-grow w-full border justify-center">
                                    <button onClick={(e) => signup(e)} className="border text-center w-40 py-3">Sign up</button>
                            </div>
                            <div className="flex flex-row justify-center px-8 pt-5 -mb-5 text-xs underline" >
                                <div>
                                    <Link href="/forgotpassword">Forgot Password</Link>
                                </div>
                                <div className="pl-3">
                                    <Link href="/signin">Log in here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default signup