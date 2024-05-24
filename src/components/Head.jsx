import React, { useEffect } from 'react'
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import VideocamIcon from '@mui/icons-material/Videocam';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom"
import { useState } from 'react';
import { YOUTUBE_SUGGESTION_API } from '../utils/constant';
import { youtubeStore } from '../utils/userStore';
import ButtonList from './ButtonList';



const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const { toggleMenu } = youtubeStore();
    useEffect(() => {


        const timer = setTimeout(() => getSearchSuggestions(), 200);
        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery])


    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery)
        const json = await data.json();
        setSuggestions(json[1])

    }

    const toggleMenuHandler = () => {
        toggleMenu();
    };



    return (

        <div className="flex justify-between shadow-md flex-col fixed h-32 w-full bg-white">
            <div> <div className='flex justify-between fixed w-full bg-white'>
                <div className="flex m-4 gap-5">

                    <button onClick={() => toggleMenuHandler()} ><MenuIcon /></button>

                    <Link to="/"><button className='w-24 h-10 '>
                        <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png" />
                    </button>
                    </Link>
                </div>


                <div className='flex m-4 w-3/4  justify-center relative'>

                    <input className='border-2 rounded-l-full w-1/2 px-4'
                        type="text"
                        list="browsers"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => { setShowSuggestions(true) }}
                        onBlur={() => { setShowSuggestions(false) }}>
                    </input>

                    <button className='border rounded-r-full w-10 bg-gray-300' ><SearchIcon /></button>
                    <div className='flex items-center justify-center w-8'> <MicIcon /></div>
                    {showSuggestions && (<div className='absolute pl-4 -bottom-72 w-1/2 z-30 left-[22%] rounded-md mt-1 bg-slate-50'>
                        <ul >
                            {suggestions.map((s) => (

                                <li key={s} className='m-1 hover:bg-slate-200'>{s}</li>
                            ))}

                        </ul>
                    </div>)}
                </div>

                <div className='flex m-4 items-center justify-evenly w-48 '>
                    <div > <VideocamIcon /></div>
                    <div> <NotificationsNoneIcon /></div>
                    <div> <AccountCircleIcon /></div>


                </div>




            </div >
            </div>

            <div className="w-full mx-48">
                <ButtonList />
            </div>
        </div>
    )
}

export default Head
