const express = require("express");
const router = express.Router();

const { NotFound } = require("http-errors");
const operations = require("../../model");

router.get("/", async (_, res, next) => {
	try {
		const orders = await operations.getOrders();
		if (!orders) {
			throw new NotFound();
		}
		res.json({
			data: { result: orders },
			code: 200,
			status: "success",
		});
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const createdOrder = await operations.createOrder(req.body);

		res.status(201).json({
			data: { result: createdOrder },
			code: 201,
			status: "success",
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
