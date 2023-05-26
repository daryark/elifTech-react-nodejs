import styled from "styled-components";

export const Container = styled.div`
	padding: 20px;
	background-color: #e8e4ff;
	display: flex;
`;
export const Nav = styled.nav`
	display: flex;
	gap: 15px;
	background-color: #f0edfd;
	border-bottom: 2px solid #3f2f9e;

	& a {
		padding: 20px;
		color: #3f2f9e;
		font-size: 20px;
		font-weight: 600;

		&:hover {
			background-color: #b7aeed;
		}
	}
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 3px;
	margin-left: 20px;

	& li {
		display: flex;
		padding: 20px 10px;
		margin-bottom: 5px;
		border-radius: 5px;
		background-color: white;
	}
`;

export const Content = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex-grow: 1;
`;

export const Description = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
`;

export const Price = styled.p`
	font-weight: 600;
`;
