const express = require("express");
const router = express.Router();
const foodcontroller = require("./Controller/FoodController")


router.route("/food").post(foodcontroller.store).get(foodcontroller.index);

router.route("/food/:id").get(foodcontroller.show).patch(foodcontroller.update).delete(foodcontroller.destroy)












module.exports = router;