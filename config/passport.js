const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
let passport = require("passport");
// let rootURL;
let Player = require("../model/player");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      Player.findOne({ googleId: profile, id }, function (err, player) {
        if (err) return cb(err);
        if (player) {
          return cb(null, student);
        } else {
          let newPlayer = new Player({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          newPlayer.save(function (err) {
            if (err) {
              return cb(err);
            } else {
              return cb(null, newPlayer);
            }
          });
        }
      });
    }
  )
);
// new user that was created so that we can set up a session
// this is where u can use done() function
passport.serializeUser();

// when a request comes in from an existing user
// and we want to assign to the req.user object
passport.deserializeUser();
