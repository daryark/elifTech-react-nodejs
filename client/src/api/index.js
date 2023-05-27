import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

axios.defaults.baseURL = baseUrl;

export const getProducts = async () => {
	const { data } = await axios.get("/api/products");

	return data;
};

export const getShops = async () => {
	const { data } = await axios.get("/api/shops");

	return data;
};

export const getShopProductsById = async (id) => {
	const { data } = await axios.get("/api/shops/:id");

	return data;
};
