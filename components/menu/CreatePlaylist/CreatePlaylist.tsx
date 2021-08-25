import { useState } from "react"
import Playlist from "./components/Playlist"

const CreatePlaylist = (): JSX.Element => {
    const [input, setInput] = useState({
        playlist: "",
        songname: "",
        artist: "",
        album: "",
        youtube: ""
    })
    const handleChange = (e) => {
        const value =  e.target.value
        setInput({
            ...input,
            [e.target.name]: value
        })
    }

    const songList = [
        {
        songname: "So Alone",
        artist: "Zak",
        album: "Norm"
    },
            {
        songname: "So Alone",
        artist: "Zak",
        album: "Norm"
    },
            {
        songname: "So Alone",
        artist: "Zak",
        album: "Norm"
    },
            {
        songname: "So Alone",
        artist: "Zak",
        album: "Norm"
    }
]
const add = () => {
console.log(input)
setInput({
        playlist: "",
        songname: "",
        artist: "",
        album: "",
        youtube: ""
})
}

    return (
    <div className="flex mx-10 flex-col flex-grow">
        <div>
            <div className="flex justify-center py-8">
                <div className="flex flex-col justify-center text-center">
                    <h1>Create Playlist</h1>
                    <input name="playlist" value={input.playlist} onChange={handleChange} className="text-center my-5 py-2 border" placeholder="Playlist Name" />
                </div>
            </div>
        </div>
        <div className="space-y-10 ">
            <div className="flex justify-center">
                <div className="grid space-x-10 py-8 grid-cols-1 lg:grid-cols-2">
                    <div className="flex py-5 flex-row space-x-5">
                            <div>
                                <p>Song Name</p>
                            </div>
                            <div>
                                <input name="songname" value={input.songname} onChange={handleChange} className="border"/>
                            </div>
                    </div>
                    <div className="flex py-5 flex-row space-x-5">
                            <div>
                                <p>Artist</p>
                            </div>
                            <div>
                                <input name="artist" value={input.artist} onChange={handleChange} className="border" />
                            </div>
                    </div>
                    <div className="flex py-5 flex-row space-x-5">
                            <div>
                                <p>Album</p>
                            </div>
                            <div>
                                <input name="album" value={input.album} onChange={handleChange} className="border" />
                            </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-row space-x-5">
                        <div>
                            <p>YouTube Link</p>
                        </div>
                        <div>
                            <input name="youtube" value={input.youtube} onChange={handleChange} className="border" placeholder="Link" />
                        </div>
                </div>
            </div>
                    <div className="flex justify-center">
                        <button onClick={() => add()} className="py-4 px-12 border">Add</button>
                    </div>
        </div>
            <div className="flex flex-col my-5 justify-center pr-5">
                {input.playlist != "" ? <div className="flex justify-center py-5 border">
                    <h1>{input.playlist}</h1>
                </div> : null }
        <div className="flex border px-16 flex-grow min-w-max">
            <div className="flex flex-grow justify-between min-w-max flex-row">
                <div className="flex flex-grow">
                    <div className="flex flex-col justify-start">
                        <h1>Song Name</h1>
                    </div>
                </div>
                <div className="flex flex-grow">
                    <div className="flex flex-col justify-start">
                    <h1>Artist</h1>
                    </div>
                </div>
                <div className="flex flex-grow">
                    <div className="flex flex-col justify-start"> 
                        <h1>Album</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="my-5 mx-5">
            {songList.map((songlist) => {
                return ( 
                <div className="py-3">
                <Playlist {...songlist} key={songlist.songname}/>
                </div>
                )
            })}
        </div>
            </div>
        
    </div>
    )
}
export default CreatePlaylist