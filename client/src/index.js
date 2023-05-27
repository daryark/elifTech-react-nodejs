import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalStyles />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

console.log("say hello");
reportWebVitals();
