import Link from "next/link"

const forgotpassword = () => {
    return (
        <div className="flex mx-10 flex-col flex-grow border">
    <div className="border w-full h-full">
        <div className="flex border h-full justify-center lg:py-8">
            <div className="flex border w-5/12 flex-col justify-center text-center">
                <h1>Forgot Password</h1>
                        <div className="border w-full lg:h-100 p-5 lg:mt-2">
                            <div className="lg:pt-10">
                                <div>
                                    <h1 className="border">
                                        E-mail address
                                    </h1>
                                </div>
                                <div className="p-3">
                                    <input className="border text-center py-3" placeholder={"User Name"}></input>
                                </div>
                            </div>
                            <div>
                            </div>
                            <div className="flex flex-grow w-full border justify-center">
                                    <button className="border text-center w-40 py-3">Send Code</button>
                            </div>
                            <div className="flex flex-row justify-center px-8 pt-5 -mb-5 text-xs underline" >
                                <div>
                                    <Link href="/signup">Create Account</Link>
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

export default forgotpassword