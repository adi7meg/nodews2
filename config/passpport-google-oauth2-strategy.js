const  passport  = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/users');




//Tell passport to use  a new strategy for google login
passport.use(new googleStrategy({
     clientID: "385271146454-orpdfh3d2av5bf53a5os5821m1qg054v.apps.googleusercontent.com",
     clientSecret: "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",
     callbackURL: "http://localhost:8000/users/auth/google/callback",
    },
    function(accessToken, refreshToken,profile,done){
        //Find a user 
        User.findOne({email:profile.emails[0].value}).exec((function(err,user){
            if(err){console.log('error in google strategy-passport',err);return;}

            console.log(accessToken,refreshToken);
            console.log(profile);
            if(user){
                //If found, set the user as req.user
                return done(null,user);
            }else{
                //If not found, create the user set it as req.user
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex'),
                },function(err,user){
                    if(err){console.log('error in creating user',err);return;}

                    return done(null,user);
                })
            }
        }));
        
    }

));

module.exports = passport;