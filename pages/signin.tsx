const signin = (): JSX.Element => {
    return (
            <div className="flex mx-10 flex-col flex-grow">
        <div>
            <div className="flex justify-center lg:py-8">
                <div className="flex flex-col justify-center text-center">
                    <h1>Log in</h1>
                            <div className="border w-80 lg:h-80 p-5 lg:mt-32">
                                <div className="lg:pt-10">
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
                                <div className="border mx-14 w-40">
                                        <button className="border text-center w-40 py-3">Log In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default signin