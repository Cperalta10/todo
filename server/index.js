const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const todoRoute = require("./routes/todoRoute");

const PORT = process.env.port || 9000;
mongoose.set("strictQuery", false);

const app = express();

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log(`Connected to MongoDB`);
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/todo", todoRoute);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
