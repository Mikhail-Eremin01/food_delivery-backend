const express = require("express");
// const getData = require('./getData');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const getAllRestaurants = require("./endpoints/getAllRestaurants");
const getAllRestaurantsDishes = require("./endpoints/getAllRestaurantsDishes");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./router/index");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const PORT = process.env.PORT || 3001;
const app = express();
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);
app.use(errorMiddleware);
const start = async () => {
    try {
        //  connect to MongoDB
        await mongoose
            .connect(process.env.DB_URL)
            .then((res) => console.log("Connect to DB"));
        //  connect to server
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};
start();

app.get("/mainData", getAllRestaurants);
app.get("/getAllRestaurantsDishes", getAllRestaurantsDishes);
