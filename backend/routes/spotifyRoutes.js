import express from 'express';
import {getTokenFromCode} from '../controllers/spotifyController.js';

const router=express.Router();

// router.get('/top-tracks',getTopTracks);
// router.get('/now-playing',getNowPlaying);
// router.put('/play',playTrack);
// router.put('/pause',pauseTrack);
router.get('/callback',getTokenFromCode)

export default router;