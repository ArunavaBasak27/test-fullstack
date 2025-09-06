import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { testApi } from "./api/testApi";

function App() {
	const [count, setCount] = useState(0);
	const [message, setMessage] = useState("");
	async function fetchData() {
		try {
			const response = await testApi();
			setMessage(response.message);
		} catch (error) {
			console.log(error.message);
		}
	}
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			<h2>Hello {message}</h2>
		</div>
	);
}

export default App;
