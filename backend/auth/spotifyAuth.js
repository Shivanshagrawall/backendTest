import axios from 'axios';

export const getAccessToken=async(code)=>{
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
              grant_type: 'authorization_code',
              code: code,
              redirect_uri: 'https://portfolio-gold-eta-46.vercel.app/callback',  // Use your actual redirect URI here
              client_id: process.env.CLIENT_ID,
              client_secret: process.env.CLIENT_SECRET,
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          });

          const {access_token, refresh_token}=response.data;
          console.log("Access Token: ",access_token);
          console.log("Refresh Token", refresh_token);

          return {access_token, refresh_token};
    } catch (error) {
        console.log("Error in getting access token: ", error.message);
        
    }
}

export const refreshAccessToken = async (refreshToken) => {
    try {
      const response = await axios.post('https://accounts.spotify.com/api/token',null, {
        params: {
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
        },
        headers: {
          'Content-Type':'application/x-www-form-urlencoded',
        },
      });
  
      const {access_token} = response.data;
      console.log('New Access Token',access_token);
      return access_token;
    } catch (error) {
      console.error('Error refreshing access token:',error.message);
    }
  };