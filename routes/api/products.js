const express = require("express");
const router = express.Router();

const { NotFound } = require("http-errors");
const operations = require("../../model");

router.get("/", async (_, res, next) => {
	try {
		const products = await operations.getProducts();
		if (!products) {
			throw new NotFound();
		}
		res.json({
			data: { result: products },
			code: 200,
		});
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const shopProducts = await operations.getProductsByShopId(id);

		if (!shopProducts) {
			throw new NotFound(`Shop with id:${id} not found`);
		}
		res.json({
			data: { result: shopProducts },
			code: 200,
			status: "success",
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
