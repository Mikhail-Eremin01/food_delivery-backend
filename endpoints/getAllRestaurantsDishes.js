const getAllDishes = require('../middlewares/getAllDishes');

const getAllRestaurantsDishes = async (request, response) => {
    try{
        const allDishes = await getAllDishes(request.query.id);
        response.end(JSON.stringify(allDishes));
    } catch(error) {
        console.log(error);
    }
}
module.exports = getAllRestaurantsDishes