import { useEffect, useState } from "react";
import { getProducts, getShops } from "../api/index";
import { Aside, Container, Content, Description, List, Price } from "./App.styled";

export default function HomePage() {
	const [products, setProducts] = useState([]);
	const [shops, setShops] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getProductsAll() {
			try {
				setLoading(true);
				const { result } = await getProducts();
				setProducts(result);
				setError(null);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
		getProductsAll();
	}, []);

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

	return (
		<Container>
			{error !== null && <p>{error.message}</p>}
			{loading && <p>Loader</p>}
			<Aside>
				<ul>
					{Boolean(shops) &&
						shops?.map(({ name, _id }) => (
							<li key={_id}>
								<a href="./">{name}</a>
							</li>
						))}
				</ul>
			</Aside>
			<List>
				{Boolean(products) &&
					products?.map(({ name, price, _id, image }) => (
						<li key={_id}>
							<Content href="./">
								{image && <img src={image} alt={name} style={{ width: "200px" }} />}
								<Description>
									<p>{name}</p>
									<Price>{price} $</Price>
								</Description>
							</Content>
						</li>
					))}
			</List>
		</Container>
	);
}
