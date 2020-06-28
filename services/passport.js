const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accesToken, refreshToken, profile, done) => {
      try {
        const userExist = await User.findOne({ googleId: profile.id });
        if (userExist) {
          return done(null, userExist);
        }
        const newUser = await User.create({ googleId: profile.id });
        done(null, newUser);
      } catch (err) {
        // console.log(err);
      }
    }
  )
);
