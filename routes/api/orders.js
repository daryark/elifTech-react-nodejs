const express = require("express");
const router = express.Router();

const orders = require("../../db/orders");

router.get("/", (req, res) => {
	res.json({
		data: { result: orders },
		code: 200,
	});
});

router.post("/", (req, res) => {
	const newOrder = { ...req.body, id: "id" };
	orders.push(newOrder);
	// if (!result) {
	// 	res.status(404).json({ code: 404, status: "error", message: `Shop with id:${id} not found` });
	// }
	res.status(201).json({
		data: { result: newOrder },
		code: 201,
		status: "success",
	});
});

module.exports = router;
