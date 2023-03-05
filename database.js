import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, (err) => {
   
        console.log("Connected to MongoDB");
});

const verificationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    pin: {
        type: String,
        required: true,
    },
    expiry: {
        type: Date,
        required: true,
    }
  });


export const verficationModel = mongoose.model('verification', verificationSchema);
