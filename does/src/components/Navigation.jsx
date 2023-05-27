import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import HomePage from "./HomePage";
import CartPage from "./CartPage";

import { Nav } from "./App.styled";

function Navigation() {
	return (
		<>
			<Nav>
				<NavLink to="/">Make order</NavLink>
				<NavLink to="/cart">Cart</NavLink>
			</Nav>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
}

export default Navigation;
