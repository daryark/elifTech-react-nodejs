// getAll shops
// getShopById - for searching products in one concrete shop

const express = require("express");
const router = express.Router();

const shops = require("../../model/shops");

router.get("/", (req, res) => {
	res.json({
		data: { result: shops },
		code: 200,
	});
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	const result = shops.find((item) => item.id === id);
	if (!result) {
		res.status(404).json({ code: 404, status: "error", message: `Shop with id:${id} not found` });
	}
	res.json({
		data: { result },
		code: 200,
		status: "success",
	});
});

module.exports = router;
