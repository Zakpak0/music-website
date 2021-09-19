import Link from "next/link"
import Menu from "./menu"
import { useState } from 'react'
import { authsignin } from "../services/auth"
import { useRouter } from 'next/router'
const signin = (): JSX.Element => {
    const router = useRouter()
    const [input, setInput] = useState({
        userName: "",
        password: ""
    })
    const [userName, useUserName] = useState(null)
    const [password, usePassword] = useState(null)
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
            <div className="flex mx-10 flex-col flex-grow">
        <div>
            <div className="flex justify-center lg:py-8">
                <div className="flex flex-col justify-center text-center">
                    <h1>Log in</h1>
                            <div className="border w-80 lg:h-100 p-5 lg:mt-32">
                                <div className="lg:pt-10">
                                    <div>
                                        <h1 className="border">
                                            User Name
                                        </h1>
                                    </div>
                                    <div className="p-3">
                                        <input name="userName" value={input.userName} onChange={handler} className="border text-center py-3" placeholder={"User Name"}></input>
                                        <p className=" text-red-600 text-xs">{userName ? userName : null}</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h1 className="border">
                                            Password
                                        </h1>
                                    </div>
                                    <div className="flex justify-center py-3">
                                        <div className="flex flex-row">
                                            <div className="flex flex-col">
                                                <input name="password" type={showPassword === true? "text" : "password"} value={input.password} onChange={handler} className="border text-center py-3" placeholder={"Password"}></input>
                                                <p className=" text-red-600 text-xs">{password ? password : null}</p>
                                            </div>
                                                <button className="text-4xl" onClick={() => setShowPassword(!showPassword)}>*</button>
                                            </div>
                                    </div>
                                </div>
                                <div className="border mx-14 w-40">
                                        <button
                                    userName={input.userName} 
                                    password={input.password}
                                    useUserName={useUserName} 
                                    usePassword={usePassword} 
                                    setInput={setInput}
                                    router={router}
                                    onClick={() => authsignin(
                                        input, 
                                        useUserName,
                                        usePassword,
                                        setInput,
                                        router)}
                                        className="border text-center w-40 py-3">Log In
                                        </button>
                                </div>
                                <div className="flex flex-row justify-center px-8 pt-5 -mb-5 text-xs underline" >
                                    <div>
                                        <Link href="/forgotpassword">Forgot Password</Link>
                                    </div>
                                    <div className="pl-3">
                                        <Link href="/signup">Create An Account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default signin