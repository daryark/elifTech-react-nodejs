import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export const getProducts = async () => {
	const { data } = await axios.get("/api/products");

	return data;
};
