// getAll shops
// getShopById - for searching products in one concrete shop

const express = require("express");
const router = express.Router();

const { NotFound } = require("http-errors");
const { Shop } = require("../../models");

router.get("/", async (_, res, next) => {
	try {
		const shops = await Shop.find({});
		if (!shops) {
			throw new NotFound();
		}
		res.json({ result: shops });
	} catch (error) {
		next(error);
	}
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
