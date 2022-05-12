const router = require("express").Router();
const DishController = require("../controllers/dish.controller");

router.get("/", DishController.getAllDishes);
router.get("/:id", DishController.getDishById);
router.post("/", DishController.createDish)

module.exports = router