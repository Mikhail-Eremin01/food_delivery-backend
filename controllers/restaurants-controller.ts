import { Request, Response, NextFunction } from 'express';
import Restaurant from '../models/restaurant';
import restaurantService from '../service/restaurant-service';

class RestaurantController {
    async getAllRestaurants(req: Request, res: Response, next: NextFunction) {
        try{
            const restaurants = await Restaurant.find({}, {name: 1, address: 1, image: 1, telephone: 1,}).then((res) => res);
            res.end(JSON.stringify(restaurants));
        } catch(error) {
            console.log(error);
        }
    }

    async getAllRestaurantsDishes(request:Request, response:Response) {
        try{
            const allDishes = await restaurantService.getAllDishes(request.params.id);
            response.end(JSON.stringify(allDishes));
        } catch(error) {
            console.log(error);
        }
    }
}

export default new RestaurantController();