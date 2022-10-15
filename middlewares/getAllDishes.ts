import Dish from "../models/dish";

const getAllDishes = function(Rest_id: string){
    return Dish.find({restaurantsId: Rest_id}, {dishesName: 1, price: 1, weight: 1, image: 1, available: 1, restaurantsId: 1})
    .then((res)=> {
        return res;
    });
}
export default getAllDishes