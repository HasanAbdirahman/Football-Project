const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
let rootURL;
let Player = require("../model/player");

app.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      let option = {
        URL,
      };
    }
  )
);
