const Dish = require("../models/dish.model");


class DishService {
    static async getAllDishes(){
        const dishes = await Dish.find({});
        return dishes
    }

    static async getDishById(dishId){
        const dish = await Dish.findById(dishId).populate(
            "dishName",
            "dishPrice",
            
            
        );

        return dish
    }

    static async createDish(dishData) {
        const dish = new Dish(dishData)

        const response = await dish.save();
        console.log(response)

        return dish
    }
};

module.exports = DishService;