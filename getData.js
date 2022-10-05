const mongoose = require("mongoose");
const Dish = require("./models/dish");
const Restaurant = require("./models/restaurant");
const User = require("./models/user");
const { ObjectId } = require("mongodb");
const getRestaurantsInfo = require("./middlewares/getRestaurantsInfo");
const getAllDishes = require("./middlewares/getAllDishes");
const fs = require("fs");
const path = require("path");

const db =
    "mongodb+srv://Michael:mixanya19972505@cluster0.mpenlh3.mongodb.net/food_delivery?retryWrites=true&w=majority";

// mongoose
// .connect(db)
// .then((res) => console.log('Connect to DB'))
// .catch((err) => console.log(err));

const getData = async function (request, response, next) {
    const allMenu = [];

    //  Add main info about all restaurants
    const kfc = await getRestaurantsInfo(
        Restaurant,
        "62fd0c4a1f3a671a69e62a13"
    );
    const sharkys = await getRestaurantsInfo(
        Restaurant,
        "62fd0c4a1f3a671a69e62a14"
    );
    const mcDonalds = await getRestaurantsInfo(
        Restaurant,
        "62fd0c4a1f3a671a69e62a15"
    );
    // allMenu.push(...kfc, ...sharkys, ...mcDonalds);

    //  Add all menus to their restaurants
    const kfc1 = await getAllDishes("62fd0c4a1f3a671a69e62a13");
    const sharkys1 = await getAllDishes("62fd0c4a1f3a671a69e62a14");
    const mcDonalds1 = await getAllDishes("62fd0c4a1f3a671a69e62a15");
    kfc.menu = "menu";
    console.log(kfc);
    // const arr = {...allMenu, menu: kfc1};
    // console.log(kfc[0]);
    let kfc2 = JSON.parse(JSON.stringify(sharkys));
    kfc2.menu = mcDonalds1;

    console.log(kfc2);
    // response.end(JSON.stringify([kfc2]));

    new Promise((resolve, reject) => {
        return fs.readFile(
            path.join(require.main.path, "restaurants.json"),
            (err, data) => {
                if (err) reject(err);
                resolve(data);
            }
        );
    }).then((data) => response.end(data));

    // allMenu[1].menu = sharkys1;
    // allMenu[2].menu = mcDonalds1;
    // console.log(allMenu[0]);

    // //  McDonalds menu
    // Dish.find({restaurantsId: "62fbb6db1b9335dbc2923bff"})
    // .then((res) => menu_mcDonalds.push(...res));
    // //  Sharkys menu
    // Dish.find({restaurantsId: "62fbb6db1b9335dbc2923bfe"})
    // .then((res) => menu_sharkys.push(...res));
    // //  KFC menu
    // Dish.find({restaurantsId: "62fbb6db1b9335dbc2923bfd"})
    // .then((res) => menu_kfc.push(...res));
};
module.exports = getData;
