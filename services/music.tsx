import { getDoc, collection, doc, setDoc, getDocs, addDoc, deleteDoc, collectionGroup,   } from "@firebase/firestore/lite"
import { db } from "../firebase"
let currentlist = []

const musicplaylist = async () => {
const listref = collection(db, `${9592}`)
const nameref = doc(db, `${9592}`, `${4787}`)

let list = await getDocs(listref)
if(list.empty){
    console.log('No matching documents.')
    return
}
if(currentlist.length === 0)
list.forEach(doc => {
    currentlist.push(doc.data().songname.slice(0))
})
console.log(currentlist)
return(currentlist)    
}
export {musicplaylist, currentlist}