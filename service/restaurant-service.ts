import Dish from "../models/dish";

class RestaurantService {
    async getAllDishes(Rest_id: string){
        const res = await Dish.find({ restaurantsId: Rest_id }, { dishesName: 1, price: 1, weight: 1, image: 1, available: 1, restaurantsId: 1 });
        return res;
    }
}

export default new RestaurantService();