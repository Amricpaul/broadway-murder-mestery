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

const gamesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
        

export const gamesModel = mongoose.model('games', gamesSchema);
export const verficationModel = mongoose.model('verification', verificationSchema);
