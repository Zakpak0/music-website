import { useState } from "react"
import Playlist from "./components/Playlist"
import { db } from "../../../firebase"
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { getDoc, collection, doc, setDoc, getDocs, addDoc  } from "@firebase/firestore/lite"
const CreatePlaylist = (): JSX.Element => {
  //Base case - what gets it to go and stop when it's met
  //Random ID created to refrence the session
    const listId = Math.floor(Math.random() * 10000) + 1;
  //Random ID created to refrence the sessions playlist name
    const nameId = Math.floor(Math.random() * 10000) + 1;
  //Storage of the session ID in state
    const [currentName, usecurrentName] = useState(listId)
  //Storage of the playlist ID in state
    const [currentList, usecurrentList] = useState(nameId)
  //A firebase call used to refrence the firestore collection 
  //containing the current session's data
    const listref = collection(db, `${currentList}`)
  //A firebase call used to refrence the firestore collection 
  //containing the current session's data playlist name data
    const nameref = doc(db, `${currentList}`, `${currentName}`)
  //Storage of all the data within the current session for display  
    const [currentplaylist, usecurrentplaylist] = useState([])
  //Storage of the current playlist name for display  
    const [currentname, usecurrentname] = useState([])
  //A trigger for saving or updating the playlist name  
    const [playList, useplayList] = useState(false)
  //The state which holds the playlist name's input  
    const [listName, setListName] = useState({
        playlist: ""
    })
  //The state which holds the playlist's details input   
    const [input, setInput] = useState({
        songname: "",
        artist: "",
        album: "",
        youtube: ""
    })
  //A call to firestore used to update state to current values  
    const callFirebase = async () => {
    const listData = await getDocs(listref)
    const nameData = await getDoc(nameref)
    usecurrentplaylist(listData)
    usecurrentname(nameData)}
    const handleChange = (e) => {
        e.preventDefault()
        const value =  e.target.value
        setListName({
            ...listName,
            [e.target.name]: value
        })
        setInput({
            ...input,
            [e.target.name]: value
        })
    }
const saveplaylist = async () => {
    useplayList(true)
    const post = listName
    await setDoc(nameref, post)
    callFirebase()
}

const add = async (e) => {
if(input.songname.length > 0){
const songref = doc(db, `${input.songname}`)
console.log(input)
e.preventDefault()
await setDoc(songref, input)
setInput({
        songname: "",
        artist: "",
        album: "",
        youtube: ""
})}
}

    return (
    <div className="flex mx-10 flex-col flex-grow">
        <div>
            <div className="flex justify-center py-8">
                <div className="flex flex-col justify-center text-center">
                    <h1>Create Playlist</h1>
                        <div>
                            {playList === false ? 
                            (<div className="flex flex-row">
                            <input name="playlist" value={listName.playlist} onChange={handleChange} className="text-center my-5 py-2 border" placeholder="Playlist Name" />
                            <button className="ml-5 border h-5 w-10 pb-7 text-center mt-7" onClick={() => saveplaylist()}>Save</button>
                            </div>) : 
                            (<div className="flex flex-row">
                                <h1 className="text-center ml-2 my-5 px-6 py-2">{currentname.data()?.playlist}</h1>
                                <button className="ml-8 border pb-7 w-6 h-5 mt-7" onClick={() => useplayList(false)}>X</button>
                            </div>)}
                        </div>
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
                {/* {listName.playlist != "" ? <div className="flex justify-center py-5 border">
                    <h1>{listName.playlist}</h1>
                </div> : null } */}
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
            {/* {currentplaylist? (currentplaylist?.docs.map((songlist) => {
                return ( 
                <div className="py-3">
                <Playlist {...songlist} 
                            key={songlist.id}
                            songname={songlist.data().songname}
                            artist={songlist.data().artist}
                            album={songlist.data().album}
                            youtube={songlist.data().youtube}
                />
                </div>
                )
            })): (<p>Add Songs</p>)} */}
        </div>
            </div>
        
    </div>
    )
}
export default CreatePlaylist