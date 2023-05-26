const express = require("express");
const router = express.Router();

const { NotFound, BadRequest } = require("http-errors");
const { joiSchema, Order } = require("../../models");

router.get("/", async (_, res, next) => {
	try {
		const orders = await Order.find({});
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
		const { error } = joiSchema.validate(req.body);
		if (error) throw new BadRequest(error.message);

		const createdOrder = await Order.create(req.body);

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
