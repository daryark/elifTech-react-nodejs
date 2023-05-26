const Product = require("./product");
const { Order, joiSchema } = require("./order");
const Shop = require("./shop");

module.exports = {
	Product,
	Shop,
	Order,
	joiSchema,
};
