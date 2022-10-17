import express from "express";
import userController from "../controllers/user-controller";
import restaurantsController from "../controllers/restaurants-controller";
import { body } from "express-validator";

const router = express.Router();

router.post(
    "/registration",
    body("email").isEmail(),
    body("password").isLength({ min: 3, max: 32 }),
    userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/restaurants", restaurantsController.getAllRestaurants);
router.get("/allRestaurantsDishes/:id", restaurantsController.getAllRestaurantsDishes);

export default router;
