const express = require('express');
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

app.use(express.json());

dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTypology: true,
    useCreateIndex: true,
}).then(console.log("connected to Mongo db")).catch((err) => console.log(err));


app.use("/api/auth", authRoute);


app.listen("5000", () => {
console.log("Backend is running well");
})

module.exports = router