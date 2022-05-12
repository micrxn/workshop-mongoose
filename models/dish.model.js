const mongoose = require("mongoose");
const {Schema} = mongoose;


const dishSchema = new Schema(
    {
        dishName: {
            type: String,
            required: [true, "Dish Name is required"],
            minlength: 2,
        },
        dishPrice: {
            type: Number,
            min: 2,
            required: [true, "Dish Price is required"],
        },
        dishDescription: {
            type: String,
            required: [true, "Dish Description is required"],
            minlength: 10,
        },
        // orders: {
        //     type: Schema.Types.ObjectId,
        //     ref: "Order",
        // }
    }
)

const Dish = mongoose.model("Dish", dishSchema)

module.exports = Dish