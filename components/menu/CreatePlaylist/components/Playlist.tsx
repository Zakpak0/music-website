const Playlist = ({songname, album, artist}): JSX.Element => {
    return (
            <div className="flex flex-grow justify-between min-w-max flex-row border">
                <div className="flex flex-grow justify-start">
                    <div>
                        <h1>{songname}</h1>
                    </div>
                </div>
                <div className="flex flex-grow justify-start">
                    <div>
                        <h1>{artist}</h1>
                    </div>
                </div>
                <div className="flex flex-grow justify-start">
                    <div> 
                        <h1>{album}</h1>
                    </div>
                </div>
            </div>
        
    )
}
export default Playlist