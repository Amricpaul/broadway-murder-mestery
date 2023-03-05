import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import env from 'dotenv';
env.config();

import {verficationModel} from './database.js';
import {emailSchema, verficationSchema} from './validator.js';
import {verificationTemplate} from './MailTemplate/verification.js';
import {emailTemplate} from './MailTemplate/email.js';



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port =  process.env.PORT || 3000;

//resolve cors error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//mailing config
const transporter = 
    nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user : process.env.EMAIL_ADDRESS,
        pass : process.env.EMAIL_PASS,
    }
    });



//send email verification pin
app.post('/send/verification', async (req, res) => {

    let validator = verficationSchema.validate(req.body);
    if (validator.error) {
        const errorMessage = validator.error.details[0].message.replace(/['"]/g, '');
        return res.status(400).json({success: false, message: 'Error sending verification code'});
    }

    const pin = crypto.randomBytes(3).toString('hex');
    const name = req.body.hostName;
    const email = req.body.hostEmail;

    //set pin expiry to 60 mintues
    const verification = new verficationModel({
        email: email,
        pin: pin,
        expiry: Date.now() + 3600000
    });
    verification.save().then(result => {

        const mailOptions = {
            from: process.env.EMAIL_ADDRESS,
            to: email,
            subject: 'Verification PIN',
            html: (verificationTemplate({pin: pin})),
          };
    
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(error);
              return res.status(400).json({success: false, message: 'Error sending verification code'});
            } else {
              console.log(`Email sent: ${info.response}`);
              return res.status(200).json({success: true, message: 'Verification code sent'});
            }
          });
    })
    .catch(err => {
        console.error(err);
        return res.status(400).json({success: false, message: 'Error sending verification code'});
    });
    
});


//verify pin
async function verifyPin (email, pin){
    const now = new Date();
    const verification = await verficationModel.findOne({
      email: email,
      pin: pin,
      expiry: { $gt: now }
    });
  
    if (!verification) {
      // If no matching document was found, the PIN is not valid
      return false;
    }
  
    // If a matching document was found and the expiry time is in the future, the PIN is valid
    return true;
}
    

app.post('/send-email', async(req, res) => {
    
    const { error } = emailSchema.validate(req.body);
    if(error) {
      const errorMessage = error.details[0].message.replace(/['"]/g, '');
      return res.status(400).json({ success: false, message: errorMessage });
    }

        let data = {
            hostName: req.body.hostName,
            hostEmail: req.body.hostEmail,
            hostPin: req.body.hostPin,
            partyDate: req.body.partyDate,
            partyTime: req.body.partyTime,
            partyLocation: req.body.partyLocation,
            noteFromHost: req.body.noteFromHost,
            game: {},
        };

        let verify = await verifyPin(data.hostEmail, data.hostPin); 
        if(!verify){
            return res.status(400).json({ success: false,  message: 'Invalid PIN' });
        }

        let games = req.body.selectedGame;
        games.forEach(game => {
            data.game = game
            game.characters.forEach(async (character) => {
              
                if(character.player.email && character.player.email.length > 0) {
                    const mailOptions = {
                        from: process.env.EMAIL_ADDRESS,
                        to: character.player.email,
                        subject: `You're Invited to a Murder Mystery Party By ${data.hostName}`,
                        html: (await emailTemplate(data, character))
                    }

                    transporter.sendMail(mailOptions, (error, info) => {
                            if(error) console.log('ERROR: ',error);
                            console.log('Email sent to: ', character.player.email, Date());
                    });
                }
            }); 
        });

        return res.status(200).json({success: true, message: 'check Successfully'});
});
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

