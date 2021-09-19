import Link from "next/link"
import { useState } from "react"
import {authsignup} from '../services/auth'
import { useRouter } from 'next/router'

const signup = () => {
    const router = useRouter()
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const [firstName, useFirstName] = useState(null)
    const [lastName, useLastName] = useState(null)
    const [userName, useUserName] = useState(null)
    const [email, useEmail] = useState(null)
    const [password, usePassword] = useState(null)
    const [confirmpassword, useConfirmPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const handler = (e) => {
        e.preventDefault()
        const value = e.target.value
        setInput({
            ...input,
            [e.target.name]: value
        })
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
                                    <p className=" text-red-600 text-xs">{firstName ? firstName : null}</p>
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
                                    <p className=" text-red-600 text-xs">{lastName ? lastName : null}</p>
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
                                    <p className=" text-red-600 text-xs">{userName ? userName : null}</p>
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
                                    <p className=" text-red-600 text-xs">{email ? email : null}</p>
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
                                    <input name="password" type={showPassword === true? "text" : "password"} value={input.password} onChange={handler} className="border text-center py-3" placeholder={"Password"}/>
                                    <p className=" text-red-600 text-xs">{password ? password : null}</p>
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
                                    <p className=" text-red-600 text-xs">{confirmpassword ? confirmpassword : null}</p>
                                    </div>
                                    <button className="text-4xl" onClick={() => setShowPassword(!showPassword)}>*</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="flex flex-grow w-full border justify-center">
                                    <button
                                    firstName={input.firstName}
                                    lastName={input.lastName} 
                                    userName={input.userName} 
                                    email={input.email}
                                    password={input.password}
                                    confirmpassword={input.confirmpassword}
                                    useFirstName={useFirstName} 
                                    useLastName={useLastName} 
                                    useUserName={useUserName} 
                                    useEmail={useEmail} 
                                    usePassword={usePassword} 
                                    useConfirmPassword={useConfirmPassword}
                                    setInput={setInput}
                                    router={router}
                                    onClick={() => authsignup(
                                        input, 
                                        useFirstName,
                                        useLastName,
                                        useUserName,
                                        useEmail,
                                        usePassword,
                                        useConfirmPassword,
                                        setInput,
                                        router
                                    )} className="border text-center w-40 py-3">Sign up</button>
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