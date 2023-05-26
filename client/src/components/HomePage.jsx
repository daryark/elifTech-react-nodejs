import { useEffect, useState } from "react";
import { getProducts } from "../api/index";
import { Container, Content, Description, List, Price } from "./App.styled";

export default function HomePage() {
	const [products, setProducts] = useState([]);
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

	return (
		<Container>
			{error !== null && <p>{error.message}</p>}
			{loading && <p>Loader</p>}
			<aside>its shops list alooot shops</aside>
			<List>
				{Boolean(products) &&
					products?.map(({ name, price, _id, image }) => (
						<li key={_id}>
							<Content>
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
