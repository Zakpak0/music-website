import Link from "next/link"

const signup = () => {
    return (
        <div className="flex mx-10 flex-col flex-grow border">
    <div className="border w-full h-full">
        <div className="flex border h-full justify-center lg:py-8">
            <div className="flex border w-5/12 flex-col justify-center text-center">
                <h1>Create an Account</h1>
                        <div className="border w-full lg:h-100 p-5 lg:mt-2">
                            <div className="flex flex-grow border justify-evenly flex-row">
                            <div className="pt-10 flex-col items-center flex-grow flex">
                                <div>
                                    <h1 className="border">
                                        First Name
                                    </h1>
                                </div>
                                <div className="p-3">
                                    <input className="border text-center py-3" placeholder={"First Name"}></input>
                                </div>
                            </div>
                            <div className="pt-10 flex-col items-center flex-grow flex">
                                <div className="">
                                    <h1 className="border">
                                        Last Name
                                    </h1>
                                </div>
                                <div className="py-3">
                                    <input className="border text-center py-3" placeholder={"Last Name"}></input>
                                </div>
                            </div>
                            </div>
                            <div className="flex flex-grow border justify-evenly flex-row">
                            <div className="pt-10 flex-col items-center flex-grow flex">
                                <div>
                                    <h1 className="border">
                                        User Name
                                    </h1>
                                </div>
                                <div className="p-3">
                                    <input className="border text-center py-3" placeholder={"User Name"}></input>
                                </div>
                            </div>
                            <div className="pt-10 flex-col items-center flex-grow flex">
                                <div className="">
                                    <h1 className="border">
                                        E-mail
                                    </h1>
                                </div>
                                <div className="py-3">
                                    <input className="border text-center py-3" placeholder={"E-mail"}></input>
                                </div>
                            </div>
                            </div>
                            <div className="flex flex-grow border justify-evenly flex-row">
                            <div className="pt-10 flex-col items-center flex-grow flex">
                                <div>
                                    <h1 className="border">
                                        Password
                                    </h1>
                                </div>
                                <div className="p-3">
                                    <input className="border text-center py-3" placeholder={"Password"}></input>
                                </div>
                            </div>
                            <div className="pt-10 flex-col items-center flex-grow flex">
                                <div className="">
                                    <h1 className="border">
                                        Confirm Password
                                    </h1>
                                </div>
                                <div className="py-3">
                                    <input className="border text-center py-3" placeholder={"Confirm Password"}></input>
                                </div>
                            </div>
                            </div>
                            <div className="flex flex-grow w-full border justify-center">
                                    <button className="border text-center w-40 py-3">Sign up</button>
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