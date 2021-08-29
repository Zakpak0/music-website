import { deleteDoc, doc } from "firebase/firestore/lite"
import { db } from "../../../../firebase"

const Playlist = ({songname, album, artist, listref, callFirebase, playlist, key}): JSX.Element => {
            const deleteSong = async () => {
            const songref = doc(listref, songname)
            await deleteDoc(songref)
            callFirebase()
        }
    return (
        <div key={key} className="flex flex-grow justify-between min-w-max flex-row border">
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
                <div>
                    <div>
                        <button onClick={() => deleteSong()}>X</button>
                    </div>
                </div>
            </div>
        
    )
}
export default Playlist