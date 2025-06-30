const axios = require('axios');
import qs from 'qs';
require('dotenv').config();
const { getSpotAuth } = require('../helpers/accessToken');

async function parseSpotifyUrl(url:string) {

    // Check that URL is a valid spotify URL
        // If not then return an error
    
    // If a valid URL, take information from URL that is needed to send to API
    // Make API call
    // Return JSON results like {type: Success, message: "Fetched successfully", data: returned-json}
    try {
        const parseUrl = new URL(url);
        if(parseUrl.protocol != 'https' && !parseUrl.hostname.includes('open.spotify.com')) {
            return {type: 'Warning', message: 'An invalid URL was submitted, please try a different URL', data: null};
        }

        const access_token = await getSpotAuth();
        if(access_token === null) {
            return {type: 'Warning', message: 'Access Token In-Accessible, please try again later', data: null};
        }

        // Grab playlist ID from pathname
        const playlistID = parseUrl.pathname.split('/',3)[2];

        const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistID}`, {
            headers: {
                'Authorization':`Bearer ${access_token}`
            }
        });

        return response.data;
        
    } catch(error:any) {
        return {type: 'Error', message: 'An error has occured, please try again later', data: null};
    }
}

function convertToYT(json: JSON) {
    // Make sure JSON isn't empty
        // If empty throw an error

    // Format JSON properly for YT API
    // Send to YT API with JSON data
    // Return a dictionary like {type: Success, message: "Sent successfully", data: json}
}

export { parseSpotifyUrl }