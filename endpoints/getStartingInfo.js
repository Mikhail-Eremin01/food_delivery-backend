const Restaurant = require('../models/restaurant');
const getAllDishes = require('../middlewares/getAllDishes');

const getStartingInfo = async (request, response) => {
    try{
        const restaurants = await Restaurant.find({}, {name: 1, address: 1, image: 1, telephone: 1,}).then((res) => res);
        const allMcDonaldsDishes = await getAllDishes('62fd0c4a1f3a671a69e62a15');
        const startData = {
            restaurants,
            allMcDonaldsDishes
        }
        response.end(JSON.stringify(startData));
    } catch(error) {
        console.log(error);
    }
}
module.exports = getStartingInfo