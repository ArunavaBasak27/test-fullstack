import React, { useEffect, useState } from "react";
import { testApi } from "../api/testApi";

const Home = () => {
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
	return <div>Home:{message}</div>;
};

export default Home;
