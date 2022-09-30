const express = require('express');
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./post/users");
const categoryRoute = require("./post/categories");

app.use(express.json());

dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
     useNewUrlParser: true,
     useUnifiedTypology: true,
    useCreateIndex: true,
}).then(console.log("connected to Mongo db")).catch((err) => console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


app.listen("5000", () => {
console.log("Backend is running on port 5000");
})

