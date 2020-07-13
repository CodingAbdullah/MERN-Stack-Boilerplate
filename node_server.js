// USE THE MODULES HERE, WE ARE CONSTRUCTING THE EXPRESS SERVER.
const express = require("express");
const cors = require("cors"); // Allow for cross origin resource sharing
const mongoose = require("mongoose");
const URL = "process.env.CONNECTION_STRING";
const userRouter = require("routes/userRoutes");

const app = express(); // Create express server instance

app.listen(process.env.PORT, () => {
    console.log("Listening to PORT " + process.env.PORT); //Listen to a specific port
})

mongoose.connect(URL).then(() => {
    console.log("Successful connection to db");
})
.catch(err => {
    console.log(err)
});

app.use(express.json({extended: false}));
app.use(express.urlencoded({extended: false}));
app.use(cors());

/* ADD ALL THE ROUTES HERE INTO THE EXPRESS SERVER */
// app.use("URL", controllers go here...) 
app.use("/", userRouter);
