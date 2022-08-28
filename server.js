const express = require('express');
const getData = require('./getData');
const getStartingInfo = require('./endpoints/getStartingInfo');
const getAllRestaurantsDishes = require('./endpoints/getAllRestaurantsDishes');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const db = `mongodb+srv://Michael:${process.env.MONGODB_PASS}@cluster0.mpenlh3.mongodb.net/food_delivery?retryWrites=true&w=majority`;

mongoose
.connect(db)
.then((res) => console.log('Connect to DB'))
.catch((err) => console.log(err));

app.listen(process.env.PORT || 3001, ()=> {
    console.log(`Server is started on port ${process.env.PORT}`);
})

app.get('/mainData', getStartingInfo);
app.get('/getAllRestaurantsDishes', getAllRestaurantsDishes);