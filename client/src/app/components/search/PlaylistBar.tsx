"use client";

import axios from "axios";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const PlaylistBar = () => {

    const [url, setUrl] = useState('');
    const [songs, setSongs] = useState([]);

    const getSongs = async (passedUrl:String) => {
  
        const response = await axios.post('http://localhost:4000/playlist/getSpotPlaylist', {'url': passedUrl });
        if(response.data.type === 'Error' || response.data.type === 'Warning') {
            // Create a comp to render the error
            // In meantime, just console log
            console.log(response.data.message);
        }
        else {
            setSongs(response.data.tracks.items);
        }
    }

    return(
        <form className="w-[500px] relative" onSubmit={(e) => {
            e.preventDefault();
            getSongs(url);
        }}>
            <div className="relative">
                <input type="search" placeholder="Enter your Spotify URL here"
                    className="w-full p-4 rounded-full bg-slate-800" onChange={(e) => setUrl(e.target.value)} />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 
                    bg-slate-900 rounded-full">
                    <AiOutlineSearch/>
                </button>
            </div>
            {songs.length > 0 && (<div
                className="absolute top-20 p-4 bg-inherit text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-4 overflow-y-auto"
                style={{ maxHeight: '600px' }}>
                {songs.filter(s => s.track).map((s, index) => (
                    <iframe
                        frameBorder="0"
                        key={index}
                        src={`https://open.spotify.com/embed/track/${s.track.id}`}
                        width="100%"
                        height="80"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        style={{
                            borderRadius: "12px",
                        }}
                    />
                ))}
            </div>)}
        </form>
    )
};

export default PlaylistBar;