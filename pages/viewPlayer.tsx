import Player from "../components/player/player"

const viewplayer = (): JSX.Element => {
    return(
        <div className="box-border">
            <div className="flex items-center justify-center body m-0 font-serif bg-gradient-to-b from-red-100 to-white">
                <Player/>
            </div>
        </div>
    )
}

export default viewplayer