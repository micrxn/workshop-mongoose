const Dish = require("../models/dish.model");
const DishService = require("../services/dish.service");


class DishController {
    static async getAllDishes(req, res) {
        try {
            const dishes = await DishService.getAllDishes()

            res.status(200).send(dishes)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    }

    static async getDishById(req, res) {
        try {
            const dishId = req.params.id
            const dish = await DishService.getDishById(dishId)

            if(!dish) return res.status(404).send({msg:`Dish with that id not found`})

            res.status(200).send(dish)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    }

    static async createDish(req, res){
        try {
            const dishData = req.body

            const dish = await DishService.createDish(dishData)

            res.status(201).send(dish)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    }
}

module.exports = DishController