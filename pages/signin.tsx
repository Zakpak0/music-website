const signin = (): JSX.Element => {
    return (
            <div className="flex mx-10 flex-col flex-grow">
        <div>
            <div className="flex justify-center py-8">
                <div className="flex flex-col justify-center text-center">
                    <h1>Log in</h1>
                            <div className="border w-80 h-80 p-5 mt-32">
                                <div className="pt-10">
                                    <div>
                                        <h1 className="border">
                                            User Name
                                        </h1>
                                    </div>
                                    <div className="p-3">
                                        <input className="border text-center py-3" placeholder={"User Name"}></input>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h1 className="border">
                                            Password
                                        </h1>
                                    </div>
                                    <div className="py-3">
                                        <input className="border text-center py-3" placeholder={"Password"}></input>
                                    </div>
                                </div>
                                <div className="border">
                                        <button className="border text-center py-3">Log In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default signin