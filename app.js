const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");

const productsRouter = require("./routes/api/products");
const shopsRouter = require("./routes/api/shops");
const ordersRouter = require("./routes/api/orders");

const app = express();

const DB_HOST =
	"mongodb+srv://daryark:jEMUE9bPRjVTqeRg@cluster0.gzspade.mongodb.net/food_delivery?retryWrites=true&w=majority";
mongoose
	.connect(DB_HOST)
	.then(console.log("Database connected"))
	.catch((err) => {
		console.log(err.message);
		process.exit(1);
	});

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/shops", shopsRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
	res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
	const { status = 500, message = "Server error" } = err;
	res.status(status).json({ message });
});

app.listen(3001, () => {
	console.log("App listening on port 3001!");
});

//jEMUE9bPRjVTqeRg
//mongodb+srv://daryark:<password>@cluster0.gzspade.mongodb.net/
