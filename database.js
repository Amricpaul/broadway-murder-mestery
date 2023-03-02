import mongoose from 'mongoose';

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://amric:ninja2023@clusterv1.p3b35bu.mongodb.net/broadwaymysteries', (err) => {
   
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
