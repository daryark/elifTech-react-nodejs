const express = require("express");
const router = express.Router();

const { NotFound } = require("http-errors");
const { Product } = require("../../models");

router.get("/", async (_, res, next) => {
	try {
		const products = await Product.find({});
		if (!products) {
			throw new NotFound();
		}
		console.log("its products");
		res.json({ result: products });
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const shopProducts = await Product.find({ _id: id });

		if (!shopProducts.length) {
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
