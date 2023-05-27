import { useEffect, useState } from "react";
import { getShops } from "../api/index";

import { AsideStyled } from "./App.styled";

function Aside() {
	const [shops, setShops] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getShopsAll() {
			try {
				setLoading(true);
				const { result } = await getShops();
				setShops(result);
				setError(null);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
		getShopsAll();
	}, []);

	const handleClick = (e) => {
		e.preventDefault();
		console.log("click on shop");
		// async function getShopProducts(id) {
		// 	try {
		// 		console.log(id);
		// 		const { result } = await getShopProductsById(id);
		// 		console.log(result);
		// 		// setError(null);
		// 	} catch (error) {
		// 		// setError(error.message);
		// 		console.log(error.message);
		// 	} finally {
		// 		// setLoading(false);
		// 	}
		// }
		// getShopProducts();
	};
	return (
		<AsideStyled>
			{error !== null && <p>{error.message}</p>}
			{loading && <p>Loading shops</p>}
			<ul>
				{Boolean(shops) &&
					shops?.map(({ name, _id }) => (
						<li key={_id} onClick={handleClick}>
							<a href="./">{name}</a>
						</li>
					))}
			</ul>
		</AsideStyled>
	);
}

export default Aside;
