import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home.jsx";
import { Practica } from "./views/Practica.jsx";
import { Examen } from "./views/Examen.jsx";

import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/practica" element={<Practica />} />
						<Route path="/examen" element={<Examen />} />
						{/* <Route path="*" element={<h1>Not found!</h1>} />  */}
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
