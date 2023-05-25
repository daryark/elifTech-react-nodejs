const Joi = require("joi");
const phonePattern = /^\+?\d{0,2}\s?-?\(?\d{3}\)?\s?-?\d{3}(\s?-?\d{2}){2}$/;

const orderSchema = Joi.object({
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

module.exports = orderSchema;
