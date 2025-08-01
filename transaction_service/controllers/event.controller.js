const db = require("../models");
const Product = db.Product;
const User = db.User;

exports.event = async (req, res) => {
  try {
    const events = req.body;
    // console.log(events)
    if (events.type === "ProductCreated") {
      await Product.create({
        id: events.data.id,
        name: events.data.name,
        price: events.data.price,
        stock: events.data.stock
      });
    }

    if (events.type === "UserCreated") {
      await User.create({
        id: events.data.id,
        name: events.data.name,
        email: events.data.email,
        password: events.data.password
      });
    }

    res.status(200).json({ status: "OK" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
