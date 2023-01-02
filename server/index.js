const express = require("express");
const cookieSession = require("cookie-session");
const app = express()

app.arguments(cookieSession({
    name: "session",
    keys:["lama"],
    maxAge: 24*60*60*100
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "https://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

app.listen("5000", ()=>{
    console.log("server is running")
})