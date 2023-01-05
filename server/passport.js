const passport = require('passport');

require('dotenv').config();

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "658989538241-c4lr6i3vn2vr8lkgfnm3enq5iu04p3d0.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
    new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});