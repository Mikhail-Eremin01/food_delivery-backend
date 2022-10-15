import getAllDishes from '../middlewares/getAllDishes';

const getAllRestaurantsDishes = async (request:any, response:any) => {
    try{
        const allDishes = await getAllDishes(request.query.id);
        response.end(JSON.stringify(allDishes));
    } catch(error) {
        console.log(error);
    }
}
export default getAllRestaurantsDishes