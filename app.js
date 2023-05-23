const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const productsRouter = require("./routes/api/products");
const shopsRouter = require("./routes/api/shops");
const ordersRouter = require("./routes/api/orders");

const app = express();

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
