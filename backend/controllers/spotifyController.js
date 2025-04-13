import { getAccessToken, refreshAccessToken } from "../auth/spotifyAuth.js";

export const getTokenFromCode=async(req,res)=>{
    const code=req.query.code;

    const {access_token, refresh_token}=await getAccessToken(code);
    res.json({access_token, refresh_token});

}