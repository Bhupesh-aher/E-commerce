import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";


// App Config
const app = express();
const port = process.env.PORT || 4000
connectCloudinary();


// middlewares

app.use(express.json())
app.use(cors())


// api endpoints
app.use('/api/user', userRouter)




app.get('/', (req, res) => {
    res.send('API Working')
})


connectDB().then(() => {
    console.log('Database Connected Successfully');
    app.listen(port, () => {
        console.log("server is successfully listening on PORT: " + port);
        
    })
})
.catch(() => {
    console.log("server cannot be connected!");
    
    
})


