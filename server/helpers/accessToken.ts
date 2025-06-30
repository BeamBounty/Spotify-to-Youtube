const axios = require('axios');
import qs from 'qs';

const client_id = process.env.SPOTIFY_API_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64')

const getSpotAuth = async () => {
    try {
        const token_url = 'https://accounts.spotify.com/api/token';
        const data = qs.stringify({'grant_type':'client_credentials'});
        
        const response = await axios.post(token_url, data, {
            headers: {
                'Authorization' : `Basic ${auth_token}`,
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        });

        return response.data.access_token;
    }
    catch(error:any) {
        return null;
    }
}

export { getSpotAuth }