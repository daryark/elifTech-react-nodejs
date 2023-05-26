const { schema, model, Schema } = require("mongoose");
const Joi = require("joi");
const phonePattern = /^\+?\d{0,2}\s?-?\(?\d{3}\)?\s?-?\d{3}(\s?-?\d{2}){2}$/;

const orderSchema = Schema(
	{
		name: String,
		email: { type: String, required: true },
		phone: { type: String, match: phonePattern },
		address: { type: String, required: true },
		order: {
			type: [
				{
					type: {
						product_id: Schema.Types.ObjectId,
						quantity: { type: Number, min: 1 },
						price: { type: Number, min: 0.01 },
					},
				},
			],
		},
		total_price: { type: Number, min: 0.01 },
	},
	{ versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
	name: Joi.string().alphanum(),
	email: Joi.string().email().required(),
	phone: Joi.string().pattern(phonePattern).required(),
	address: Joi.string().required(),
	order: Joi.array()
		.min(1)
		.items({
			product_id: Joi.string(),
			quantity: Joi.number().min(1),
			price: Joi.number().positive(),
		})
		.required(),
	total_price: Joi.number().required(),
});

const Order = model("order", orderSchema);

module.exports = { Order, joiSchema };
