import Restaurant from '../models/restaurant';

const getAllRestaurants = async (request: any, response: any) => {
    try{
        const restaurants = await Restaurant.find({}, {name: 1, address: 1, image: 1, telephone: 1,}).then((res) => res);
        response.end(JSON.stringify(restaurants));
    } catch(error) {
        console.log(error);
    }
}
export default getAllRestaurants