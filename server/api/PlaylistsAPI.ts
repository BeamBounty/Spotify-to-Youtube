import express, { Router } from 'express';
const { parseSpotifyUrl } = require('../components/Playlists');

const router: Router = express.Router();

router.get('/getSpotPlaylist', async (req: any, res: any) => {
    const spotUrl = req.body.url as string;
    
    if (!spotUrl) {
        return res.status(400).json({ type: 'Error', message: 'Missing Spotify URL' });
    }

    try {
        const result = await parseSpotifyUrl(spotUrl);
        return res.status(200).json(result);
    } catch (error: any) {
        return res.status(500).json({ type: 'Error', message: error.message || 'Unexpected error' });
    }
});

export default router;

