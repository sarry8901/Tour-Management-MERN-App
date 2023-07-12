import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from '../backend/routes/tours.js'
import userRoute from '../backend/routes/users.js'
import authRoute from '../backend/routes/auth.js'
import reviewRoute from '../backend/routes/reviews.js'
import bookingRoute from '../backend/routes/booking.js'
import path from 'path';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions= {
  origin:true,
  credentials:true
}

// database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('db connected');
  } catch (err) {
    console.log('db connection failed');
  }
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'./client/build')))
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/review',reviewRoute);
app.use('/api/v1/booking',bookingRoute);


// rest api
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})



app.listen(port, () => {
    connect();
  console.log(`server listening on port ${port}`);
});