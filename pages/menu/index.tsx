import CreatePlaylist from "../../components/menu/CreatePlaylist/CreatePlaylist"

const Menu = (): JSX.Element => {
    return (
        <div>
            <div className="flex justify-center py-0">
                <h1>Menu</h1>
            </div>
            <div className="flex mx-10 py-5 min-h-screen min-w-full border">
                <div className="flex text-center flex-col mx-1 lg:mx-3">
                    <div className="flex border">
                        <h1 className="flex justify-center w-40 lg:w-60">Create Playlist</h1>
                    </div>
                </div>
                <div className="flex py-5 lg:mx-5 justify-center flex-grow border w-full">
                    <CreatePlaylist/>
                </div>
            </div>
        </div>
    )
}
export default Menu