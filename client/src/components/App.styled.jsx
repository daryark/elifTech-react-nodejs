import styled from "styled-components";

export const Container = styled.div`
	padding: 20px;
	background-color: #e8e4ff;
	display: flex;
`;
export const Nav = styled.nav`
	display: flex;

	background-color: #f0edfd;
	border-bottom: 2px solid #3f2f9e;

	& a {
		padding: 20px;
		color: #3f2f9e;
		font-size: 20px;
		font-weight: 600;

		&:hover,
		:focus {
			background-color: #b7aeed;
			outline: none;
		}
	}
`;

export const AsideStyled = styled.aside`
	width: 20vw;
	font-weight: 700;
	font-size: 24px;

	@media screen and (max-width: 800px) {
		width: 30vw;
		font-size: 18px;
	}

	& li {
		padding-bottom: 5px;

		&:hover,
		:focus {
			color: #3f2f9e;
		}
	}
	& li:not(:last-child) {
		border-bottom: 2px solid #3f2f9e;
	}
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 5px;
	margin-left: 20px;

	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 500px) {
		grid-template-columns: 1fr;
	}

	& li {
		display: flex;
		min-height: 250px;
		min-width: 170px;
		border-radius: 5px;
		background-color: white;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex-grow: 1;
	padding: 20px 15px;
	&:hover,
	:focus {
		outline: 3px solid #b7aeed;
		border-radius: 2px;
		outline-offset: -2px;
	}
`;

export const Description = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 10px;
	min-width: 100%;
`;

export const Price = styled.p`
	font-weight: 600;
	white-space: nowrap;
`;
