import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { testApi } from "./api/testApi";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
