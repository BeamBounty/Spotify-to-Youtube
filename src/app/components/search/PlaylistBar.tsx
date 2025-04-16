"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const PlaylistBar = () => {

    const [url, setUrl] = useState([]);

    const tempSearch = (e) => {
        if(e.target.value == '') {
            setUrl([])
            return false;
        }
        setUrl(e);
    } 

    return(
        <form className="w-[500px] relative">
            <div className="relative">
                <input type="search" placeholder="Enter your Spotify URL here"
                    className="w-full p-4 rounded-full bg-slate-800" onChange={(e) => tempSearch(e)} />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 
                    bg-slate-900 rounded-full">
                    <AiOutlineSearch/>
                </button>
            </div>
            {
                url.length > 0 && (<div className="absolute top-20 p-4 bg-slate-800 text-white w-full
                    rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                    {
                        url.map(s => (
                            <span>{s}</span>
                        ))
                    }
                </div>)
            }
            
        </form>
    )
};

export default PlaylistBar;