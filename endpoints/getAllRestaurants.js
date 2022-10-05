const Restaurant = require('../models/restaurant');

const getAllRestaurants = async (request, response) => {
    try{
        const restaurants = await Restaurant.find({}, {name: 1, address: 1, image: 1, telephone: 1,}).then((res) => res);
        response.end(JSON.stringify(restaurants));
    } catch(error) {
        console.log(error);
    }
}
module.exports = getAllRestaurants