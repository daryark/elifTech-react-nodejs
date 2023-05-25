const fs = require("fs/promises");
const path = require("path");

const ordersPath = path.join(__dirname, "./orders.json");
const productsPath = path.join(__dirname, "./products.json");
const shopsPath = path.join(__dirname, "./shops.json");

//-----------products-----------
const getProducts = async () => {
	return JSON.parse(await fs.readFile(productsPath));
};

const getProductsByShopId = async (shopId) => {
	const products = await getProducts();
	const shopProducts = products.filter((item) => item.shop_id === shopId);
	return shopProducts.length ? shopProducts : null;
};

//-----------orders-----------
const getOrders = async () => {
	return JSON.parse(await fs.readFile(ordersPath));
};

const createOrder = async (body) => {
	const orders = await getOrders();

	const newOrder = { id: "id", ...body };
	orders.push(newOrder);
	await fs.writeFile(ordersPath, JSON.stringify(orders));
	return newOrder;
};

//-----------shops-----------
const getShops = async () => {
	return JSON.parse(await fs.readFile(shopsPath));
};

module.exports = {
	getProducts,
	getProductsByShopId,
	getOrders,
	createOrder,
	getShops,
};
