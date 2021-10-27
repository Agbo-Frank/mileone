var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20')
var User = require('../model/User')
require('dotenv').config()

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.use(
    new GoogleStrategy({
        callbackURL: '/api/auth/google/redirect',
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.SECRET
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        User.findOne({email: profile.emails[0].value})
          .then(user => {
              if(user){
                console.log('existing user' + user);
                done(null, user)
              }
              else{
                var newUser = new User({
                    name: profile.displayName,
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    image: profile._json.picture
                })
        
                newUser.save()
                  .then(user => {
                      console.log('created user' + user)
                      done(null, user)
                    })
                  .catch(err => console.log(err))
              }
          })
          .catch(err => console.log(err))
        
    })
)