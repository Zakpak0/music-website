import Image from 'next/image'
import wizkid from '../images/wizkid.png'
import {musicplaylist, currentlist} from '../../services/music'
import { PlayIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
const Player = (): JSX.Element => {
    const [play, usePlay] = useState(false)
    const [tune, useTune] = useState(0)
    useEffect(() => {
        musicplaylist()
    },[])
    const tuneDown = () => {
        let num = tune
        if(tune > 0)
        num -= 1
        useTune(num)
    }
    const tuneUp = () => {
        let num = tune
        if(tune < currentlist.length - 1)
        num += 1 
        useTune(num)
    }
    console.log(tune)
    return(
        <div className="box-border">
            <div className="flex flex-col">
                <div className="flex relative music-container z-10 bg-white rounded-2xl shadow-xl">
                    <div className={play === true ? 'music-info music-container-play' : 'music-info'}>
                        <h4 className='m-0'>{currentlist[tune]}</h4>
                            <div className="progress-container">
                                <div className="progress bg-red-500">
                                </div>
                            </div>
                        </div>
                        <audio src='undefined' id="audio"></audio>
                        <div className="image-container rounded-full">
                            <div className={play === true ? 'imageplay' : 'imagepause'}>
                            <Image className={play === true ? 'imageplay' : 'imagepause'} src={wizkid} alt="music-cover" id="cover" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center z-10">
                            <button>
                            <ChevronDoubleLeftIcon onClick={() => tuneDown()} className="button"/>
                            </button>
                            <button>
                            <PlayIcon onClick={() => usePlay(!play)} className="button-big"/>
                            </button>
                            <button>
                            <ChevronDoubleRightIcon onClick={() => tuneUp()} className="button"/>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Player