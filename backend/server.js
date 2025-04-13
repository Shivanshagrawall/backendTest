import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import spotifyRoutes from './routes/spotifyRoutes.js';

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
await connectDB();


const PORT=process.env.PORT || 4000;

app.use('/spotify',spotifyRoutes);


app.get('/',(req,res)=>{
    res.send("Server is working fine");
})


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})