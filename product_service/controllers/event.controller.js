const db = require("../models");
const Product = db.Product;

exports.event = async (req, res) => {
  try {
    const events = req.body;
    switch (events.type) {
      case "TransactionsCreated":
        const product = await Product.findByPk(events.data.productId);
        if (!product)
          return res.status(404).json({ error: "Product tidak ditemukan" });

        product.stock -= events.data.quantity;
        await product.save();
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
