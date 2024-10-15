const foods = require("../Models/FoodModel");



const store = async (req, res) => {
  const food = new foods(req.body);
  try {
    await food.save();
    res.status(200).json({ msj: "food saved" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};



const index = async (req, res) => {
  const allfoods = await foods.find({});

  if (!allfoods) {
    return res.status(404).json({ err: "no food found" });
  }
  try {
    res.status(200).json({ allfoods });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};



const show = async (req, res) => {
  const food = await foods.find({ _id: req.params.id });
  if (!food) {
    return res.status(404).json({ err: "no food found" });
  }

  try {
    res.status(200).json({ food });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};


const update = async (req, res) => {
    try {
      const food = await foods.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      if (!food) {
        return res.status(404).json({ error: "not found" });
      }
      res.status(200).json({ msj: "updated", food });
    } catch (error) {
      res.status(500).json({ err: error });
    }
  };
  


  const destroy = async (req, res) => {
    try {
      await foods.deleteOne({ _id: req.params.id });
      res.status(201).send("deleted");
    } catch (error) {
      res.status(404).send("not found");
    }
  };
 


  module.exports = {
    store,
    index,
    show,
    update,
    destroy
  };