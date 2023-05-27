import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const serverHost = process.env.SERVER_HOST;

// Rest of your code...

axios.defaults.baseURL = serverHost;

export const getProducts = async () => {
	const { data } = await axios.get("/api/products");

	return data;
};

export const getShops = async () => {
	const { data } = await axios.get("/api/shops");

	return data;
};
