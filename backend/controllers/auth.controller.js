const productController = {};

const Product = require('../models/Product');

productController.getProduct = async (req,res) => {
    const token = req.body;
	if (JSON.stringify(token) !== "{}") {
		const list = await Product.find();
		res.json(list);
	} else {
		res.json({ message: 'Falta autentificacion' });
	}
};

module.exports = productController;