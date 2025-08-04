const db = require("../models");
const Product = db.Product;
const User = db.User;

exports.event = async (req, res) => {
  try {
    const events = req.body;
    switch (events.type) {
      case "ProductCreated":
        console.log(events.data);
        await Product.create(events.data);
        break;

      case "ProductDeleted": 
        await Product.destroy({
          where: { id: events.data },
        });
        break;

      case "ProductUpdated": 
        await Product.update(events.data, {
          where: { id: events.id }
        });
        break; 

      case "UserCreated":
        await User.create(events.data);
        break; 

      case "UserDeleted": 
        await User.destroy({
          where: { id: events.data },
        });
        break;

      case "UserUpdated": 
        await User.update(events.data, {
          where: { id: events.id }
        });
        break;

      default:
        // return res.status(400).json({ error: "Unknown event type" });
        break;
    }
    res.status(200).json({ status: "OK" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
