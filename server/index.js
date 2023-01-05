const express = require("express");
const app = express()
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth")
const cors = require("cors")

app.use(cookieSession(
    {
        name: "session",
        keys: ["lama"],
        maxAge: 24*60*60*100
    }
))
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "https://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

app.use("/auth", authRoute);

app.listen(5555, () => {
    console.log("server is running")
})