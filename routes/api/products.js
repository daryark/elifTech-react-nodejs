const express = require("express");
const router = express.Router();

const products = require("../../db/products");

router.get("/", (req, res) => {
	res.json({
		data: { result: products },
		code: 200,
	});
});

module.exports = router;
