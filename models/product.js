const { schema, model, Schema } = require("mongoose");

const productSchema = Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			min: [0.01, "price must be at least 0.01"],
			required: true,
		},
		shop_id: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Shop",
		},
	},
	{ versionKey: false, timestamps: true }
);

const Product = model("product", productSchema);

module.exports = Product;
